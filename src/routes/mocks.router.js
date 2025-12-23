import { Router } from "express";
import { faker } from "@faker-js/faker";

const router = new Router();

const generateUsers = (cant)=>{
    const users = Array.from({length: cant}, ()=>({
        _id: faker.database.mongoObjectId(),
        name: faker.person.firstName(),
        age: faker.number.int({min:18, max:100}),
        email: faker.internet.email(),
        password: 'coder123'
    }))
    return users;
};

const generatePets = (cant)=>{
    const pets = Array.from({length:cant}, ()=>({
        _id: faker.database.mongoObjectId(),
        name: faker.person.firstName(),
        age: faker.number.int({min:1, max:10}),
        species: faker.animal.type()

    }));
    return pets;
}

router.get('/mockingpets/:cant', (req, res)=>{
    const {cant=50} = req.params;
    const pets = generatePets(cant)
    res.send("pets")
});

router.get('/mockingusers/:cant', (req, res)=>{
    const {cant=50} = req.params;
    const users = generateUsers(cant);
    res.send(users);
});

router.post('/generatedata/:cantUsers/:cantPets', (req, res)=>{
    const {cantUsers=50} = req.params;
    const {cantPets = 50}= req.params;
    const users = generateUsers(cantUsers);
    const pets = generatePets(cantPets);

    res.send('data generada exitosamente')
})

export default router;