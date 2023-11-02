import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
//import { MONGO_URL } from '$env/static/private';

const uri = import.meta.env.MONGO_URL



const client = new MongoClient('mongodb+srv://ecnelson:Iliketoskial0t@cluster0.tf6je40.mongodb.net/')

export function start_mongo(): Promise<MongoClient> {
    console.log("connected");
    return client.connect();
}


export default client.db()