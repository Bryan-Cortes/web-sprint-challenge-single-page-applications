import React from 'react'
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const routeToFormPage= ()=> {
    history.push("/pizza")
  }
  return (
    
    <div>
        <img src="" alt=""/>
        <p>Your favorite food, delivered while coding</p>
        <button onClick={routeToFormPage}> ORDER NOW </button>
        
    </div>
  );
}
