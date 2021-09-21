import Header from "./Containers/Header/Header";
import Routes from "./Routes/Routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Login/>
      <Register />
    </div>
  );
}

export default App;
// <BrowserRouter>
//     <Header />
//     <Routes/>
// </BrowserRouter>
