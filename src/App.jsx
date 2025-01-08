import React, { Component, useState } from 'react';


function Amount (){
  
  const [amount,setAmount]= useState(0);

  onIncrement = () => {
    setAmount(amount + 1);
  };
  
  onDecrement = () => {
    setAmount(amount - 1);
  };
  
    return (

      <div>
        <span>US Dollar: {this.state.amount} </span>

        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
      </div>
    );
}

const App = <Amount/>;
export default App;