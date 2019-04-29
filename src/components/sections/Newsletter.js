import React from "react"

const Newsletter = () => {
  return (
    <section id="newsletter" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control form-control-lg mb-resp"
              placeholder="Enter Name"
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control form-control-lg mb-resp"
              placeholder="Enter Email"
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary btn-block btn-lg ">
              <i className="fas fa-envelope-open" />
              <span className="ml-2">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
