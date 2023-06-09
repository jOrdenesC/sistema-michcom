import axios from 'axios';

export async function getClients() {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${url}/clients/getClients`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createClient(client) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/clients/createClient`, client);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function updateClient(client) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.put(`${url}/clients/updateClient`, client);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}