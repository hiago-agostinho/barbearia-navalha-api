import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify();
const database = new DatabaseMemory()

server.post('/horarios', () => {
    return 'hello world';
});

server.get('/horarios', () => {
    return 'hello bolo';
});

server.put('/horarios/:id', () => {
    return 'hello celke';
});

server.delete('/horarios/:id', () => {
    return 'hello celke';
});

server.listen({
    port: 3333
});