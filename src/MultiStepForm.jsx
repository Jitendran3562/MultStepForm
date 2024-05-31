
import React, { useState } from "react";
import * as Yup from "yup";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";


const validationSchemas = [
  Yup.object({
    firstName: Yup.string().required("First name is required"),
  }),
  Yup.object({
    lastName: Yup.string().required("Last name is required"),
  }),
    Yup.object({
    email: Yup.string().required("Email is required").email("Invalid email format"),
  }),
    Yup.object({
    phoneNumber: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  }),
    Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[!@#$%^&*(),.?":|<>]/, "Password must contain at least one symbol")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    }),
      Yup.object({
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    }),
      Yup.object({
    age: Yup.number()
      .typeError("Age must be a number")
      .min(18, "You must be at least 18 years old")
      .max(100, "You can't be older than 100 years old"),
    }),
      Yup.object({
    gender: Yup.string().required("Gender is required"),
  }),
    Yup.object({
    interests: Yup.array()
      .min(1, "Select at least one interest")
      .required("Select at least one interest"),
    }),
      Yup.object({
    birthDate: Yup.date().required("Date of Birth is required")
  }),
  
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "", 
    age: "",
    gender: "",
    interests: [],
    birthDate: ""
  });
  const [errors, setErrors] = useState({});

  const validateStep = async () => {
    try {
      await validationSchemas[step].validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const stepErrors = {};
      err.inner.forEach((error) => {
        stepErrors[error.path] = error.message;
      });
      setErrors(stepErrors);
      return false;
    }
  };

  const handleNext = async () => {
    const isValid = await validateStep();
    if (isValid) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    const isValid = await validateStep();
    if (isValid) {
      console.log("Form submitted", formData);
      
    }
  };

  const steps = [
    <Step1 formData={formData} setFormData={setFormData} errors={errors} />,
    <Step2 formData={formData} setFormData={setFormData} errors={errors} />,
    <Step3 formData={formData} setFormData={setFormData} errors={errors} />
  ];

  return (
    <div>
      <form className="form">
        {steps[step]}
        <div>
          {step > 0 && <button type="button" onClick={handleBack}>Back</button>}
          {step < steps.length - 1 ? (
            <button type="button" onClick={handleNext}>Next</button>
          ) : (
            <button type="button" onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
