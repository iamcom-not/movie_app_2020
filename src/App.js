import React from "react";

function Food({fav}){
  //Food(props) 는 object로 가지고 있다. props.fav
  //props.fav = {fav} 
return <h2>i like {fav}</h2>
}

function App() {
  return (
    <div><h1>Hello!</h1>
      <Food fav="jelly" />
      <Food fav="hamburgers" />
      <Food fav="sushi" />
    </div>
  );
}

export default App;
