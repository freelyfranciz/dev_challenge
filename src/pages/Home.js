import React, { useState, useEffect } from 'react'
import Topic from '../components/Topic';
import { fetchData } from '../api';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        const fetchedData = await fetchData();
        if (fetchedData) {
            setData(fetchedData.data.children);
        }
    }, []);

    return (
        <ul>
            {data.sort((a, b) => a.data.num_comments < b.data.num_comments ? 1 : -1).map((data, i) =>
                <li key={i}>< Topic data={data.data} /></li>
            )}
        </ul>
    )
}
