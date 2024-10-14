import fastify from "fastify"
import { createGoal } from "../functions/create-goal"
import z from "zod"

const app = fastify()

app.post('/goals', async (request) =>{

    const createGoalSchema = z.object({

        title: z.string(),
        desireWeeklyFrequency: z.number().int().min(1).max(7),


    })
    const body = createGoalSchema.parse(request.body)

    await createGoal({

        title: body.title,
        desireWeeklyFrequency: body.desireWeeklyFrequency,
    })

} )

app.listen({

    port: 3333,
}).then(() =>{

    console.log('HTTP server runing');
    
})
