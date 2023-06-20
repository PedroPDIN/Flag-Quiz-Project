const url = "https://restcountries.com/v2/all";

 export const fetchApi = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const flags = async () => {
  const data = await fetchApi();
  const resultApi = data.filter((info) => info.region !== 'Polar');
  const dataFlags = resultApi.map((data) => ({
    name: data.name,
    svg: data.flag,
  }));
  return dataFlags;
};
