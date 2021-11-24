import fetch from 'node-fetch';

async function getRandomDog () {
    const response = await fetch('https://dog.ceo/api/breeds/image/random ');
    const data = await response.json();
    return data;
}
export default getRandomDog;