import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

    const {id} = useParams();
    const categoryNews = useLoaderData();

    return (
        <div>
            <h2>This Category News: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsCard
                key={news_id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;