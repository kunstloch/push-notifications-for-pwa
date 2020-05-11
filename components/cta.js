import React from "react";
import Link from 'next/link';

export default function Cta () {
  return (

    <section id="cta">

      <h3 class="big-heading">
        Experience the future here and now with a free trial!</h3>
      <Link href="/android/">
        <button type="button" class="btn btn-dark btn-lg download-button"><span class="fab fa-apple" /> Download</button>
      </Link>
      <button type="button" class="btn btn-light btn-lg download-button"><span class="fab fa-google-play" /> Download</button>

    </section>


  );
}