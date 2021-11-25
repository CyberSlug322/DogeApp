import fetch from 'node-fetch';

async function getRandomDog () {
    const response = await fetch('https://dog.ceo/api/breeds/image/random ');
    const data = await response.json();
    const breedTitle = data.message.split('/')[4];
    const dogTitle = data.message.split('/')[5].split('.')[0];
    const image = data.message;
    const dogObj = { image,dogTitle, breedTitle};
    return dogObj;
}
export default getRandomDog;