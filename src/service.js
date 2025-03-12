import axios from'./axiosConfig.ts'
axios.defaults.baseURL = process.env.NODE_ENV;
const service = {
  getTasks: async () => {
    const result = await axios.get(`/items`);
    return result.data;
  },
 
  addTask: async (name) => {
    console.log('addTask', name);
    const result = await axios.post(`/`, { name }); // אם יש צורך בגוף הבקשה
    return result.data;
  }, 

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete });
    const result = await axios.patch(`/${id}`, { IsComplete: isComplete }); // אם יש צורך בגוף הבקשה
    return result.data;
  },

  deleteTask: async (id) => {
    console.log('deleteTask', id);
    const result = await axios.delete(`/${id}`); // ודא שה-URL נכון
    return result.data;
  }
};