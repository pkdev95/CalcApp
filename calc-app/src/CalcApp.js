import { useState } from 'react';
import { Button } from './Button';
import { Display } from './Display';
import './Calcapp.css';



export const CalcApp = () => {

  const [num, setNum] = useState('');
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();


  const handleClick = (e) => {
    if (num === 0) {
      setNum(e.target.value)
    } else {
      setNum(num + e.target.value);
    }

  }

  const handleClear = () => {
    setNum(0);
  }

  const handleoperator = (e) => {
    let operatorInput = e.target.value
    setOldNum(num);
    setOperator(operatorInput)
    setNum(0);
  }

  const calculate = () => {

    if (operator === "÷") {
      setNum(oldNum / num);

      
    } else if (operator === "+") {
      setNum(parseInt(oldNum) + parseInt(num));

    } else if (operator === "-") {
      setNum(oldNum - num);

    } else if (operator === "x") {

      setNum(oldNum * num);
    }
  }




  return (
    <div className='calcApp'>
      <Display num={num} style={{textAlign:'right'}} />
      <Button propriedades={[
        {
          label: "ac",
          className: "ac",
          onClick: handleClear
        },
        {
          label: "7",
          value: 7,
          onClick: handleClick
        },
        {
          label: '8',
          value: 8,
          onClick: handleClick
        },
        {
          label: "9",
          value: 9,
          onClick: handleClick
        },
        {
          label: "4",
          value: 4,
          onClick: handleClick
        },
        {
          label: "5",
          value: 5,
          onClick: handleClick
        },
        {
          label: "6",
          value: 6,
          onClick: handleClick
        },
        {
          label: "1",
          value: 1,
          onClick: handleClick
        },
        {
          label: "2",
          value: 2,
          onClick: handleClick
        },
        {
          label: "3",
          value: 3,
          onClick: handleClick
        },
        {
          label: "+",
          value: "+",
          onClick: handleoperator

        },
        {
          label: "-",
          value: '-',
          onClick: handleoperator

        },
        {
          label: "0",
          value: "0",
          onClick: handleClick


        },
        {
          label: "÷",
          value: "÷",
          onClick: handleoperator

        },
        {
          label: 'x',
          value: 'x',
          onClick: handleoperator

        },
        {
          label: "=",
          value: "=",
          className: "ig",
          onClick: calculate

        }
      ]} />
    </div>
  )



}