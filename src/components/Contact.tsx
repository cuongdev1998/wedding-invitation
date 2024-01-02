import React, { useState } from 'react';
import { dataRef } from '../firebase';
import { Radio, RadioChangeEvent } from 'antd';

export const Contact = () => {
  const [name, setName] = useState('');
  const [friendOf, setFriendOf] = useState('bride');
  console.log(name);

  const send = (value: boolean) => {
    dataRef
      .ref('user')
      .push({
        name: name,
        answer: value,
        friend: friendOf
      })
      .then(() => {
        setName('');

        alert('Cảm ơn bạn đã cho mình xin thông tin!');
      })
      .catch((err) => console.log(err));
  };

  const onChange = (e: RadioChangeEvent) => {
    setFriendOf(e.target.value);
  };

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
        <label style={{ fontSize: '1.1rem' }} htmlFor="inp">
          Tên bạn:{' '}
        </label>
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
          value={name}
        />
      </div>
      <div style={{ marginBottom: '20px',  padding: '0 5rem', width: '100%', display: 'flex', alignItems: 'center',justifyContent: 'space-around' }} >
      <Radio.Group onChange={onChange} value={friendOf}>
        <Radio value={'bride'}>Bạn Cô Dâu</Radio>
        <Radio value={'groom'}>Bạn Chú Rể</Radio>
        </Radio.Group>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => send(true)} className="contact-btn">
          Mình sẽ đến
        </button>
        <button onClick={() => send(false)} className="contact-btn">
          Tiếc quá! Mình bận mất rồi!{' '}
        </button>
      </div>
    </div>
  );
};
