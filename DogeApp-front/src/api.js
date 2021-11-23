
export const getData = () => {
    return fetch('https://dog.ceo/api/breeds/list/all', { method: "GET"})
        .then((res) => res.json())
        .catch((e) => console.log("error trying to get data", e));
        
};
//'http://localhost:3001/'