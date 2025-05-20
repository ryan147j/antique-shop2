import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AntiquesList = () => {
  const [antiques, setAntiques] = useState([]);
  const [search, setSearch] = useState('');
  const [soldOutIds, setSoldOutIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/antiques')
      .then(response => {
        setAntiques(response.data);
      })
      .catch(error => {
        console.error('Error fetching antiques:', error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this antique?')) {
      axios.delete(`http://localhost:3000/antiques/${id}`)
        .then(() => {
          setAntiques(antiques.filter(antique => antique.id !== id));
        })
        .catch(error => {
          alert('Error deleting antique');
          console.error(error);
        });
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  // Filter antiques based on search input
  const filteredAntiques = antiques.filter(antique =>
    antique.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-yellow-900 mb-8 text-center">Antiques List</h2>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name..."
          className="w-full max-w-md px-4 py-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredAntiques.map(antique => (
          <div
            key={antique.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200"
          >
            <img
              src={antique.imageUrl}
              alt={antique.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">{antique.name}</h3>
              <p className="text-yellow-800 mb-4 flex-1">{antique.description}</p>
              <p className="text-yellow-700 font-bold text-lg mt-auto">
                ${antique.price}
              </p>
              <div className="flex gap-2 mt-4">
                {!soldOutIds.includes(antique.id) && (
                  <>
                    <button
                      onClick={() => handleDelete(antique.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded font-semibold transition-colors duration-200"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdate(antique.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded font-semibold transition-colors duration-200"
                    >
                      Update
                    </button>
                  </>
                )}
                {soldOutIds.includes(antique.id) ? (
                  <span className="bg-gray-300 text-gray-700 px-4 py-1 rounded font-semibold">Sold Out</span>
                ) : (
                  <button
                    onClick={() => {
                      alert('Item bought');
                      setSoldOutIds([...soldOutIds, antique.id]);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded font-semibold transition-colors duration-200"
                  >
                    Buy
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AntiquesList;