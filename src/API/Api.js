import axios from "axios";

const ApiUrl = 'https://casselys.com/api'

export const fetchEvent = async(page = 1, perPage = 10)=>{
    try{
        const response = await axios.get(`${ApiUrl}/events?search=&per_page=${perPage}&page=${page}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};