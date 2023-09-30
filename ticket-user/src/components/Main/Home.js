import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import CardInfo from './CardInfo'

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/ticket-card/:id" element={<CardInfo/>}/>
      </Routes>
    </div>
  )
}

export default Home