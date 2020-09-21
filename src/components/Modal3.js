import React, { useState, useEffect } from "react";

const Modal3 = (props) => {
  const { urls } = props;

  useEffect(() => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      problem: "",
      url: urls,
    });
  }, [urls]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    problem: "",
    url: urls,
  });

  const onChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const { fullName, email, phone, problem } = form;

  console.log(urls);

  console.log(form);
  return (
    <div className='card'>
      <form
        className='form-text'
        name='form'
        method='post'
        action='/thanks/'
        data-netlify='true'
        data-netlify-honeypot='bot-field'>
        <span style={{ float: "right" }}>
          <button onClick={props.toggleModal}> X</button>
        </span>
        <input type='hidden' name='form-name' value='form' />
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          onChange={onChange}
          value={fullName}
        />
        <input
          type='text'
          name='email'
          placeholder='e-mail'
          onChange={onChange}
          value={email}
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone Number'
          onChange={onChange}
          value={phone}
        />
        <input
          type='text'
          name='url'
          style={{ display: "none" }}
          value={urls}
        />
        <label htmlFor='years'>What information do you have?</label>
        <textarea
          type='text'
          name='problem'
          onChange={onChange}
          value={problem}
        />
        <button type='submit'>Leave Us A Message</button>
      </form>
    </div>
  );
};

export default Modal3;
