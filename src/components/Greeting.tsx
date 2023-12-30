import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';
import Groom from '../resources/groom.png';
import Bride from '../resources/bride.png';
import { Image } from 'antd';


const Layout = styled('div', {
  width: '100%',
  padding: '5%',
  height: 'fit-content',
});

const Card = styled('div', {
  color: '#795548',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > div': {
    textAlign: 'center'
  },
  marginTop: '3rem'
});
type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {

  return (
    <div
      
    >
      <Layout>
        {/* <Title>Trân trọng kính mời bạn đến dự lễ thành hôn của hai chúng tôi</Title> */}
        {/* <SubTitle> */}
          <div
            style={{
              textAlign: 'center',
              fontFamily: 'Alex Brush',
              fontSize: '1.3rem',
              color: 'rgb(93, 64, 55);',
            }}
          >
            <h2>
              {config.groom.name}{' '}
              <span
                style={{
                  color: '#800000',
                }}
                className="love"
              >
                &#10084;
              </span>{' '}
              {config.bride.name}{' '}
            </h2>
          </div>
          <Card className="groom-house card">
            <Image className='avatar' src={Groom} />
            <p style={{ fontFamily: 'Alex Brush', fontSize: '1.5rem' }}>Chú rể</p>
            
          </Card>
          <Card className="bride-house card">
            <Image className='avatar' src={Bride} />
            <p style={{ fontFamily: 'Alex Brush', fontSize: '1.5rem' }}>Cô dâu</p>
            
          </Card>
        {/* </SubTitle> */}
      </Layout>
    </div>
  );
};

export default Greeting;
