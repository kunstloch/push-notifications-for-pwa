import React from 'react';

const Nav = () => (
  <>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="">fakeApp</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navigation-list" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item "> <a class="nav-link" href="#impressum">Contact</a></li>
          <li class="nav-item "> <a class="nav-link" href="#pricing">Pricing</a></li>
          <li class="nav-item "> <a class="nav-link" href="#cta">Download</a></li>
        </ul>
      </div>
    </nav>
  </>
)

export default Nav