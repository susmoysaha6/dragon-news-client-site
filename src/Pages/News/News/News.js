import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2>This is news</h2>
        </div>
    );
};

export default News;