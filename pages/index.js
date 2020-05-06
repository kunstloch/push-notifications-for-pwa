import Head from 'next/head';
import Nav from '../components/nav';


export default function Home() {
  return (
    <>
      <Nav>
        {/* <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" /> */}
      </Nav>




{/* --- Title --- */}

<section id="title">
  <div>
      
    <h1 className="title display-1 text-center"  >Das Funkt! </h1>
        
    <button type="button">Download</button>
    <button type="button">Download</button>
  </div>

  <div>
      <img src="/mobileApp.png" alt="iphone-mockup" />
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
    <img src="/person2.jpg" alt="testimonial photo" height="142" width="142"/>
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

      <footer id="footer" class=" bg-warning">
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
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </>
  )
}
