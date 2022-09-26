import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AppContextProvider } from './context/AppContext'
import './App.css';
import { ItemPage } from './components/ItemPage';
import { ListPage } from './components/ListPage';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/item/:id" element={<ItemPage />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
