import React from 'react';
import Title from '../components/title';
import Features from '../components/features';
import Testimonals from '../components/testimonials';
import Press from '../components/press';
import Pricing from '../components/pricing';
import Cta from '../components/cta';
import Impressum from '../components/impressum';



export default function Home () {
  return (
    <>
      <Title />
      <Features />
      <Testimonals />
      <Press />
      <Pricing />
      <Cta />
      <Impressum />
    </>
  )
}
