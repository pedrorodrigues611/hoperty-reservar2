import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservas from './pages/Reservas';
export default function App() {
  return <BrowserRouter><Routes><Route path='/reservas' element={<Reservas />} /></Routes></BrowserRouter>;
}