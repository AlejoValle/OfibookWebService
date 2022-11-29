const Post = require('../models/Post.model');
const debug = require('debug')( 'app:post.controller' );

const controller = {};

controller.create = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const { _id: userId } = req.user;	

    const newPost = new Post({
        title : title,
        description : description,
        image : image,
        user: userId,
    });
    await newPost.save();
    
    if(!newPost) {
    return res.status(409).json({ message: 'Hemos perdido tu Post :c' });
}

    return res.status(200).json(newPost);
    } catch (error) {
        debug({ error });
        return res.status(500).json({ message: "Error al crear el post" });	
    }
};

controller.findALL = async (req, res) => {
    try { 
        const posts = await Post
        .find( { hidden: false } )
        .populate('user', 'username email');

        return res.status(200).json({ posts });

    }
    catch (error) {
        debug({ error });
        return res.status(500).json({ message: "Error al encontrar los posts" });
    }
};

controller.findOwn = async (req, res) => {
    try {
      const { _id: userId } = req.user;
  
      const posts =
        await Post
          .find({ user: userId })
          .populate("user", "username email");
  
      return res.status(200).json({ posts })
    } catch (error) {
      debug({ error });
      return res.status(500).json({ error: "Error interno de servidor" });
    }
};

controller.findOneById = async (req, res) => {
    try {
        const { identifier } = req.params;
        
        const post = await Post.findById(identifier);

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        return res.status(200).json( { post } );
    } catch (error) {
        debug({ error });
        return res.status(500).json({ message: "Error al encontrar el post" });
    }
}

module.exports = controller;