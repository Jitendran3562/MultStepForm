import React from "react";

const Step2 = ({ formData, setFormData, errors }) => {
  
  return (
    <div>
      <h2>Step 2</h2>
      <div>
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />
        {errors.mobileNumber && <div className="error">{errors.mobileNumber}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      </div>
    </div>
  );
};

export default Step2;
