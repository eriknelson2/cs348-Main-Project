// @ts-nocheck
import 'dotenv/config'
import fetch from 'node-fetch';
import axios from 'axios';

export const load = async () => {
    const fetchTodos = async () => {

    const response = await fetch('https://us-east-2.aws.data.mongodb-api.com/app/data-lkezz/endpoint/data/v1/action/find', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.FOCUSSESSIONAPI,
        },
        body: JSON.stringify({
            dataSource: 'CS348',
            database: 'test',
            collection: 'todos',
            filter: {},
          }),
        });
        const data = await response.json();
        return data
    }
    return {
        todos: fetchTodos()
    }
}

export const actions = {
    delete: async ({request}) => {
        const data = await request.formData();
        const todoId = String(data.get('id'));
        console.log(todoId);
        
        const apiKey = process.env.FOCUSSESSIONAPI;

    axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-lkezz/endpoint/data/v1/action/deleteOne', {
    dataSource: 'CS348',
    database: 'test',
    collection: 'todos',
    filter: { "_id": { "$oid": todoId } },
        }, {
    headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
    },
    })
    },

    update: async ({request}) => {
        const data = await request.formData();
        const todoId = String(data.get('id'));
        const apiKey = process.env.FOCUSSESSIONAPI;
        const title = data.get('title');
        const type = data.get('type');
        const date = data.get('date');
        const notes = data.get('notes');
        axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-lkezz/endpoint/data/v1/action/updateOne', {
            dataSource: 'CS348',
            database: 'test',
            collection: 'todos',
            filter: { "_id": { "$oid": todoId } },
            update: {
                $set: {
                    "title": title,
                    "type": type,
                    "dueDate": date,
                    "notes": notes
                }
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            }
        });
    }
}
