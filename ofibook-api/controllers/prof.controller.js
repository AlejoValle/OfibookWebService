const Post = require('../models/prof.model');
const debug = require('debug')( 'app:prof.controller' );

const controller = {};

controller.create = async (req, res) => {
    try {
        const { profecion } = req.body;	

    const newprof = new prf({
        profecion : profecion
    });
    await newprof.save();
    
    if(!newprof) {
    return res.status(409).json({ message: 'Hemos perdido tu profecion :c' });
}

    return res.status(200).json(newprof);
    } catch (error) {
        debug({ error });
        return res.status(500).json({ message: "Error al crear la profecion" });	
    }
};

controller.findALL = async (req, res) => {
    try { 
        const profs = await prof;

        return res.status(200).json({ profs });

    }
    catch (error) {
        debug({ error });
        return res.status(500).json({ message: "Error al encontrar los posts" });
    }
};

module.exports = controller;