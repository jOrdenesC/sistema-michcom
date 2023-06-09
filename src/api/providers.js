import axios from 'axios';

export async function getProviders(){
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${url}/providers/getProviders`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createProvider(provider){
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/providers/createProvider`, provider);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function updateProvider(provider){
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/providers/updateProvider`, provider);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}