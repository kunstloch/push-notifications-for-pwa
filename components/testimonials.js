import React from "react";

export default function Testimonials () {
  return (

    <section id="testimonials">

        <div id="testimonial-carousel" class="carousel slide" data-ride="carousel" data-interval="5000">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2 class="testimonal-heading">I got the power! Now it is even better.</h2>
              <img class="testimonial-image" src="/person2.jpg" alt="testimonial photo" />
              <em>Mr. John Smith, Vienna</em>
            </div>
            <div class="carousel-item">
              <h2 class="testimonal-heading">I think this is the best solution for me.</h2>
              <img class="testimonial-image" src="/person3.jpg" alt="testimonial photo" />
              <em>Mrs. Jesicca Müller, Saalbach</em>
            </div>
            <div class="carousel-item">
              <h2 class="testimonal-heading">How could I handle my stuff before?</h2>
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

  );
}