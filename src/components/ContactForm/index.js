import React, { useState, useEffect } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthDate: "",
    emailVerify: "",
  });

  const onFieldChange = (name, e) => {
    const data = { ...form };
    console.log();
    data[name] = e.target.value;
    setForm(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let checkbox = document.getElementById("emailVerify").checked;
    const contactData = {
      name: form.name,
      email: form.email,
      birthDate: form.birthDate,
      emailVerify: checkbox,
    };
  };

  const onClear = (e) => {
    e.preventDefault();
    let checkboxClear = (document.getElementById(
      "emailVerify"
    ).checked = false);
    const resetData = {
      name: "",
      email: "",
      birthDate: "",
      emailVerify: checkboxClear,
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
          <button onClick={(e) => onSubmit(e)} value="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
