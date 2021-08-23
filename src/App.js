import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index'
import { applyNumber, changeOperation, clearDisplay, saveMemory, memoryRecall, memoryClear } from './actions/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const applyNumberHandler = (number) => {
    dispatch(applyNumber(number));
  };
  
  const changeOperationHandler = (operation) => {
    dispatch(changeOperation(operation))
  };

  const clearDisplayHandler = () => {
    dispatch(clearDisplay());
  }

  const saveMemoryHandler = () => {
    dispatch(saveMemory());
  };

  const memoryRecallHandler = () => {
    dispatch(memoryRecall());
  };

  const memoryClearHandler = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => {saveMemoryHandler()}}/>
              <CalcButton value={"MR"} onClick={() => {memoryRecallHandler()}} />
              <CalcButton value={"MC"} onClick={() => {memoryClearHandler()}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {applyNumberHandler(1)}}/>
              <CalcButton value={2} onClick={() => {applyNumberHandler(2)}}/>
              <CalcButton value={3} onClick={() => {applyNumberHandler(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {applyNumberHandler(4)}}/>
              <CalcButton value={5} onClick={() => {applyNumberHandler(5)}}/>
              <CalcButton value={6} onClick={() => {applyNumberHandler(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {applyNumberHandler(7)}}/>
              <CalcButton value={8} onClick={() => {applyNumberHandler(8)}}/>
              <CalcButton value={9} onClick={() => {applyNumberHandler(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {changeOperationHandler("+")}}/>
              <CalcButton value={"*"} onClick={() => {changeOperationHandler("*")}}/>
              <CalcButton value={"-"} onClick={() => {changeOperationHandler("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {clearDisplayHandler()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
