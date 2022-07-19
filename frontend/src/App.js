import React from 'react';
import Homepage from "./Pages/Homepage";
import Chatpage from './Pages/Chatpage';
import { Route } from "react-router-dom"

const app = () => {
  return (
     <div className="App">
      <Route path="/"component={Homepage} exact />
      <Route path="/chats"component={Chatpage}/>

     </div>
  )
}

export default app