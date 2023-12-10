// @ts-nocheck
import 'dotenv/config'
import fetch from 'node-fetch';
import axios from 'axios';
import client from '$db/mongo';

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
        },
    
    deleteAll: async ({request}) => {
        const sessionCollection = client.collection('FocusSessions');
        const results = await sessionCollection.deleteMany();
    },

    getStatistics: async({request}) => {
        const data = await request.formData();
        let eventType;
        let resultCursor;
        eventType = data.get('eventType');
        const sessionCollection = client.collection('FocusSessions');
        if (eventType == null) {
            resultCursor = await sessionCollection.aggregate([
            {
              '$group': {
                '_id': '$type',
                'totalByType': {
                  '$sum': 1,
                },
                'totalDuration': {
                  '$sum': {
                    '$toInt': '$duration',
                  },
                },
              },
            },
            {
              '$project': {
                '_id': 0,
                'type': '$_id',
                'numSessions': '$totalByType',
                'totalDuration': '$totalDuration',
              },
            },
            {
              '$group': {
                '_id': null,
                'totalSessions': {
                  '$sum': '$numSessions',
                },
                'sessionsByType': {
                  '$push': '$$ROOT',
                },
                'totalDuration': {
                  '$sum': '$totalDuration',
                },
                'averageDuration': {
                  '$avg': '$totalDuration',
                },
              },
            },
            {
              '$project': {
                '_id': 0,
                'totalSessions': 1,
                'sessionsByType': 1,
                'totalDuration': 1,
                'averageDuration': 1,
              },
            },
          ]);
        } else {
            resultCursor = await sessionCollection.aggregate([
                {
                  '$match': {
                    'type': eventType
                  }
                }, {
                  '$group': {
                    '_id': '$type', 
                    'totalByType': {
                      '$sum': 1
                    }, 
                    'totalDuration': {
                      '$sum': {
                        '$toInt': '$duration'
                      }
                    }
                  }
                }, {
                  '$project': {
                    '_id': 0, 
                    'type': '$_id', 
                    'numSessions': '$totalByType', 
                    'totalDuration': '$totalDuration'
                  }
                }, {
                  '$group': {
                    '_id': null, 
                    'totalSessions': {
                      '$sum': '$numSessions'
                    }, 
                    'sessionsByType': {
                      '$push': '$$ROOT'
                    }, 
                    'totalDuration': {
                      '$sum': '$totalDuration'
                    }, 
                    'averageDuration': {
                      '$avg': '$totalDuration'
                    }
                  }
                }, {
                  '$project': {
                    '_id': 0, 
                    'totalSessions': 1, 
                    'sessionsByType': 1, 
                    'totalDuration': 1, 
                    'averageDuration': 1
                  }
                }
              ]);
        }
        

    const resultArray = await resultCursor.toArray();
    return {success: true, statistics: resultArray};
    }
    
    }

