import './App.css';
import Cards from './components/Cards/Cards';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className='flex flex-col gap-6 items-center bg-Rose-100'>
     <Cards/>
     <Cart/>
    </div>
  )
}

export default App
