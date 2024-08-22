import React, {useState} from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"];
    const [difficultyChange, setDifficultyChange] = useState('');
    const navigate = useNavigate();
    const TOTAL_QUESTIONS = 10;    

    console.log(difficultyChange, "difficultyChange");

    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }
  return (
    <div className='introduce'>
        <div className="introduce-container">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/018/766/186/small_2x/quiz-guess-social-media-icon-in-flat-style-faq-illustration-on-isolated-background-help-button-sign-business-concept-vector.jpg" alt="" />
            <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
            <div onClick={startQuiz} className='introduce-btn'>Start Quiz</div>
        </div>
    </div>
  )
}

export default Introduce