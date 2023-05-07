import './App.css';
import iconStar from './images/icon-star.svg';
import thankyouIcon from "./images/illustration-thank-you.svg";

import React from 'react';
//import {useState} from 'react';


function App() {
  const [secondPage, setSecondPage] = React.useState(false);
  const [ratingsDiv, setRating] = React.useState("");

  function submitHandler() {
    ratingsDiv !== "" &&
      setSecondPage((preValue) => {
        return !preValue;
        
      });

      setTimeout(function(){
        window.location.reload();
     }, 10000);

  }

  function numbersClick(e) {
    setRating(e.target.value);
  }

  return (

    <div className="App">
      {!secondPage ? (

      <div className='ratingContainer rounded-4 px-4 py-4'>
        {/* <div> */}

      <div className='starDiv rounded-circle mb-4'>
        <img src={iconStar} alt='icon-star logo' className='starLogo'/>
      </div>
      {/* </div> */}

      <div>
        <h5>How did we do?</h5>

        <p className='firstPara'>
        Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!
        </p>
      </div>

      <div className='ratingsDiv mb-4'> 
      <button className='numbersDiv rounded-circle px-3' value='1' 
      onClick={numbersClick}> 1 </button>

      <button className='numbersDiv rounded-circle px-3' value='2'
      onClick={numbersClick}> 2 </button>

      <button className='numbersDiv rounded-circle px-3' value='3'
      onClick={numbersClick}> 3 </button>

      <button className='numbersDiv rounded-circle px-3' value='4'
      onClick={numbersClick}> 4 </button>

      <button className='numbersDiv rounded-circle px-3' value='5'
      onClick={numbersClick}> 5 </button>
      </div>

      <div className='pe-3 ps-1'>
        <input className='submitButton w-100 rounded-4' value={'SUBMIT'} 
        type='submit' onClick={submitHandler} />
      </div>
      </div>

  ) : (
  <div className="second-pageContainer second-page rounded-4 pt-5 pb-4">
    <div className="thank-you-container">
      <img className="thank-you" src={thankyouIcon} alt="thankyou" />
    </div>

    <div className='mt-4 answerBoxDiv rounded-4'>
    <p className="answer-box pt-1 px-3">You selected {ratingsDiv} out of 5</p>
    </div>

    <div>
    <h5 className='mt-4'>Thank you!</h5>
    </div>

    <div className='appreciationParaDiv px-4'>
    <p className="firstPara">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
    </div>
  </div>
)}
</div>
);
}

export default App;
