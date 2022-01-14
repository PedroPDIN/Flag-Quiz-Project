const url = 'https://restcountries.com/v2/all';

const fetchApi = async () => {
     const response = await fetch(url)
     const data = await response.json();
     return data;
}

export default fetchApi;
