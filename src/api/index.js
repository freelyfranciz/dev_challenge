import fetch from 'cross-fetch';

const url = 'https://www.reddit.com/r/ProgrammerHumor/top.json?limit=20';

export const fetchData = async () => {
    return fetch(url)
        .then(response => response.json())
        .then(response => {
           return (response?.data?.children?.length) ?
                response.data.children : [];
        }, (error) => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .catch(error => error.message);

}