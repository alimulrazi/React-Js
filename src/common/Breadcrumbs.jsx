import React, { Component } from 'react'

export class Breadcrumbs extends Component {
  render() {
    return (
      <div>
    {/* ======= Breadcrumbs ======= */}
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Contact</li>
          </ol>
        </div>

      </div>
    </section>{/* End Breadcrumbs */} 

      </div>
    )
  }
}

export default Breadcrumbs