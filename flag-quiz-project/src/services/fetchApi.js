const url = 'https://restcountries.com/v2/all';

export const fetchApi = async () => {
     const response = await fetch(url)
     const data = await response.json();
     return data;
}

export const flags = async () => {
     const resultApi = await fetchApi();
     const dataFlags = resultApi.map((data) => ({ 'name': data.name, 'svg': data.flag }))
     return dataFlags;
}
