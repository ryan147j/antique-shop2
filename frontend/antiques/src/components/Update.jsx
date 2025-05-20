import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/antiques/${id}`)
      .then(res => setForm(res.data))
      .catch(() => alert('Error fetching antique'));
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:3000/antiques/${id}`, form)
      .then(() => {
        alert('Antique updated!');
        navigate('/antiques');
      })
      .catch(() => alert('Error updating antique'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-8 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-yellow-900 mb-4 text-center">Update Antique</h2>
      <div>
        <label className="block text-yellow-800 font-semibold mb-1">Name</label>
        <input
          name="name"
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
        Update Antique
      </button>
    </form>
  );
};

export default Update;