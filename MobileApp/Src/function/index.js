import * as api from '../api/index';
export const createAnswer = async (answer)=>{
    try{
      const {data}=  await api.createAnswer(answer);
      return data
    }
    catch(err){
        console.log(err)
    }
}