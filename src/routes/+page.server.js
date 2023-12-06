// @ts-nocheck
import 'dotenv/config'
import fetch from 'node-fetch';

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
