import Gallery from './components/Gallery';
import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import Configs from './configs';
import { Layout } from 'antd';
import { WhenWhere } from './components/WhenWhere';
import { PlayButton } from './components/PlayButton';

const { Footer } = Layout;

function App() {
  return (
    <main style={{ height: '100%' }}>
      <PlayButton />

      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <WhenWhere />
      <Gallery config={Configs} />
      {/* <Location config={Configs} /> */}
      <CongratulatoryMoney config={Configs} />
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
    </main>
  );
}

export default App;
