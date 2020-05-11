import React from 'react';
import Header from './header';
import Nav from './nav';
import Link from 'next/link';


export default function Title () {
  return (
    <section id="title">

      <div class="container-fluid">


        <Header />
        <Nav />
        < div class="row" >
          <div class="col-lg-6">
            <h1 class="text-white big-heading">Start a new life with this app just now.</h1>
            <Link href="/android">
              <button type="button" class="btn btn-dark btn-lg download-button"><span class="fab fa-apple" /> Download</button>
            </Link>
            <button type="button" class="btn btn-light btn-lg download-button"><span class="fab fa-google-play" /> Download</button>
          </div>

          <div class="col-lg-6">
            <img class="title-image" src="/mobileApp.png" alt="iphone-mockup" />
          </div>
        </div >
      </div>
    </section>
  );
}