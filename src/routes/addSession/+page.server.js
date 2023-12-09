import db from '$db/mongo'
import client from '$db/mongo'

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		// TODO log the created session
        const data = await request.formData();
        console.log(data);
        
        const title = String(data.get('title'));
        const type = data.get('type');
        const date = data.get('date');
        const time = data.get('time');
        const duration = data.get('duration');
        const notes = data.get('notes');
        const dueDate = data.get('date');
        const sessionData = {
            title,
            type,
            date,
            time,
            duration,
            notes,
          };

        const todoData = {
          title,
          type,
          dueDate,
          notes,
        };
        const sessionCollection = client.collection('FocusSessions');
        const todoCollection = client.collection('todos');
        try {
            const result = await sessionCollection.insertOne(sessionData);
            const results2 = await todoCollection.insertOne(todoData);
            console.log(`Session inserted with _id: ${result.insertedId}`);
          } catch (error) {
            console.error('Error inserting session:', error);
          }
	}
};