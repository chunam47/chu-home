import { collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";

const useFirestore = (collections, condition) => {
  const [documents, setDocuments] = useState([]);
  console.log(db);
  useEffect(() => {
    let collectionRef = collection(db, "createdAt");
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data
        setDocuments([]);
        return;
      }

      // collectionRef = collectionRef.where(
      //   condition.fieldName,
      //   condition.operator,
      //   condition.compareValue
      // );
    }

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    });

    return unsubscribe;
  }, [collections, condition]);

  return documents;
};

export default useFirestore;
