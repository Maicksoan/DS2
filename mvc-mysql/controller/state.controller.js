const states = [];

module.exports = {
    find: (req, res) => {
        res.send(states);
    },
    create: (req, res) => {
        const state = req.body;

        //push seria para adicionar ao final 

        states.push(state);

        res.send(state);
    },
    findById: (req, res) => {
        const { id } = req.params;

        // console.log(id - 1);

        res.send(states[id - 1]);

    },
    update: (req, res) => {
        const state = req.body;
        const { id } = req.params;
        const index = id - 1;
        states[index] = state;
        res.send(state);

    },
    delete: (req, res) => {
        const { id } = req.params;

        states.splice(id - 1, 1);
        res.status(204).send();



    }
}