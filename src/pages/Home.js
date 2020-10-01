import React, { useState, useEffect } from 'react'
import Topic from '../components/topic/Topic';
import Header from '../components/header/Header';
import { fetchData } from '../api';
import styled from 'styled-components';

//styled-components for Home.js
const Conatiner = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    justify-content: center;
    position: relative;
    top:150px;
`;
//Returns posts sorted by the number of comments in descending order
const sortPostDes = (posts) => {
    const sortedPosts = posts.sort((a, b) => a.data.num_comments < b.data.num_comments ? 1 : -1);
    return sortedPosts;
}

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const redditPosts = await fetchData();
            const sortedPosts = sortPostDes(redditPosts);
            setPosts(sortedPosts);
        })();
    }, []);

    return (
        <>
            <Header />
            <Conatiner>
                {posts.map((posts, rank) =>
                    <Topic key={rank} posts={posts.data} rank={rank} />
                )}
            </Conatiner>

        </>
    )
}

export default Home;