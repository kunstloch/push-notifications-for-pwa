import React from "react";

export default function Pricing () {
  return (

    <section id="pricing">

      <h2 class="section-heading">A Plan for Every User</h2>
      <p>Simple and affordable price plans for your and your company.</p>

      <div class="container">
        <div class="row pricing-container">

          <div class="pricing-column col-lg-4 col-md-6">
            <div class="card h-100">
              <div class="card-header">
                <h3>1 to 50<br />employees</h3>
              </div>
              <div class="card-body d-flex flex-column">
                <h2 class="prising-heading">Free</h2>
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
                <h3>51 to 500<br />employees</h3>
              </div>
              <div class="card-body d-flex flex-column">
                <h2 class="prising-heading">$49 / mo</h2>
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
                <h3>501+<br />employees</h3>
              </div>
              <div class="card-body d-flex flex-column">
                <h2 class="prising-heading">$99 / mo</h2>
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

  );
}