import { useEffect , useState} from 'react';
import Preloader from './component/Preloader'
import {readAnswers} from './function/index'
import moment from 'moment';
function App() {
  const [answer,setAnswer]= useState(null)
  useEffect(()=>{
const fetchData =async()=>{
  const result = await readAnswers();
  setAnswer(result)
}
fetchData();
  },[])
  return (
    
    <div className="container">
      <h1>Quiz Answers</h1>
    {!answer?  <Preloader />:answer.length>0?
    <ul className="collection">
      {answer.map(answers=>(
          <li key={answers._id} className="collection-item"><div>
            {answers.name.length<10?<h5>{answers.name}</h5>:<h5>{answers.name.substr(0, 7)} ...</h5>}
           
    <p>{answers.value}</p>
  <p> {moment(answers.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
    {/* {moment(post.date).format() */}
    <a href="#!" className="secondary-content">
    </a></div></li>

      ))}
  
</ul>:<div><h5>NoThing to show</h5></div>}




    </div>
  );
}

export default App;
