import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'

const Home: NextPage = () => {
  return (
    <div className='antialiased bg-white'>
      <Navigation/>
    </div>
  )
}

export default Home
