import axios from'./axiosConfig.ts'
axios.defaults.baseURL = process.env.NODE_ENV;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  })

export default {
  // getTasks: async () => {
  //   const result = await axios.get(`/items`);
  //   return result.data.Items;
  // },
  getTasks: async () => {
    try {
      const result = await axios.get()
      return result.data
    }
    catch (error) {
      console.log(error)
    }
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