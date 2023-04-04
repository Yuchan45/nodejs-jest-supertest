import app from "../src/app.js";
import request from 'supertest'; // La documentacion recomienda llamarla request, no supertest. Raro pero si.

describe('Describes if route GET /tasks is working', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/tasks').send(); // esto le pega a mi propio endpoint y se guarda la respuesta para luego testearla.
        expect(response.statusCode).toBe(200);
    });

    test('should respond with an array', async () => {
        const response = await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array);
    });
    
    
});

describe('POST /tasks', () => {
    // Siguiendo la metodologia de desarrollo TDD, escribo las pruebas antes.

    describe('given a title and description', () => {

        const newTask = {
            title: "Test task",
            description: "Test description"
        };

        test('should return with a 200 status code ', async () => {
            const response = await request(app).post('/tasks').send();
            expect(response.statusCode).toBe(200);
        });
        
        test('sould respond with a content-type of application/json in header', async () => {
            const response = await request(app).post('/tasks').send();
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json")); 
            // Espera que sea un json (que en el header -> content-type, venga algo que contenga la palabra json mejor dicho)
        });
    
        test('should respond with an taskId', async () => {
            const response = await request(app).post('/tasks').send(newTask); // Le envio una tarea para que pruebe.
            expect(response.body.id).toBeDefined(); // Osea que la propiedad 'id' exista.
        });
    });

});