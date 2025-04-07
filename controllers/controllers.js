//this is the logic brain of the API 
const People = require('../models/models.js') //this bring in the class from the model.
//now we can use all the functions from the class. 



//get all people 

const index = async (req, res) => {
    try {
        const data = await People.showAll();
        res.status(200).send(data);
    } catch(err) {
        res.status(500).send({ error: "Server error" });
    }
}

//this is called when the user wants to see all the people.
//await People.showAll() gets the data.
//res.status(200).send(data) sends a success response with the list.
//If something breaks, it catches the error and sends a 500 (server error).

const show = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const person = await People.show(id);
        res.status(200).send(person);
    } catch(err) {
        res.status(404).send({error: err})
    }
}

//goes to the name of the person from the url, uses .show(id) to find the person.
//if found, it sends a 200 response with the person.
//if not found, it sends a 404 response with an error message.

const create = async (req, res) => {
    try {
        const newPerson = await People.create(req.body);
        res.status(201).send(newPerson);
    } catch (err) {
        res.status(409).send({ error: err});
    }
}

//this reads the new persons data from the request body. calls the People.create function to make a new person.
//if successful, it sends a 201 response with the new person.
//if not successful, it sends a 409 response with an error message.

const update = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const person = await People.show(id);
        const result = await person.update(req.body);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ error: err});
    }
}

//get the name from the url like before finds the person using the .show(id) function.
//updates it with the new data from the request body.
//if successful, it sends a 200 response with the updated person.
//if not successful, it sends a 404 response with an error message.

const destroy = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const person = await People.show(id);
        const result = await person.destroy();
        res.sendStatus(204);
    } catch (err) {
        res.status(404).send({ error: err });
    }
};

//gets the id from the url and finds the person using the .show(id) function.
//then calls the .destroy() function to remove the person.
//if successful, it sends a 204 response with no content.
//if not successful, it sends a 404 response with an error message.




module.exports = {index, show, create, update, destroy}

//Makes all these functions available to other parts of your app (like your routes).