import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Aboutus from "./Aboutus";

export default function(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/aboutus" element={<Aboutus />} />
                </Routes>
            </div>
      </Router>
    );
}