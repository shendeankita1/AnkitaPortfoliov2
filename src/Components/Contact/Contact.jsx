import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern1.svg";
import mail_icon from "../../assets/mail-icon.svg";
import location_icon from "../../assets/location.svg";
import call_icon from "../../assets/contact.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ddb3eea7-0449-4624-9091-3f45dc35f37d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ankita_shende512@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>8788489463</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Mumbai,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor="">Your EMail</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write Your Massage here</label>
          <textarea
            name="massage"
            rows="4"
            placeholder="Enter Your Massage"
          ></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
