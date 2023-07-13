import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from "./router/AppRouter";
import MenuContainer from "./Components/UI/MenuContainer/MenuContainer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <MenuContainer />
        </BrowserRouter>
    );
}

export default App;
