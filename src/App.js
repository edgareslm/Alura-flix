import './App.css';

import Banner from './Components/Banner';
import DefaultPage from './DefaultPage';
import Carrusel from './Carrusel';

function App() {
  
  return (
    <div className="App">
      <DefaultPage>
        <Banner/>
        <Carrusel/>
      </DefaultPage>
    </div>
  );
}

export default App;
