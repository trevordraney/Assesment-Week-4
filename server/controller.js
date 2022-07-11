let compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.", "If you were a fruit, you'd be a FINEapple!"];

module.exports = {
    

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getCompliments: (req, res) => {
        res.status(200).send(compliments);
    },

    deleteCompliments: (req, res) => {
        compliments.length = 0;
        res.status(200).send();
    },

    addCompliment: (req, res) => {
        if (req.body.compliment) {
            compliments.push(req.body.compliment)
        }
        res.status(200).send();
    },

    allCapsify: (req, res) => {
        compliments = compliments.map(element => {
            return element.toUpperCase();
        })
        res.status(200).send();
    }

}