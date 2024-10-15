import { useState } from 'react';

const LuckyDraw = () => {
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

export default LuckyDraw