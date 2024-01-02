import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';
import { HeartConfetti } from './HeartConfetti';
import { Image } from 'antd';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  // height: '100%',
  background: '#DADADA',
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  // marginTop: '3.5%',
  padding: '3% 0',
  animation: 'fadein 2.5s',

});

const TitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
  fontFamily: 'Alex Brush',
});


const ImageLayout = styled('div', {
  width: '100%',
  background: '#DADADA',
  textAlign: 'center',
});


type TitleProps = {
  config: ConfigsType;
};

const Title = ({ config }: TitleProps) => {

  return (
    <>
      {/* <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
        gravity={0.2}
        colors={['#FFCDD2', '#F8BBD0', '#D1C4E9']}
        recycle={false}
        style={{ position: 'fixed' }}
        // drawShape={}
      /> */}
      <HeartConfetti />
      <Section>
        <Layout>
          <h3>WEDDING INVITATION</h3>
          <TitleLayout>
            {config.groom.name} &amp; {config.bride.name}
          </TitleLayout>
        </Layout>
        <ImageLayout>
          <Image src={config.titleImage} preview={false} />
        </ImageLayout>
      </Section>
    </>
  );
};

export default Title;
