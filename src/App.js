import './App.css';

import { 
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainHome from './components/Main/MainHome'
import ShoppingList from './components/Store/List/ShoppingList';
import MainStore from './components/Store/MainStore';
import Listing from './components/Admin/Listing';
import NotFound from './components/NotFound/NotFound';
import Sign_in from './pages/Sign_in';
import Sign_up from './pages/Sign_up';
import ImageAIPage from './pages/imageAIPage/ImageAIPage';
import MyPage from './pages/myPage/myPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/store" element={<MainStore />} />
        <Route path="/shopping" element={<ShoppingList />} />
        <Route path="/login" element={<Sign_in />}/>
        <Route path="/register" element={<Sign_up />}/>
        <Route path="/modeling" element={<ImageAIPage />}/>
        <Route path="/brands" element={<Listing />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
