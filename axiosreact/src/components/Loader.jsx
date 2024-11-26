import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Loader = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // Using useEffect to fetch data
    useEffect(() => {
        axios
            .get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df4542e0c22f419199aa9502a56cf3f5")
            .then((response) => {
                setMyData(response.data.articles); 
            })
            .catch((error) => setIsError(error.message));
    }, []);

    return (
        <div>
            <h2>Fetching News Using Axios</h2>
            {isError !== "" && <h2>Error: {isError}</h2>}

            <div className="grid">
                {myData.map((post, index) => {
                    const { source, author, title, description, url, urlToImage, publishedAt, content } = post;
                    return (
                        <div className="card" key={url}> 
                            <h2>Source: {source.name}</h2>
                            <p>Author: {author || "Unknown"}</p>
                            <h3>Title: {title}</h3>
                            <p>Description: {description}</p>
                            {urlToImage && <img src={urlToImage} alt={title} style={{ width: '100px' }} />}
                            <p>Published At: {new Date(publishedAt).toLocaleString()}</p>
                            <p>Content: {content || "No content available"}</p>
                            <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Loader;
