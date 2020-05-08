import React from 'react';
import Title from '../components/title';
import Features from '../components/features';
import Testimonals from '../components/testimonials';
import Press from '../components/press';
import Pricing from '../components/pricing';
import Cta from '../components/cta';
import Impressum from '../components/impressum';



export default function Home () {
  async function showNotification() {
    const result = await Notification.requestPermission();
    if (result === 'granted') {
      const noti = new Notification('Hello!', {
        body: 'Vielen Dank für Ihren Besuch!',
        icon: 'as_face.png'
      });
      noti.onclick = () => alert('clicked');
    }
  }
  showNotification();

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
