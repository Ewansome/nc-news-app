import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="nc-news-app">
        <Header />
        <Main />
        <footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
