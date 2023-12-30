import Gallery from './components/Gallery';
import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import Location from './components//Location';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import Configs from './configs';
import Share from './components/Share';
import { Layout } from 'antd';
import { Music } from './components/Music';
import { WhenWhere } from './components/WhenWhere';
import { PlayButton } from './components/PlayButton';

const { Footer } = Layout;

function App() {
  return (
    <main style={{ height: '100%' }}>
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <WhenWhere />
      <Gallery config={Configs} />
      {/* <Location config={Configs} /> */}
      <CongratulatoryMoney config={Configs} />
      <Music />
      {/* <Share config={Configs} /> */}
      <Footer
        style={{
          background: '#D7CCC8',
          opacity: 0.6,
          textAlign: 'center',
          fontFamily: 'Alex Brush',
          fontSize: '1.5rem'
        }}
      >
        Cao Cường & Minh Phương
      </Footer>
      <PlayButton />
    </main>
  );
}

export default App;
