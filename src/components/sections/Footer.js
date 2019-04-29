import React from "react"

const Footer = () => {
  return (
    <footer id="main-footer" className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p className="lead">
              Copyright &copy; {new Date().getFullYear()} Mizuxe
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
