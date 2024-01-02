import React, { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  console.log(name);
  
  return (
    <div
      style={{
        backgroundColor: '#DADADA',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p style={{ fontSize: '1.5rem', textAlign: 'center', color: 'rgb(93, 64, 55)' }}>
        Đến chung vui cùng bọn mình nhé!
      </p>
      <div>
            
        <label style={{fontSize: '1.1rem'}} htmlFor="inp">Tên bạn: </label>
        <input
          id="inp"
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{
            outline: 'none',
            border: 'none',
            padding: '.3rem 1rem',
            marginBottom: '1rem', 
          }}
        />
      </div>
      <div style={{ width: '100%',  display: 'flex', justifyContent: 'space-around' }}>
        <button className="contact-btn">Mình sẽ đến</button>
        <button className="contact-btn">Tiếc quá! Mình bận mất rồi! </button>
      </div>
    </div>
  );
};
