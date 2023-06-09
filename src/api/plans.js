import axios from 'axios';

export async function getPlans() {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${url}/plans/getPlans`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createPlan(plan) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/plans/createPlan`, plan);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function updatePlan(plan) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/plans/updatePlan`, plan);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}