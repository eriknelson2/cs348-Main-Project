import {focusSessions} from "$db/focusSessions";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function() {
    const data = await focusSessions.find({}).toArray();

    return {
        props: {
            focusSessions: data
        }
    }
}