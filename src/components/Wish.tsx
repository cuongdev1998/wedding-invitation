import React, { useEffect, useState } from 'react';
import { dataRef } from '../firebase';

interface Item {
  id: string;
  name: string;
  content: string;
}

export const Wish = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await dataRef.ref('/user').once('value');
        const firebaseData = snapshot.val();
        if (firebaseData) {
          const dataArray: Item[] = Object.keys(firebaseData).map((key) => ({
            id: key,
            ...firebaseData[key],
          }));
          setData(dataArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{color: 'rgb(93, 64, 55)', margin: '2rem 0',backgroundColor: '#DADADA', padding: '1rem', maxHeight: '500px', overflow: 'hidden', overflowY: 'auto'}} >
      {data?.map((item: any) => (
        <div style={{borderBottom: '1px dashed #d9d9d9'}}>
          <h3 style={{fontSize: '1.5rem'}}>{item?.name}</h3>
          <div>{item?.content}</div>
        </div>
      ))}
    </div>
  );
};
