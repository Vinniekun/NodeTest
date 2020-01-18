const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev')

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username, techs} = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);    
    
    //const { name = login, avatar_url, bio} = apiResponse.data;
    let { name, avatar_url, bio} = apiResponse.data;

    if(!name){
        name = apiResponse.data.login;
    }

    const techsArray = techs.split(',').map(techs => techs.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

    console.log(name, avatar_url, bio, github_username);

    return response.json(dev);
});

routes.get('/', (request, response) => {
    return response.send('Hello World!');
});

module.exports = routes;