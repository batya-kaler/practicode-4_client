import axios from'./axiosConfig.ts'
axios.defaults.baseURL = 'http://localhost:5256';

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  // addTask: async(name)=>{
  //   console.log('addTask', name)
  //   const result = await axios.post(`/`,name)   
  //   return  result.data;
  // }, 
  
  addTask: async (name) => {
    console.log('addTask', name);
    const result = await axios.post(`/`, null, { params:{ name } }); 
    return result.data;
  }, 

  setCompleted: async(id, isComplete)=>{
    // console.log('setCompleted', {id, isComplete})
    // const result = await axios.patch(`${id}`,isComplete)   
    const result = await axios.patch(`/${id}`, null, { params: { IsComplete: isComplete } });   
    return  result.data;
  },

  deleteTask:async(id)=>{
    const result = await axios.delete(`${id}`)   
    return  result.data;
    console.log('deleteTask')
  }
};
