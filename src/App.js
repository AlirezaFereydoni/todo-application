import React, { Fragment } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoBuilder from "./components/TodoBuilder/TodoBuilder";
import './App.scss';

function App() {
  return (
   <Fragment>
     <TodoBuilder/>
   </Fragment>
  );
}

export default App;
