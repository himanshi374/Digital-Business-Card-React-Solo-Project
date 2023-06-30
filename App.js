import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"

export default function App() {
    return(
        <div className="border-box">
            <div className="container">
                <Header />
                <About />
                <Footer />
            </div>
        </div>    
    )
}