import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

function App() {

  const [state, setState] = useState([{ nama: 'dummy' }])
  const [list, setList] = useState([])
  const [num, setNum] = useState(0)

  function getData() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setState(res.data))
      .catch(err => console.log(err))
  }

  // search
  const handleChange = (e) => {
    // console.log(e.target.value)
    if (e.target.value == "") {
      return setList([])
    }

    const data = state.filter((item) => {
      return (
        item.name.toLowerCase().match(e.target.value.toLowerCase())
      )
    })

    setList(data)
  }

  useEffect(() => {
    getData()
    return (
      setState([{ nama: 'dummy' }])
    )
  }, [])

  return (
    <div className="App">
      <div>
        {state && state.map((data, index) => {
          return (
            <li key={index}>{data.name}</li>
          )
        })}
      </div>
      <ul>
        <li>{num}</li>
        <li><button onClick={() => setNum(num + 1)}>Incres</button>
          <button onClick={() => setNum(num - 1)}>Decres</button></li>
        <li><button onClick={() => setNum(0)}>Clear</button></li>
      </ul>
      <div>
        <input placeholder="search" onChange={handleChange} />
        <ul>
          {list && list.map((data, index) => {
            return (
              <li key={index}>{data.name}</li>
            )
          })}
        </ul>
      </div>
    </div >
  );
}

export default App;
