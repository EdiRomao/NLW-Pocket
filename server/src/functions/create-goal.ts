import { goals } from "../db/schema"
import { db } from "../db"

interface CreatGoalRequest{

    title : string
    desireWeeklyFrequency: number
}


export async function createGoal({title, desireWeeklyFrequency }: CreatGoalRequest){

    const result = await db.insert(goals).values({

        title,
        desireWeeklyFrequency,
    }).returning()

    const goal = result[0]

    return{

        goal,
    }

} 
    


