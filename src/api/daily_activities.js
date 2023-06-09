import axios from 'axios';

export async function getDailyActivities() {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.get(`${url}/activities/getDailyActivities`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function createDailyActivity(data) {
    console.log(data);
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${url}/activities/createDailyActivity`, data);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function updateDailyActivity(data) {
    const url = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.put(`${url}/activities/updateDailyActivity`, data);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}