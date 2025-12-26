import { Router } from "express";
import { faker } from "@faker-js/faker";
import { Pet } from "../models/pet.model.js";
import { User } from "../models/user.model.js";

const router = new Router();

const generateUsers = (cant)=>{
    const users = Array.from({length: cant}, ()=>({
        _id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        age: faker.number.int({min:18, max:100}),
        email: faker.internet.email(),
        password: 'coder123'
    }))
    return users;
};

const generatePets = (cant)=>{
    const pets = Array.from({length:cant}, ()=>({
        _id: faker.database.mongodbObjectId(),
        name: faker.person.firstName(),
        age: faker.number.int({min:1, max:10}),
        species: faker.animal.type()

    }));
    return pets;
}

router.get('/mockingpets/:cant', (req, res)=>{
    const {cant=50} = req.params;
    const pets = generatePets(cant)
    res.send(pets)
});

router.get('/mockingusers/:cant', (req, res)=>{
    const {cant=50} = req.params;
    const users = generateUsers(cant);
    res.send(users);
});

router.post('/generatedata/:cantUsers/:cantPets', async (req, res)=>{
    try {
        const cantUsers = parseInt(req.params.cantUsers) || 50;
        const cantPets = parseInt(req.params.cantPets) || 50;
    
        const users = generateUsers(cantUsers);
        const pets = generatePets(cantPets);
    
        console.log(users)
        console.log(pets)

        await User.insertMany(users);
        await Pet.insertMany(pets);
    
        res.status(201).json({
          status: 'success',
          message: 'Data generada exitosamente',
          usersInserted: users.length,
          petsInserted: pets.length
        });
      } catch (error) {
        res.status(500).json({
          status: 'error',
          message: error.message
        });
      }
    });
    
    
    
    
    
    

export default router;