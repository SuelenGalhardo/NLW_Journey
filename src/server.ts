import fastify from "fastify";

import { prisma } from "./lib/prisma";

const app = fastify();


app.get('/cadastrar', async () => {

    await prisma.trip.create({
        
   data: {
        destination: 'Madrid',
        starts_at: new Date(),
        ends_at: new Date(),


    },
})

return { message: 'Viagem cadastrada com sucesso!' }
})


app.get("/listar", async() => {
    const trips = await prisma.trip.findMany();
    return trips;
    
});

app.listen({ port: 3333 }).then(() => {
    console.log("Server is running on port 3333")

});
