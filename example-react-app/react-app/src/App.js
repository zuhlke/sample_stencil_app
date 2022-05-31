import logo from './logo.svg';
import './App.css';
import { MyComponent } from 'venus/dist/components/my-component'
import { CatFacts } from 'venus/dist/components/cat-facts'

customElements.define('my-stencil-component', MyComponent);
customElements.define('cat-facts', CatFacts);

function App() {
  return (
    <>
    <my-stencil-component first="A" middle="Web" last="Dev!"></my-stencil-component>
    <cat-facts></cat-facts>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
