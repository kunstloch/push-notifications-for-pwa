import Head from 'next/head';
import Nav from '../components/nav';


export default function Home () {
  return (
    <>





      {/* --- Title --- */}


      <section id="title">

        <div class="container-fluid">

          <Nav>
            {/* <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" /> */}
          </Nav>

          <div class="row">
            <div class="col-lg-6">
              <h1 class="text-white">Start this wonderful app just now.</h1>
              <button  type="button" class="btn btn-dark btn-lg download-button"><span class="fab fa-apple" /> Download</button>
              <button type="button"  class="btn btn-light btn-lg download-button"><span class="fab fa-google-play" /> Download</button>
            </div>

            <div class="col-lg-6">
              <img class="title-image" src="/mobileApp.png" alt="iphone-mockup" />
            </div>
          </div>
        </div>

      </section>

      {/* --- Features --- */}

      <section id="features">

        <h3>Save Money and Time</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

        <h3>Improve Image</h3>
        <p>unt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

        <h3>Avoid Errors </h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>

        <h3>Playful and Simple</h3>
        <p>no sea takimata sanctus est Lorem ipsum dolor sit amet</p>

      </section>

      {/* --- Testimonials --- */}

      <section id="testimonials">

        <h2>I got the power! Not it is even better.</h2>
        <img src="/person2.jpg" alt="testimonial photo" height="142" width="142" />
        <em>Mr. John Smith, Vienna</em>

        <h2 class="testimonial-text">I think this is the best solution for me</h2>
        <img class="testimonial-image" src="/person3.jpg" alt="testimonial photo" height="142" width="142" />
        <em>Mrs. Jesicca Müller, Saalbach</em>

      </section>

      {/* -- Press -- */}

      <section id="press">
        <img src="/logo1.png" alt="logo Post-Herald" />
        <img src="/logo2.png" alt="logo Fake-News" />
        <img src="/logo3.jpg" alt="logo StartUp" />
        <img src="/logo4.jpg" alt="logo MobileApp" />

      </section>

      {/* -- Pricing -- */}

      <section id="pricing">

        <h2>A Plan for Every User</h2>
        <p>Simple and affordable price plans for your and your company.</p>


        <h3>1 to 50 employees</h3>
        <h2>Free</h2>
        <p>5 Matches Per Day</p>
        <p>10 Messages Per Day</p>
        <p>Unlimited App Usage</p>
        <button type="button">Sign Up</button>


        <h3>51 to 500 employees</h3>
        <h2>$49 / mo</h2>
        <p>Unlimited Matches</p>
        <p>Unlimited Messages</p>
        <p>Unlimited App Usage</p>
        <button type="button">Sign Up</button>


        <h3>501+ employees</h3>
        <h2>$99 / mo</h2>
        <p>Pirority Listing</p>
        <p>Unlimited Matches</p>
        <p>Unlimited Messages</p>
        <p>Unlimited App Usage</p>
        <button type="button">Sign Up</button>

      </section>


      {/* -- Pricing -- */}

      <section id="cta">

        <h3>
          Experience the future here and now</h3>
        <button type="button">Download</button>
        <button type="button">Download</button>

      </section>


      {/* -- Footer -- */}

      <footer id="footer" class="bg-warning">
        <p class="navbar-brand">
          Testing Push Notifications for PWA - Next.js, Bootstrap
        </p>
        <p>
          Impressum: Alexander Scherer-Sokolowski | Tel: +43 664 7501 8228 <br />
        Schulstrasse 1 - 7304 Grosswarasdorf - Österreich
        </p>
        <p>
          <a
            href="https://alexscherer.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.alexscherer.dev
          </a>
        </p>
      </footer>

      {/* <style jsx>{`
        
      `}</style> */}
    </>
  )
}
