import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Section } from './components/Section';
import { Review } from './components/Review';
import { FAQ } from './components/FAQ';

import './styles/global.scss';
import { Footer } from './components/Footer';



export function App() {

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Section />
      <Review />
      <FAQ />
      <Footer />
    </>
  )
}
