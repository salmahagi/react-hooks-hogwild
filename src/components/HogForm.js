import React, { useState, useContext } from 'react';
import { HogContext } from '../context/HogContext';

function HogForm() {
  const { addNewHog } = useContext(HogContext);
  const [newHog, setNewHog] = useState({ name: "", specialty: "", weight: "", greased: false, "highest medal achieved": "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog({
      ...newHog,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newHog.name || !newHog.specialty || !newHog.weight) {
      alert("Please fill out all required fields");
      return;
    }
    addNewHog(newHog);
    setNewHog({ name: "", specialty: "", weight: "", greased: false, "highest medal achieved": "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={newHog.name} onChange={handleChange} required />
      <input name="specialty" placeholder="Specialty" value={newHog.specialty} onChange={handleChange} required />
      <input name="weight" placeholder="Weight" value={newHog.weight} onChange={handleChange} type="number" required />
      <label>
        <input name="greased" type="checkbox" checked={newHog.greased} onChange={handleChange} />
        Greased
      </label>
      <input name="highest medal achieved" placeholder="Highest Medal" value={newHog["highest medal achieved"]} onChange={handleChange} />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
