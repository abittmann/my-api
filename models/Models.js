// it shapes how data is handled in your app
const data = require('../data.json') //require loads in the data from an external file now i can use the data throughout the app. 

class People { //This starts a class definition. A class is like a template for making objects.
    constructor (people)
    {this.id = people.id
    this.first_name = people.first_name
    this.last_name = people.last_name
    this.email = people.email
    this.gender = people.gender
    this.ip_address = people.ip_address 
    }

//The constructor runs automatically when a new People is made.
//•	It receives a people object and assigns its values to the new People object.
//•	Example: If you pass in { name: "Apple", genus: "Malus" }, it saves those in the new object.

static showAll() { //static method can be called without creating a people.
    return data.map(p => new People(p))  //goes through each item in data.json and turns it into a new People object.(this used to get all people.)
}

static show(id) {
    const people = data.find(people => Number(people.id) == Number(id))
    if (people) {
        return new People(people)
    } else {
        throw new Error("id not found")
    }
}
//finds one person by id, if found it returns a new People object, if not found it throws an error.

static create(person){
    const newPerson = person
    console.log(newPerson)

    newPerson ['id'] = data.length + 1
    data.push(newPerson)

    return new People(newPerson)
}
//creates a new person object, assigns it an id one up from the last, adds it to the data array, and returns a new People object.

update(person) {
    const updatePerson = data.find(people => Number(people.id) == Number(this.id))
    if (updatePerson) {
        updatePerson.first_name = person.first_name
        updatePerson.last_name = person.last_name

        return new People(updatePerson)
    } else {
        throw new Error("Person not found")
    }
}

//looks for the person in the data array that matches the id of the current object. (this.id)
//if found updates the first and last name of the person in the data array and returns the updated person as a new People object

destroy () {
    const deletedPerson = data.find(people => Number(people.id) == Number(this.id))
    if (deletedPerson) {
        const index = data.indexOf(deletedPerson)
        data.splice(index, 1)
    } else {
        throw new Error("Person not found")
    }
}

//looks for the person in the data array that matches the id of the current object. (this.id)
//if found removes the person from the data array.
//if not found throws an error.

}

module.exports = People