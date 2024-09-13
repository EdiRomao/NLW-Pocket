import { db } from "."
import { goalCompletions, goals } from "./schema"

async  function  seeds(){

    await db.delete(goalCompletions)
    await db.delete(goals)
    
}

seeds()