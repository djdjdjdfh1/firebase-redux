import React, { useEffect } from 'react'
import { db } from '../database/firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function FireStore() {
  useEffect(()=>{
    const getData = async() => {
      const querySnapshot = await getDocs(collection(db, "data"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
      });
    }
    getData();
  }, [])

    const addData = async() => {
        try {
            const docRef = await addDoc(collection(db, "data"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    
  return (
    <div>
        FireStore
        <button
        onClick={addData}
        >
            버튼
        </button>
    </div>
  )
}
