import React from "react";

export default function Impressum () {
  return (

    <section id="impressum">

      <footer>

        <div class="row">

          <div class="col-lg-6 col-md-7 text-left">
            <h5 class="impressum-heading">Testing Push Notifications for PWA <br /> Next.js, Bootstrap</h5>
            <p>
              Impressum: Alexander Scherer-Sokolowski <br /> <i class="fas fa-phone"></i> +43 664 7501 8228 <br />
              <i class="fas fa-map-marker-alt" /> Schulstrasse 1 -  7304 Grosswarasdorf - Österreich</p>
            <a href="https://alexscherer.dev/" target="_blank"
              rel="noopener noreferrer">www.alexscherer.dev</a>

          </div>

          <div class="col-lg-3 col-md-1">
          </div>

          <div class="col-lg-3 col-md-4 text-sm-center" >
            <img class="impressum-image text-sm-center" src="/AlexScherer.jpg" alt="Picture Alexander Scherer" />
          </div>

        </div>

      </footer>

    </section>


  );
}