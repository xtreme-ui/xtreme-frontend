import logo from './logo.svg';
import './App.css';
import ProductList from '@bit/xtreme-ui.urrk.product-list';
import Asset from '@bit/xtreme-ui.asset.asset';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        
        <ProductList/>
        {/* <Asset/> */}
      </header>
    </div>
  );
}

export default App;
