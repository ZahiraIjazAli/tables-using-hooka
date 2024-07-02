import React from 'react'
import { useState } from 'react'
import "./App.css"
function App() {
  const [no1, setNo1] = useState(0)
  function click() {
    setNo1(no1 + 2)
  }
  function remove1() {
    setNo1(no1 * 0)
  }

  const [no2, setNo2] = useState(0)
  function three() {
    setNo2(no2 + 3)
  }
  function remove2() {
    setNo2(no2 * 0)
  }

  const [no3, setNo3] = useState(0)
  function four() {
    setNo3(no3 + 4)
  }
  function remove3() {
    setNo3(no3 * 0)
  }

  const [no4, setNo4] = useState(0)
  function five() {
    setNo4(no4 + 5)
  }
  function remove4() {
    setNo4(no4 * 0)
  }

  const [no5, setNo5] = useState(0)
  function six() {
    setNo5(no5 + 6)
  }
  function remove5() {
    setNo5(no5 * 0)
  }
  return (
 <div className='container'>
      
        <div >
        <h1>Tables 2-5</h1>
          <h1 className='head'>{no1}</h1>
          <button onClick={click}>Table of 2</button>
          <button onClick={remove1}>Reset</button>
        </div>
        <div >
          <h1 className='head'>{no2}</h1>
          <button onClick={three}>Table of 3</button>
          <button onClick={remove2}>Reset</button>
        </div>
        <div >
          <h1 >{no3}</h1>
          <button onClick={four}>Table of 4</button>
          <button onClick={remove3}>Reset</button>
        </div>
        <div >
          <h1 className='head'>{no4}</h1>
          <button onClick={five}>Table of 5</button>
          <button onClick={remove4}>Reset</button>
        </div>
        <div >
          <h1 className='head'>{no5}</h1>
          <button onClick={six}>Table of 6</button>
          <button onClick={remove5}>Reset</button>
        </div>
      </div>
    
  )
}

export default App