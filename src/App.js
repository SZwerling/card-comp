
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Card from './CardComponent';
import RenderCards from "./RenderCardsComponent";
import WORDS from "./words";

const words = WORDS

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">CONTROLS?</div>
        < Card />
        <div className="col-2">API CALL TO PICTURE?</div>
        <RenderCards words={words}/>
      </div>
    </div>
  );
}

export default App;
