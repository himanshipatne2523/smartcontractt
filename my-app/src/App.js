import React, { useState } from "react";
import Web3 from "web3";
import ContractABI from "./ContractABI.json";
import "./App.css";
function App() {
  const [value, setNewValue] = useState("");
  const [nvalue, addToValue] = useState("");
  const web3=new Web3(window.ethereum);
  const RemixContract=new web3.eth.Contract(ContractABI,"0xf06e6783b74a31d65AC4E7E516B58A7Cf3BF3707");

  const setValue = async(e)=>{
    e.preventDefault();
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      const gas = await RemixContract.methods.setNewValue(value).estimateGas();
      const result = await RemixContract.methods
        .setNewValue(value)
        .send({ from: account, gas });
      console.log(result);
    } catch (error) {
      console.error("Error setting value:", error);
    }
  };
  const addData = async (e) => {
    e.preventDefault();
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      const gas = await RemixContract.methods.addToValue(nvalue).estimateGas();
      const result = await RemixContract.methods
        .addToValue(nvalue)
        .send({ from: account, gas });
      console.log(result);
    } catch (error) {
      console.error("Error adding value:", error);
    }
  };

  const getDoubleValue = async () => {
    try {
      const doublevalue = await RemixContract.methods.getDoubledValue().call();
      setNewValue(doublevalue); 
    } catch (error) {
      console.error("Error getting double value:", error);
    }
  };

  const isevenValue = async ()=>{
    try{
      const iseven= await RemixContract.methods.isValueEven().call();
      setNewValue(iseven);;

    } catch (error){
      console.error("error getting true False ", error)
    }
  };

  const getValue = async () => {
    try {
      const currentValue = await RemixContract.methods.getNewValue().call();
      setNewValue(currentValue);
    } catch (error) {
      console.error("Error getting Value:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1>Double Your value</h1>
        <form onSubmit ={setValue}>
          <label>
            enter the value to set :
            <input
            type="text"
            name="value"
            value={value}
            onChange={(e) => setNewValue(parseInt(e.target.value, 10))}
/>
          </label>
          <input  className="set-value-button" type="submit" value="Set Value"/>
        </form>
        <br/>
        <form onSubmit ={addData}>
          <label>
            enter the value to add :
            <input
            type="text"
            name="value"
            value={nvalue}
            onChange={(e) => addToValue(parseInt(e.target.value, 10))}
/>
          </label>
          <input  className="set-value-button" type="submit" value="Add Value"/>
        </form>
        <br/>
        <button onClick={getValue} type ="button">
          Get Value
        </button>

        <button onClick={getDoubleValue} type= "button">
          Get Double Value
        </button>
        <button onClick={isevenValue} type = "button">
          Check the Value is even or not
        </button>

      </header>
    </div>
  );
}

export default App;