import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonial'
import Logo from '../components/Logo'
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
      <>
          <main className='antialiased'>
              <Hero/>
              <Testimonial/>
              <Logo/>
              <CTA/>
          </main>
          <Footer/>
      </>
  )
}

export default Home
