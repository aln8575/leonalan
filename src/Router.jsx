import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Fastdating from "./pages/Fastdating";
import Home from "./pages/Home";
import Programs from "./pages/Programs";

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Sobre" element={<About/>}/>
            <Route path="/Fastdating" element={<Fastdating/>}/>
            <Route path="/Programas" element={<Programs/>}/>
        </Routes>
        </BrowserRouter>
    )
}