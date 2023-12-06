// @ts-nocheck
import 'dotenv/config'
import fetch from 'node-fetch';
import axios from 'axios';

export const load = async () => {
    const fetchSessions = async () => {

    const response = await fetch('https://us-east-2.aws.data.mongodb-api.com/app/data-lkezz/endpoint/data/v1/action/find', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.FOCUSSESSIONAPI,
        },
        body: JSON.stringify({
            dataSource: 'CS348',
            database: 'test',
            collection: 'FocusSessions',
            filter: {},
          }),
        });
        const data = await response.json();
        return data
    }
    return {
        focusSessions: fetchSessions()
    }

}

export const actions = {
    delete: async ({request}) => {
        const data = await request.formData();
        const sessionId = String(data.get('id'));
        console.log(sessionId);
        
        const apiKey = process.env.FOCUSSESSIONAPI; // Replace with your actual API key

    axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-lkezz/endpoint/data/v1/action/deleteOne', {
    dataSource: 'CS348',
    database: 'test',
    collection: 'FocusSessions',
    filter: { "_id": { "$oid": sessionId } },
        }, {
    headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
    },
    })
    }
}