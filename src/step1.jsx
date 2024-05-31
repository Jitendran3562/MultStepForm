import React from "react";

const Step1 = ({ formData, setFormData, errors }) => {

  return (
    <div>
      <h2>Step 1</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
    </div>
  );
};

export default Step1;
