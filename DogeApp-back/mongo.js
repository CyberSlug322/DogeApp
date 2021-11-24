import mongoose from 'mongoose';
import getRandomDog from './fetch.js';

const url = 'mongodb+srv://admin:admin@cluster0.dptsl.mongodb.net/dog-app?retryWrites=true&w=majority';
const breedSchema = new mongoose.Schema({
    title: String
  }, { versionKey: false })
  const dogSchema = new mongoose.Schema({
    breed: mongoose.Schema.Types.ObjectId,
    image: String,
    title: String
  }, { versionKey: false });
  
  const Breed = mongoose.model('Breed', breedSchema);
  const Dog = mongoose.model('Dog', dogSchema );


export const handleDog = async () => {
    await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    const dogData = await getRandomDog();
    const breedTitle = dogData.message.split('/')[4];
    const breed = new Breed({title: breedTitle});
    const breedObj = await breed.save();
    const dogBreed = breedObj._id;
    const dogTitle = dogData.message.split('/')[5].split('.')[0];
    const image = dogData.message;
    const dog = new Dog({breed: dogBreed, image: image, title: dogTitle});
    await dog.save();
}
