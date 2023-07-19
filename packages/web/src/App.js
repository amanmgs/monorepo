import { useState } from 'react';
import './App.css';
import { msg, logFxn, add, sub, mul, div, module } from 'shared';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [addresult, setAddresult] = useState();
  const [diffresult, setDiffresult] = useState();
  const [mulresult, setMulresult] = useState();
  const [modresult, setModresult] = useState();
  const [divresult, setDivresult] = useState();

  const calcullate = () => {
    if (num1 && num2) {
      const add_value = add(num1, num2);
      const sub_value = sub(num1, num2);
      const mul_value = mul(num1, num2);
      const mod_value = module(num1, num2);
      const div_value = div(num1, num2);
      setAddresult(add_value);
      setDiffresult(sub_value);
      setMulresult(mul_value);
      setModresult(mod_value);
      setDivresult(div_value);
    } else {
      alert('Please input number');
    }
  };

  return (
    <div className="App">
      <p className="header">{msg}</p>
      <p className="subheader">Input first number</p>
      <input
        type="number"
        className="inputContainer"
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Input number 1"
      />
      <p className="subheader">Input second number</p>
      <input
        type="number"
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Input number 2"
        className="inputContainer"
      />
      <p className="buttonclass" onClick={calcullate}>
        <p
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: 500,
            padding: 10,
          }}
        >
          Press and see result
        </p>
      </p>
      {addresult && (
        <div className="resultContainer">
          <div className="resultView">
            <p className="resulttext">Add</p>
            <p className="resulttext">Difference</p>
            <p className="resulttext">Multiply</p>
            <p className="resulttext">Module</p>
            <p className="resulttext">Division</p>
          </div>
          <div className="resultView">
            <p className="resulttext">{addresult}</p>
            <p className="resulttext">{diffresult}</p>
            <p className="resulttext">{mulresult}</p>
            <p className="resulttext">{modresult}</p>
            <p className="resulttext">{divresult}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
