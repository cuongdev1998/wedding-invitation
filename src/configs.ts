import GalleryPhoto1 from './resources/MP_CC_1.jpg';
import GalleryPhoto2 from './resources/MP_CC_2.jpg';
import GalleryPhoto3 from './resources/MP_CC_3.jpg';
import GalleryPhoto4 from './resources/MP_CC_4.jpg';
import GalleryPhoto5 from './resources/MP_CC_5.jpg';
import GalleryPhoto6 from './resources/MP_CC_6.jpg';
import GalleryPhoto7 from './resources/MP_CC_7.jpg';
import GalleryPhoto8 from './resources/MP_CC_8.jpg';
import GalleryPhoto9 from './resources/MP_CC_9.jpg';
import QR_groom from './resources/qr_groom.png';
import QR_bride from './resources/qr_bride.jpg';
import QR_code from './resources/qr-code.png';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  weddingDate: '07/01/2023',
  groom: {
    name: 'Cao Cường',
    accountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: 'Minh Phương',
    accountNumber: '○○은행 ***-***-******',
  },
  titleImage: "https://i.pinimg.com/originals/f3/6e/b5/f36eb572eedd8594e58289bfadfaba7c.jpg",
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
    GalleryPhoto7,
    GalleryPhoto8,
    GalleryPhoto9,
  ],
  qrCodeGroomImage: QR_groom,
  qrCodeBrideImage: QR_bride,
  qrImage: QR_code

};

export type ConfigsType = {
  url: string;
  weddingDate: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  galleryImages: string[];
  qrCodeGroomImage: string;
  qrCodeBrideImage: string;
  qrImage: string;
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
