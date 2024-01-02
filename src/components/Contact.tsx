import React, { useState } from 'react';
import { dataRef } from '../firebase';
import { Radio, RadioChangeEvent } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export const Contact = () => {
  const [name, setName] = useState('');
  const [friendOf, setFriendOf] = useState('bride');
  const [content, setContent] = useState('')
  console.log(name);

  const send = (value: boolean) => {
    if (name) {
      dataRef
        .ref('user')
        .push({
          name: name,
          answer: value,
          friend: friendOf,
          content: content
        })
        .then(() => {
          setName('');
            setContent('')
          alert('Thank you so much!');
        })
        .catch((err) => console.log(err));
    } else {
      alert('Hihi bạn thiếu tên rùi nè!');
    }
  };

  const onChange = (e: RadioChangeEvent) => {
    setFriendOf(e.target.value);
  };

  return (
    <div
    className='contact'
      style={{
        backgroundColor: '#DADADA',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p style={{ fontFamily: 'Alex Brush', fontSize: '1.8rem', textAlign: 'center', color: 'rgb(93, 64, 55)' }}>
        Join With Us!
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
      <div
        style={{
          marginBottom: '20px',
          padding: '0 5rem',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Radio.Group onChange={onChange} value={friendOf}>
          <Radio value={'bride'}>Bạn Cô Dâu</Radio>
          <Radio value={'groom'}>Bạn Chú Rể</Radio>
        </Radio.Group>
      </div>
      
      <div className='content' style={{width: '100%', marginTop: '1rem'}}>
        <p>Rất vui nhận được lời chúc của bạn!</p>
        <TextArea value={content} onChange={(e) => setContent(e.target.value)} style={{width: '100%'}}/>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
        <button onClick={() => send(true)} className="contact-btn">
          Mình sẽ đến
        </button>
        <button onClick={() => send(false)} className="contact-btn">
          Tiếc quá, mình ăn cỗ online zậy nha!{' '}
        </button>
      </div>
    </div>
  );
};
