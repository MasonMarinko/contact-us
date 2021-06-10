import React, { useState } from "react";
import ContactService from "../../Services/contactService";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthDate: "",
    emailVerify: "",
  });

  const [submitButton, setActiveButton] = useState(true);

  const onFieldChange = (name, e) => {
    const emailVerify = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    const dateVerify = new RegExp(
      [
        "^(?:(?:(?:0?[13578]|1[02])(\\/|-|\\.)31)",
        "\\1|(?:(?:0?[1,3-9]|1[0-2])(\\/|-|\\.)(?:29|30)",
        "\\2))(?:(?:1[6-9]|[2-9]\\d)?d{2})$|^(?:0?2(\\/|-|\\.)",
        "29\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|",
        "[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))",
        "$|^(?:(?:0?[1-9])|(?:1[0-2]))(\\/|-|\\.)",
        "(?:0?[1-9]|1\\d|2[0-8])\\4",
        "(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
      ].join(""),
      "g"
    );
    const checkbox = document.getElementById("emailVerify").checked;
    const data = { ...form };
    data[name] = e.target.value;
    if (
      emailVerify.test(data.email) &&
      data.name.length >= 1 &&
      checkbox === true &&
      dateVerify.test(data.birthDate.trim())
    ) {
      setActiveButton(false);
    } else if (
      emailVerify.test(data.email) &&
      data.name.length >= 1 &&
      checkbox === true &&
      data.birthDate.toString() === ""
    ) {
      setActiveButton(false);
    } else {
      setActiveButton(true);
    }
    setForm(data);
  };

  async function onSubmit(e) {
    debugger
    const contactData = {
      name: form.name,
      email: form.email,
      birthDate: form.birthDate,
      emailVerify: document.getElementById("emailVerify").checked,
    };
    await ContactService.create(contactData)
      .then((postResponse) => {
        e.preventDefault()
        alert("Thank you for submitting your information. We will contact you within 24-48 hours via email");
        console.log(postResponse);
        onClear()
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const onClear = (e) => {
    e.preventDefault();
    const resetData = {
      name: "",
      email: "",
      birthDate: "",
      emailVerify: (document.getElementById("emailVerify").checked = false),
    };
    setForm(resetData);
  };

  return (
    <div className="actions-div">
      <form id="contactForm" className="form-format">
        <h1 className="contact-text">Contact Us</h1>
        <span className="input-titles">Name:</span>
        <input
          onChange={(e) => onFieldChange("name", e)}
          className="info-input"
          id="name"
          value={form.name}
        ></input>
        <br></br>
        <span className="input-titles">Email:</span>
        <input
          onChange={(e) => onFieldChange("email", e)}
          className="info-input"
          id="email"
          value={form.email}
        ></input>
        <br></br>
        <span className="input-titles">Birth Date (Optional):</span>
        <input
          onChange={(e) => onFieldChange("birthDate", e)}
          className="info-input"
          placeholder="Example: 01/01/2001"
          id="birthDate"
          value={form.birthDate}
        ></input>
        <br></br>
        <input
          onChange={(e) => onFieldChange("emailVerify", e)}
          type="checkbox"
          id="emailVerify"
          name="emailVerify"
        ></input>
        <label className="email-verify">
          {" "}
          I agree to be contacted via email
        </label>
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
            value="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
