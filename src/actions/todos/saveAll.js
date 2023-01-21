export const saveAll = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}
