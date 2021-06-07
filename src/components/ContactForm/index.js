import React, { useState, useEffect } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthDate: "",
    emailVerify: "",
  });
  
  const [submitButton, setActiveButton] = useState(true)

  const onFieldChange = (name, e) => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const checkbox = document.getElementById("emailVerify").checked
    console.log(checkbox)
    const data = { ...form };
    data[name] = e.target.value;
    if (!pattern.test(data.email) && data.name.length >= 1) {
      setActiveButton(true)
    } else {
      setActiveButton(false)
    }
    setForm(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name: form.name,
      email: form.email,
      birthDate: form.birthDate,
      emailVerify: document.getElementById("emailVerify").checked
    };
  };

  const onClear = (e) => {
    e.preventDefault();
    const resetData = {
      name: "",
      email: "",
      birthDate: "",
      emailVerify: (document.getElementById(
        "emailVerify"
      ).checked = false)
    };
    setForm(resetData);
  };

  return (
    <div className="actions-div">
      <form className="form-format">
        <h1 className="contact-text">Contact Us</h1>
        <input
          onChange={(e) => onFieldChange("name", e)}
          className="info-input"
          placeholder="Name"
          value={form.name}
        ></input>
        <br></br>
        <input
          onChange={(e) => onFieldChange("email", e)}
          className="info-input"
          placeholder="Email"
          value={form.email}
        ></input>
        <br></br>
        <input
          onChange={(e) => onFieldChange("birthDate", e)}
          className="info-input"
          placeholder="Birth Date"
          value={form.birthDate}
        ></input>
        <br></br>
        <input
          onChange={(e) => onFieldChange("emailVerify", e)}
          type="checkbox"
          id="emailVerify"
          name="emailVerify"
        ></input>
        <label for="emailVerify"> I agree to be contacted via email</label>
        <div className="button-container">
          <button
            onClick={(e) => onClear(e)}
            value="clear"
            className="clear-button"
          >
            Clear
          </button>
          <button
          disabled={submitButton}
          id="submit" 
          onClick={(e) => onSubmit(e)} 
          value="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
