import "./App.css";
import PdfPage from "./PdfPage";
import cv from "./CVJPCL.jpg";

function App() {
  return (
    <div className="App">
      {/* <PdfPage /> */}
      <img style={{ width: "100%", height: "100%" }} src={cv} alt="pdf" />
      <a target="_blank" href="https://www.zaask.pt/user/joaopaulolopes">
        <img
          src="https://www.zaask.pt/widget?user=812882&widget=pro-findme"
          alt=""
        />
      </a>
    </div>
  );
}

export default App;
