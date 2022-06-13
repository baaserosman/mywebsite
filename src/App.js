import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import AppRouter from "./router/Router";

function App() {
  return (
    <div>
      <Navbar />
      {/* <AppRouter /> */}
      <Home/>
    </div>
  );
}

export default App;
