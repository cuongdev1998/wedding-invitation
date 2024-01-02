import { styled } from '@stitches/react';
import { Carousel, Image } from 'antd';

import { ConfigsType } from '../configs';
import dateImage from '../resources/date.jpg'

const isPortrait = window.matchMedia('(orientation: portrait)').matches;


const Title = styled('p', {
  color: '#5D4037',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
  fontFamily: 'Alex Brush'
});

type GalleryProps = {
  config: ConfigsType;
};

const Gallery = ({ config }: GalleryProps) => {

  return (
    <section
      style={{padding: '1rem'}}
    >
      {/* <Row gutter={[16, 16]}>
        {config.galleryImages.map((image, index) => (
          <Col key={index} span={isPortrait ? 6 : 3}>
            <Image width={isPortrait ? width / 4 - 10 : width / 8 - 10} src={image} />
          </Col>
        ))}
      </Row> */}
      <Title style={{ textAlign: 'center', marginBottom: '2rem'}}>The Gallery</Title>
      <Carousel autoplay>
      {config.galleryImages.map((image, index) => (
          // <Col key={index} span={isPortrait ? 6 : 3}>
            <Image width='100%' src={image} />
          // </Col>
        ))}
      </Carousel>
      <Image width='100%' src={dateImage} />
    </section>
  );
};

export default Gallery;
