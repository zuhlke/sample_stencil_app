import logo from './logo.svg';
import './App.css';
import { MyComponent } from 'stencil-components/dist/components/my-component'

customElements.define('my-stencil-component', MyComponent);

function App() {
  return (
    <>
    <my-stencil-component first="A" middle="Web" last="Dev!"></my-stencil-component>
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
