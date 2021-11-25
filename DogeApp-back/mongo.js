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
    const { image, dogTitle, breedTitle } = await getRandomDog();
    const breed = new Breed({title: breedTitle});
    const breedObj = await breed.save();
    const dogBreed = breedObj._id;
    const dog = new Dog({breed: dogBreed, image: image, title: dogTitle});
    await dog.save(); 
    
}
export const getAllDogs = async () => {
  const dogArr = await Dog.find({}).exec();
  const mergedArr = await Promise.all( dogArr.map( async element => {
      const dog =  {image : element.image, title: element.title};
      dog.breed = await Breed.findById(element.breed).then(res => res.title);
      console.log('check dog breed',dog.breed); //check
      return dog;
  }))
  console.log(mergedArr)
  return mergedArr;
}
