import React, { Component } from 'react';
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";

export default function ContactMenu() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
        setErrors(validateErrors);
        return;
    }

    setIsLoading(true);
  };
}

