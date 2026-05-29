import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    setMessage("Message sent successfully!");

  };

  return (

    <div className="container py-5">

      <h1 className="text-center mb-5">
        Contact Us
      </h1>

      <div className="row justify-content-center">

        <div className="col-md-6">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Message
              </label>

              <textarea
                className="form-control"
                rows="5"
                required
              ></textarea>

            </div>

            <button className="btn btn-dark">
              Send Message
            </button>

          </form>

          {message && (

            <div className="alert alert-success mt-3">

              {message}

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default Contact;