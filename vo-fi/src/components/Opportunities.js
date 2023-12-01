import React, { useState } from 'react';
import './Opportunities.css';
import NavBar from './NavBar';

const OpportunityPage = () => {
  const [area, setArea] = useState({
    state: '',
    district: '',
    mandal: '',
    city: '',
    pincode: '',
  });

  const [volunteeringType, setVolunteeringType] = useState('');

  const handleAreaChange = (event) => {
    const { name, value } = event.target;
    setArea({ ...area, [name]: value });
  };

  const handleVolunteeringTypeChange = (event) => {
    setVolunteeringType(event.target.value);
  };

  return (
    <>
    <NavBar/>
    <div>
      <h2>Opportunity Page</h2>
      <div>
        <label htmlFor="volunteeringType">What type of volunteering work do you want to do?</label>
        <select
          id="volunteeringType"
          value={volunteeringType}
          onChange={handleVolunteeringTypeChange}
        >
          <option value="" class>Select an option</option>
          <option value="election">Election Volunteering</option>
          <option value="environment">Environmental Volunteering</option>
          <option value="kidsEducation">Volunteering in Kids Education</option>
          <option value="womenEducation">Volunteering in Women Education</option>
          <option value="sports">Sports Volunteering</option>
          <option value="animal">Animal Volunteering</option>
        </select>
      </div>
      <div>
        <label htmlFor="area">Select the area:</label>
        <select id="state" name="state" value={area.state} onChange={handleAreaChange}>
          {/* Populate options for state */}
          {/* You may use data or fetch options dynamically */}
          <option value="">Select State</option>
          {/* Add state options here */}
        </select>
        <select
          id="district"
          name="district"
          value={area.district}
          onChange={handleAreaChange}
        >
          {/* Populate options for district */}
          {/* You may use data or fetch options dynamically */}
          <option value="">Select District</option>
          {/* Add district options here */}
        </select>
        <select id="mandal" name="mandal" value={area.mandal} onChange={handleAreaChange}>
          {/* Populate options for Mandal */}
          {/* You may use data or fetch options dynamically */}
          <option value="">Select Mandal</option>
          {/* Add Mandal options here */}
        </select>
        <select id="city" name="city" value={area.city} onChange={handleAreaChange}>
          {/* Populate options for City */}
          {/* You may use data or fetch options dynamically */}
          <option value="">Select City</option>
          {/* Add city options here */}
        </select>
        <input
          type="text"
          id="pincode"
          name="pincode"
          placeholder="Pincode"
          value={area.pincode}
          onChange={handleAreaChange}
        />
      </div>
    </div>
    </>
  );
};

export default OpportunityPage;
