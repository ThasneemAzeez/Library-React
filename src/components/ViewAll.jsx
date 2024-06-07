import React from 'react'
import Navigation from './Navigation'

const ViewAll = () => {
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">Book title</th>
      <th scope="col">Author</th>
      <th scope="col">Year</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">To Kill a Mockingbird</th>
      <td>Harper Lee</td>
      <td>4-06-2001</td>
      <td>100</td>
    </tr>
    <tr>
      <th scope="row">Pride and Prejudice</th>
      <td>Jacob</td>
      <td>01-02-1996</td>
      <td>250</td>
    </tr>
    <tr>
    <th scope="row">The lord of things</th>
      <td>J.R.R Tolkein</td>
      <td>12-08-2001</td>
      <td>250</td>
    </tr>
    <tr>
      <th scope="row">Frankenstein</th>
      <td>Mary Shelley</td>
      <td>02-11-1989</td>
      <td>100</td>
    </tr>
    <tr>
      <th scope="row">one hundres years of solitude</th>
      <td>Gabriel Garcia</td>
      <td>12-7-2013</td>
      <td>250</td>
    </tr>
    <tr>
    <th scope="row">The catcher in the eye</th>
      <td>J.R.R Tolkein</td>
      <td>	7-08-1995</td>
      <td>250</td>
    </tr>
    <tr>
      <th scope="row">Pride and Prejudice</th>
      <td>Jacob</td>
      <td>15-8-9</td>
      <td>250</td>
    </tr>
    <tr>
    <th scope="row">The lord of things</th>
      <td>J.R.R Tolkein</td>
      <td>	20-05-198</td>
      <td>250</td>
    </tr>
  </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll