import React from "react";
const Step3 = ({ formData, setFormData, errors }) => {

  return (
    <div>
      <h2>Step 3</h2>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />
        {errors.age && <div className="error">{errors.age}</div>}
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div className="error">{errors.gender}</div>}
      </div>
      <div>
        <label>Interests</label>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={formData.interests.includes("coding")}
            onChange={(e)=>setFormData({...formData, name:e.target.value})}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={formData.interests.includes("sports")}
            onChange={(e)=>setFormData({...formData, name:e.target.value})}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="reading"
            checked={formData.interests.includes("reading")}
            onChange={(e)=>setFormData({...formData, name:e.target.value})}
          />
          Reading
        </label>
        {errors.interests && <div className="error">{errors.interests}</div>}
      </div>
      <div>
        <label htmlFor="birthDate">Date of Birth</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={formData.birthDate}
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />
        {errors.birthDate && <div className="error">{errors.birthDate}</div>}
      </div>
    </div>
  );
};

export default Step3;
