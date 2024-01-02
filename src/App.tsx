import Gallery from './components/Gallery';
import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import Configs from './configs';
import { Layout } from 'antd';
import { WhenWhere } from './components/WhenWhere';
import { PlayButton } from './components/PlayButton';
import { Contact } from './components/Contact';
import { Wish } from './components/Wish';
// Import the functions you need from the SDKs you ne
const { Footer } = Layout;


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




function App() {
  // Initialize Firebase
// const analytics = getAnalytics(app);
  return (
    <main style={{ height: '100%' }}>
      <PlayButton />

      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <WhenWhere />
      <Gallery config={Configs} />
      {/* <Location config={Configs} /> */}
      <CongratulatoryMoney config={Configs} />
      <Contact />
      <Wish />
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
