import {MongoClient} from 'mongodb';
import {MONGO_URL} from '$env/static/private';
import dotenv from 'dotenv';

dotenv.config();
//import { MONGO_URL } from '$env/static/private';

const uri = MONGO_URL



const client = new MongoClient(uri)

export function start_mongo(): Promise<MongoClient> {
    console.log("connected");
    return client.connect();
}


export default client.db("test")