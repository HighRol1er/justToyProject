import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LuckyDraw from './components/LuckyDraw';
import KrwUsdValue from './components/KrwUsdValue';
import Home from './components/Home';
function App() {

  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/luckydraw' element={ <LuckyDraw /> }/>
        <Route path='/krw-usd' element={ < KrwUsdValue /> }/>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
