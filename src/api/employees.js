import axios from 'axios';

export async function getEmployees() {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${url}/employees/getEmployees`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createEmployee(client) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/employees/createEmployee`, client);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function updateEmployee(client) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.put(`${url}/employees/updateEmployees`, client);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}