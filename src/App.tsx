import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ZenosParadox } from './components/ZenosParadox';
import { FlexLayout } from './components/FlexLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FlexLayout />} />
        <Route path='/zenos-paradox' element={<ZenosParadox />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;