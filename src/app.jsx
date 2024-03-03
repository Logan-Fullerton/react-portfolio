import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import{Outlet} from 'react-router-dom';

function App(){
    return (
        <div className='App'>
            
            
              <nav>
                <Header/>
              </nav>
              <div><Outlet/></div>
              <div>
                <Footer/>
              </div>
             
            

        </div>
    )
}
export default App