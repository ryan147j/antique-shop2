import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';

const AntiqueDetail = () => {
    const { id } = useParams();
    const [antique, setAntique] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAntique = async () => {
            try {
                const response = await axios.get(`/antiques/${id}`);
                setAntique(response.data);
            } catch (err) {
                setError('Error fetching antique details');
            } finally {
                setLoading(false);
            }
        };

        fetchAntique();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{antique.name}</h1>
            <p>{antique.description}</p>
            <p>Price: ${antique.price}</p>
            <img src={antique.imageUrl} alt={antique.name} />
        </div>
    );
};

export default AntiqueDetail;