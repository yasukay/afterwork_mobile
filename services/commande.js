import axios from "../config/axios"

const getAllCommands = () => {
    return axios
        .get('commandes')
        .then(response => response.data)
};

const getDetailsCommand = (idCommand) => {
    return axios
        .get(`commandes/details/${idCommand}`)
        .then(response => response.data)
};