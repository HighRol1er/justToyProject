import { useState } from 'react';
import './App.css'

/*
  롱숏말고도 오늘은 뭐매수해볼까? 라는걸로도 해보자
  Math.random() 이용해서 길이를 곱해서 최대 갯수 정하고
  그거에 맞는걸로 가져오면될듯. 
  배열에 있는 값중 아무거나 가져오는걸로해야되나?..
*/

function App() {
  const [valueOfRandomNumber, setValueOfRandomNumber] = useState("");

  const onClickLuckyDraw = () => {
    // math.random = 0이상 1미만 난수. 내가 필요한건
    // * 2하면 0이상 2미만 난수
    const randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber === 0) {
      setValueOfRandomNumber("롱");
    } else if (randomNumber === 1) {
      setValueOfRandomNumber("숏");
    }
  }

  return (
    <>
      <h1>ezpz 홀짝 추첨기</h1>
      <button onClick={onClickLuckyDraw}>추첨시작</button>
      <p>{valueOfRandomNumber}</p>
      {valueOfRandomNumber === "롱" && <span>시그니엘 가즈아!!!</span> }
      {valueOfRandomNumber === "숏" && <span>지옥 가즈아!!!</span> }

    </>
  )
}

export default App
