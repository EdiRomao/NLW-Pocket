import { client, db } from "."
import { goalCompletions, goals } from "./schema"
import dayjs, { Dayjs } from "dayjs"

async  function  seeds(){

    await db.delete(goalCompletions)
    await db.delete(goals)

    const result = await db.insert(goals).values([

        {title: 'Acordar cedo', desireWeeklyFrequency: 5},
        {title: 'Me exercitar', desireWeeklyFrequency: 3},
        {title: 'Meditar', desireWeeklyFrequency:1},

    ]).returning()

    const startDfweek = dayjs().startOf('week')

    await db.insert(goalCompletions).values([
        {goalId: result[0].id, createdAt: startDfweek.toDate()},
        {goalId: result[1].id, createdAt: startDfweek.add(1, 'day').toDate()}
        

    ])

    
}

seeds().finally(() =>{

    client.end()
})
