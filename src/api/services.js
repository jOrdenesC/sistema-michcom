import axios from 'axios';

export async function getServices() {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${url}/services/getServices`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createService(service) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/services/createService`, service);
        return response;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export async function updateService(service) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/services/updateService`, service);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}