
export const getData = () => {
    return fetch('http://localhost:3001/', { method: "GET"})
        .then((res) => res.json())
        .catch((e) => console.log("error trying to get data", e));
        
};
//'http://localhost:3001/'
//https://dog.ceo/api/breeds/image/random