import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/Components/Navbar";
import { DcPage, MarvelPage, HeroPage, SearchPage, HomePage} from "../pages"

export default function HeroesRouter() {
  return (
    <>
        <Navbar />
        
        <div className="container mt-4">
            <Routes>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DcPage/>}/>
                
                <Route path="/" element={<HomePage/>}/>

                <Route path="search" element={<SearchPage/>}/>
                <Route path="hero/:id" element={<HeroPage/>}/>
     
            </Routes>
        </div>
    </>
  )
}
