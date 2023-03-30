import './App.css';
import * as React from "react";
import HomePage from "./page/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./templates/modules/components/navBar/NavBar";

function App() {
  return (
      <div>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  {/*<Route path='funtwo' element={<FunTwo/>}/>*/}
                  {/*<Route path='about' element={<About/>}/>*/}
                  {/*<Route path='*' element={<Error />}/>*/}
              </Routes>
              {/*<Footer></Footer>*/}
          </BrowserRouter>
      </div>
  );
}

export default App;
