import React, { Component } from 'react';

import '../../styles/contact.css';

class Contact extends Component {
  render() {
    return (
      <section className="contact py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-4">
                <div className="card-body">
                  <h4>Kontaktirajte nas</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, reiciendis.
                  </p>
                  <h4>Address</h4>
                  <p>Takovska, Beograd</p>
                  <h4>Email</h4>
                  <p>serval@t-com.me</p> <h4>Phone</h4>
                  <p>+381 11 555 55 555</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card p-4">
                <div className="card-body">
                  <h3 className="text-center">Popunite formu</h3>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-outline-info btn-block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
