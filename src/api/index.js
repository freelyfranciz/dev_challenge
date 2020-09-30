import fetch from 'cross-fetch';

const url = 'https://www.reddit.com/r/ProgrammerHumor/top.json?limit=20';

export const fetchData = async () => {
    return fetch(url)
    .then(response => {
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },  (error) => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .catch(error => error.message);

}