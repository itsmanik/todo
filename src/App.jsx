import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./assets/main.css";

function App() {
    return (
        <div className="bg-main-color min-h-screen">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
