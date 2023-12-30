import { styled } from '@stitches/react';
import { Divider, Modal } from 'antd';
import { useState } from 'react';
import { ConfigsType } from '../configs';
import HongBao from './HongBao';


const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});



const GridLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '50% 50%',
});


const Image = styled('img', {
  width: '40%',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Section>
      {/* <Layout>
        <Title>축하의 마음을 전하세요</Title>
        <SubTitle>축하의 마음을 담아 축의금을 전달해 보세요.</SubTitle>
      </Layout> */}
      <GridLayout>
        <HongBao title="Cao Cường" subTitle="계좌번호 확인" onClick={() => setGroomVisible(true)} />
        <HongBao title="Minh Phương" subTitle="계좌번호 확인" onClick={() => setBrideVisible(true)} />
      </GridLayout>
      <Modal
        title={<b>Cao Cường</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div>
          <Image src={config.qrCodeGroomImage} alt="Wedding Invitation Title Picutre" />
          <b>{config.groom.fatherName}</b>
          <Divider type="vertical" />
          
        </div>
        
      </Modal>
      <Modal
        title={<b>Minh Phương</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div style={{textAlign: 'center'}}>
        <Image src={config.qrCodeBrideImage} alt="Wedding Invitation Title Picutre" />
          <b>{config.bride.fatherName}</b>
          
        </div>
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;
