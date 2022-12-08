import './App.css';
import PdfPage from './PdfPage';
import cv from './CVJPCL.jpg';

function App() {
  return (
    <div className="App">
      {/* <PdfPage /> */}
      <img style={{ width: "100%", height: "100%" }} src={cv} alt="pdf" />
    </div>
  );
}

export default App;
