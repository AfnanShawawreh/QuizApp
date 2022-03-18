import axios from 'axios';
const url ="https://quiz-mern-app7.herokuapp.com/answers";
export const readAnswers =()=> axios.get(url);