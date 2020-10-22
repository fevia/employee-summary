// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email)
        this.github = github;
    }
    getName (){
        return this.name
    }

    getId (){
        return this.id
    }

    getEmail (){
        return this.email
    }

    getGithub(){
        return this.github

    }

    getRole(){
        return "Engineer"
    }

}

module.exports = Engineer;

var test = new Engineer("flory", 234, "flory@gmail.com", "fevia")
console.log(test);