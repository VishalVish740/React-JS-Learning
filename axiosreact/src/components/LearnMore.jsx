import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const LearnMore = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => setError(error));
        setLoading(false);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message} </div>;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default LearnMore;
