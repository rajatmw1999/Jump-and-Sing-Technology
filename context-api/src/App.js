import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/HomePage';
import MenuContext from './context/menuContext';
import menuData from './utils/data';

function App() {
  return (
    <div>
      <Navbar />  
        <br /><br />
        <MenuContext.Provider value={menuData}>
          <HomePage />
        </MenuContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
