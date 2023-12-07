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
    },

    update: async ({request}) => {
        const data = await request.formData();
        console.log(data)
        const sessionId = String(data.get('id'));
        const title = String(data.get('title'));
        const type = data.get('type');
        const date = data.get('date');
        const time = data.get('time');
        const duration = data.get('duration');
        const notes = data.get('notes');

        const apiKey = process.env.FOCUSSESSIONAPI;
        axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-lkezz/endpoint/data/v1/action/updateOne', {
            dataSource: 'CS348',
            database: 'test',
            collection: 'FocusSessions',
            filter: { "_id": { "$oid": sessionId } },
            update: {
                $set: {
                    "title": title,
                    "type": type,
                    "date": date,
                    "time": time,
                    "duration": duration,
                    "notes": notes
                }
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            }
        });
        }}
