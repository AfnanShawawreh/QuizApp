import * as api from '../api/index';
export const readAnswers = async ()=>{
    try{
      const {data}=  await api.readAnswers();
      return data
    }
    catch(err){
        console.log(err)
    }
}