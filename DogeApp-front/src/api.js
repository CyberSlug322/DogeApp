
export const getData = () => {
    return fetch('http://localhost:3001/', { method: "GET"})
        .then((res) => res.json())
        .catch((e) => console.log("error trying to get data", e));
        
};
