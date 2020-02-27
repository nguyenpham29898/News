import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false
    };
  }
  isChange = e => {
    const ten = e.target.name;
    const giatri = e.target.value;
    this.setState({
      [ten]: giatri
    });
  };
  isFileChange = e => {
    const tenAnh = e.target.files[0].name;
    this.setState({
      fImage: tenAnh
    });
  };
  submitForm = e => {
    e.preventDefault();
    this.setState({
      isRedirect: true
    });
  };
  getNoidung = () => {
    var noiDung = "";
    noiDung += "Ten nhan dc: " + this.state.fName;
    noiDung += "Email nhan dc: " + this.state.fEmail;
    noiDung += "Phone nhan dc: " + this.state.fPhone;
    noiDung += "Noi dung nhan dc: " + this.state.fMess;
    noiDung += "Ngay nhan dc: " + this.state.fDay;
    noiDung += "File nhan dc: " + this.state.fImage;
    return noiDung;
  };
  render() {
    if (this.state.isRedirect === true) {
      console.log(this.getNoidung());
      return <Redirect to="/" />;
    }
    return (
      <div>
        <header className="masthead tintuc">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto text-center">
                  <h1 className="mb-5">Trang lien he</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* content lien he  */}
        <section className="page-section" id="contact">
          <div className="container">
            {/* Contact Section Heading */}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Contact Me
            </h2>
            {/* Icon Divider */}
            <div className="divider-custom">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon text-center">
                <i className="fas fa-star" />
              </div>
              <div className="divider-custom-line" />
            </div>
            {/* Contact Section Form */}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label>
                      <input
                        onChange={e => {
                          this.isChange(e);
                        }}
                        className="form-control"
                        name="fName"
                        id="name"
                        type="text"
                        placeholder="Name"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Email Address</label>
                      <input
                        onChange={e => {
                          this.isChange(e);
                        }}
                        name="fEmail"
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Phone Number</label>
                      <input
                        onChange={e => {
                          this.isChange(e);
                        }}
                        name="fPhone"
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message</label>
                      <textarea
                        onChange={e => {
                          this.isChange(e);
                        }}
                        name="fMess"
                        className="form-control"
                        id="message"
                        rows={5}
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter a message."
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Chon ngay</label>
                      <select
                        className="form-control"
                        name="fDay"
                        onChange={e => this.isChange(e)}
                      >
                        <option value="thu3">Ngay thu 3</option>
                        <option value="thu5">Ngay thu 5</option>
                        <option value="thu7">Ngay thu 7</option>
                        <option value="chunhat">Ngay chu nhat</option>
                      </select>
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Chon ngay</label>
                      <input
                        onChange={e => {
                          this.isFileChange(e);
                        }}
                        type="file"
                        className="form-control-file"
                        name="fImage"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-xl"
                      id="sendMessageButton"
                      onClick={e => this.submitForm(e)}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
