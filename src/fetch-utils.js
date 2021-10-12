import request from 'superagent'

export async function getTodos(token) {
    const response = await request
    .get('https://to-do-lab-12-backend.herokuapp.com/api/todos')
    .set('Authorization', token);
    return response.body
}

export async function createTodo(todo, token) {
    const response = await request
    .post('https://to-do-lab-12-backend.herokuapp.com/api/todos')
    .send({todo: todo})
    .set('Authorization', token);
    return response.body
}

export async function updateTodo(token, completed, id) {
    const response = await request
    .put(`https://to-do-lab-12-backend.herokuapp.com/api/todos/${id}`)
    .send({completed: completed})
    .set('Authorization', token);
    return response.body
}

export async function login(email, password) {
    const response = await request
        .post('https://to-do-lab-12-backend.herokuapp.com/auth/signin')
        .send({ email, password})
    return response.body
}

export async function signup(email, password) {
    const response = await request
        .post('https://to-do-lab-12-backend.herokuapp.com/auth/signup')
        .send({ email, password})
    return response.body
}