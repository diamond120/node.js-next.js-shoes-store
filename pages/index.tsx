import type { NextPage } from 'next';
import Head from 'next/head';
import {BestSellers,NewArrivals} from '../components/common/products';
import {About,Hero,Sponsors,Feedback,Category} from "../components/landing";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Home - Shoe store</title>
    </Head>
    <Hero/>
    <Sponsors/>
    <About/>
    <BestSellers/>
    <Category/>
    <NewArrivals/>
    <Feedback/>
    </>
  )
}

export default Home
