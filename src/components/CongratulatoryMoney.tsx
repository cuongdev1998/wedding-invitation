import { styled } from '@stitches/react';
import { Divider, Modal } from 'antd';
import { useState } from 'react';
import { ConfigsType } from '../configs';
import lixi from '../resources/hongbao.png';


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
      {/* <Layout>
        <Title>축하의 마음을 전하세요</Title>
        <SubTitle>축하의 마음을 담아 축의금을 전달해 보세요.</SubTitle>
      </Layout> */}
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
        <div style={{textAlign: 'center'}}>
          <Image src={config.qrCodeGroomImage} alt="Wedding Invitation Title Picutre" />
          <Image src={config.qrCodeBrideImage} alt="Wedding Invitation Title Picutre" />
          <b>{config.groom.fatherName}</b>
          <Divider type="vertical" />
          
        </div>
        <div style={{textAlign: 'center'}} className='lucky-money'>
          <Image src={lixi} alt="Wedding Invitation Title Picutre" />

        </div>
        
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;
