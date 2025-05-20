import React, { useState } from 'react';
import axios from 'axios';

const AddAntique = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3000/antiques', form)
      .then(res => {
        onAdd && onAdd();
        alert('Antique added!');
        setForm({ name: '', description: '', price: '', imageUrl: '' });
      })
      .catch(err => alert('Error adding antique'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-8 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-yellow-900 mb-4 text-center">Add New Antique</h2>
      <div>
        <label className="block text-yellow-800 font-semibold mb-1">Name</label>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-yellow-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div>
        <label className="block text-yellow-800 font-semibold mb-1">Description</label>
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-yellow-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div>
        <label className="block text-yellow-800 font-semibold mb-1">Price</label>
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-yellow-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div>
        <label className="block text-yellow-800 font-semibold mb-1">Image URL</label>
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-yellow-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
      >
        Add Antique
      </button>
    </form>
  );
};

export default AddAntique;