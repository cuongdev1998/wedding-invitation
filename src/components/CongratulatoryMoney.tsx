import { styled } from '@stitches/react';
import { Modal } from 'antd';
import { useState } from 'react';
import { ConfigsType } from '../configs';


const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});


const Image = styled('img', {
  width: '40%',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);

  return (
    <Section>
      <div
        style={{
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          position: 'fixed',
          top: '58%',
          right: '1rem',
          width: '50px',
          height: '50px',
          zIndex: 9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => setGroomVisible(true)}
      >
        <img src={config.qrImage} alt="" style={{ width: '25px' }} />
      </div>

      <Modal
        title=''
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
      <p style={{textAlign: 'center', fontSize: '1.2rem', fontFamily: 'Alex Brush'}}>Thật tiếc nếu bạn không đến chung vui được với bọn mình</p>

        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'space-around',alignItems: 'flex-start'}}>
          <div style={{textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Alex Brush'}}>
            <p>Chúc mừng Cô dâu</p>
            <Image style={{width: '150px'}} src={config.qrCodeBrideImage} alt="Wedding Invitation Title Picutre" />
          </div>
          <div style={{textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Alex Brush'}}>
            <p>Chúc mừng Chú rể</p>
            <Image style={{width: '150px'}} src={config.qrCodeGroomImage} alt="Wedding Invitation Title Picutre" />

          </div>
          
        </div>
        
        
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;
