import React from 'react';
import { Image } from 'antd';
import brideHome from '../resources/MP_CC_6.jpg';
import groomHome from '../resources/MP_CC_8.jpg';
import wedding from '../resources/MP_CC_5.jpg';
import { styled } from '@stitches/react';

const Item = styled('div', {
  color: '#795548',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 3rem',
  '& > h3': {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  '& > div': {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  marginTop: '3rem',
});
export const WhenWhere = () => {
  return (
    <div>
      <h2
        style={{
          textTransform: 'uppercase',
          color: '#5D4037',
          width: '100%',
          fontSize: '2em',
          margin: '24px 0',
          fontWeight: '300',
          textAlign: 'center',
        }}
      >
        When & Where
      </h2>
      <Item>
        <h3>Tiệc cưới nhà gái</h3>
        <p>9h00 ngày 07 tháng 01 năm 2024</p>
        <div>
          Tại Tư gia nhà gái: Khu phố Yên Nho, Phường Gia Đông, Thị xã Thuận Thành, Tỉnh Bắc Ninh
        </div>
        <Image src={brideHome} />
      </Item>
      <Item>
        <h3>Tiệc cưới nhà trai</h3>
        <p>9h00 ngày 07 tháng 01 năm 2024</p>
        <div>
          Tư gia nhà trai: Số 33, Ngõ Đo, Thôn Tư Can, Xã Châu Can, Huyện Phú Xuyên, Thành phố Hà
          Nội
        </div>
        <Image src={groomHome} />
      </Item>

      <Item>
        <h3>Lễ thành hôn</h3>
        <p>14h30 ngày 26 tháng 12 năm 2023</p>
        <div>
          Tư gia nhà trai: Số 33, Ngõ Đo, Thôn Tư Can, Xã Châu Can, Huyện Phú Xuyên, Thành phố Hà
          Nội
        </div>
        <Image src={wedding} />
      </Item>
    </div>
  );
};
