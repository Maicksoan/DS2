const persons = [];

module.exports = {
    find: (req, res) => {
        res.send(persons);
    },
    create: (req, res) => {
        const person = req.body;

        //push seria para adicionar ao final 

        persons.push(person);

        res.send(person);
    },
    findById: (req, res) => {
        const { id } = req.params;

        // console.log(id - 1);

        res.send(persons[id - 1]);

    },
    update: (req, res) => {
        const person = req.body;
        const { id } = req.params;
        const index = id - 1;
        persons[index] = person;
        res.send(person);

    },
    delete: (req, res) => {
        const { id } = req.params;

        persons.splice(id - 1, 1);
        res.status(204).send();



    }
}