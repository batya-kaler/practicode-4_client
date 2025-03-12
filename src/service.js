import axios from'./axiosConfig.ts'
axios.defaults.baseURL = process.env.NODE_ENV;

axios.interceptors.response.use(
  (response) => response, // אם אין שגיאות, מחזיר את התגובה כרגיל
  (error) => {
    console.error("Axios Error:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`);
    return result.data;
  },
  addTask: async (name) => {
    console.log('addTask', name);
    const result = await axios.post(`/`, { name })
    return result.data;
  }, 

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete });
    const result = await axios.patch(`/${id}`, { IsComplete: isComplete })
    return result.data;
  },

  deleteTask: async (id) => {
    console.log('deleteTask', id);
    const result = await axios.delete(`/${id}`)
    return result.data;
  }
};