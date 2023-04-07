const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;



const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newFake;
};

const newFakeUser = createUser();

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return newFake;
};
    
const newFakeCompany = createCompany();


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json({ newFakeUser });
});

app.get("/api/companies/new", (req, res) => {
    res.json({ newFakeCompany });
});

app.get("/api/user/company", (req, res) => {
    res.json({ User: newFakeUser, Company: newFakeCompany });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
