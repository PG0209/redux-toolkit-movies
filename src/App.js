import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App container">
       <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetails/>} />
            <Route element={<PageNotFound/>} />
      </Routes>  
      <Footer/>   
      </Router> 
    </div>
  );
}

export default App;
