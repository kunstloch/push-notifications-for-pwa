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
              <h1 class="text-white">Start a new life with this app just now.</h1>
              <button type="button" class="btn btn-dark btn-lg download-button"><span class="fab fa-apple" /> Download</button>
              <button type="button" class="btn btn-light btn-lg download-button"><span class="fab fa-google-play" /> Download</button>
            </div>

            <div class="col-lg-6">
              <img class="title-image" src="/mobileApp.png" alt="iphone-mockup" />
            </div>
          </div>
        </div>

      </section>

      {/* --- Features --- */}

      <section id="features">

        <div class="row">

          <div class="feature-box col-lg-3">
            <span class="fas fa-check-circle fa-4x icon" />
            <h3> Save Money & Time</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>

          <div class="feature-box col-lg-3">
            <span class="fas fa-heart fa-4x icon" />
            <h3>Improve Image</h3>
            <p>unt ut labore et dolore magna aliquyam erat.</p>
          </div>

          <div class="feature-box col-lg-3">
            <span class="fas fa-bullseye fa-4x icon" />
            <h3>Avoid Errors </h3>
            <p>Lorem ipsum dolor sit amet, consetetur.</p>
          </div>

          <div class="feature-box col-lg-3">
            <span class="fas fa-carrot fa-4x icon" />
            <h3>Playful & Simple</h3>
            <p>no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
          </div>

        </div>

      </section>

      {/* --- Testimonials --- */}

      <section id="testimonials">

        <div id="testimonial-carousel" class="carousel slide" data-ride="carousel" data-interval="5000">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2>I got the power! Now it is even better.</h2>
              <img class="testimonial-image" src="/person2.jpg" alt="testimonial photo" />
              <em>Mr. John Smith, Vienna</em>
            </div>
            <div class="carousel-item">
              <h2 class="testimonial-text">I think this is the best solution for me.</h2>
              <img class="testimonial-image" src="/person3.jpg" alt="testimonial photo" />
              <em>Mrs. Jesicca Müller, Saalbach</em>
            </div>
            <div class="carousel-item">
              <h2>How could I handle my stuff before?</h2>
              <img class="testimonial-image" src="/person1.jpg" alt="testimonial photo" />
              <em>Mr. Pedro Gonzales, Hintertupfing</em>
            </div>
          </div>
          <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </section>

      {/* -- Press -- */}

      <section id="press">
        <img class="press-logo" src="/logo1.png" alt="logo Post-Herald" />
        <img class="press-logo" src="/logo2.png" alt="logo Fake-News" />
        <img class="press-logo" src="/logo3.jpg" alt="logo StartUp" />
        <img class="press-logo" src="/logo4.jpg" alt="logo MobileApp" />

      </section>

      {/* -- Pricing -- */}

      <section id="pricing">

        <h2>A Plan for Every User</h2>
        <p>Simple and affordable price plans for your and your company.</p>

        <div class="container">
          <div class="row pricing-container">

            <div class="pricing-column col-lg-4 col-md-6">
              <div class="card h-100">
                <div class="card-header">
                  <h3>1 to 50 employees</h3>
                </div>
                <div class="card-body d-flex flex-column">
                  <h2>Free</h2>
                  <p>5 Free Prays</p>
                  <p>10 Messages Per Day</p>
                  <p>Unlimited App Usage</p>
                  <button type="button" class="btn btn-lg btn-block btn-outline-dark mt-auto">Sign Up</button>
                </div>
              </div>
            </div>

            <div class="pricing-column col-lg-4 col-md-6">
              <div class="card h-100">
                <div class="card-header">
                  <h3>51 to 500 employees</h3>
                </div>
                <div class="card-body d-flex flex-column">
                  <h2>$49 / mo</h2>
                  <p>Unlimited Free Prays</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                  <button type="button" class="btn btn-lg btn-block btn-dark mt-auto">Sign Up</button>
                </div>
              </div>
            </div>

            <div class="pricing-column col-lg-4">
              <div class="card h-100">
                <div class="card-header">
                  <h3>501+ employees</h3>
                </div>
                <div class="card-body d-flex flex-column">
                  <h2>$99 / mo</h2>
                  <p>Pirority Listing</p>
                  <p>Unlimited Free Prays</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                  <button type="button" class="btn btn-lg btn-block btn-dark mt-auto">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* -- Call to Action -- */}

      <section id="cta">

        <h3 class="cta-font">
          Experience the future here and now with one month free trial!</h3>
          <button type="button" class="btn btn-dark btn-lg download-button"><span class="fab fa-apple" /> Download</button>
          <button type="button" class="btn btn-light btn-lg download-button"><span class="fab fa-google-play" /> Download</button>

      </section>


      {/* -- Impressum -- */}


      <section id="impressum">

        <footer>

          <div class="row">

            <div class="col-lg-6 col-md-7 text-left">
              <h5 >Testing Push Notifications for PWA <br /> Next.js, Bootstrap</h5>
              <p>
                Impressum: Alexander Scherer-Sokolowski <br /> <i class="fas fa-phone"></i> - +43 664 7501 8228 <br />
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

      {/* <style jsx>{`
        
      `}</style> */}
    </>
  )
}
