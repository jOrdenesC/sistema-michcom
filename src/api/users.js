import axios from 'axios';

export async function getUsers() {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${url}/users/getUsers`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createUser(user){
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/users/createUser`, user);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function updateUser(user){
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/users/updateUser`, user);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}