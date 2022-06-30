
import './App.css';
import axios from "axios";
import * as React from 'react';
import { useEffect, useState } from "react";





function App() {
const [data, setData] = useState([])
const [firstList, setFirstList] = useState([])
const [secondList, setSecondList] = useState([])
const url = 'https://api.sightmap.com/v1/assets/1273/multifamily/units'
const options = {
  method: 'GET',
  headers: {
    'API-Key': '7d64ca3869544c469c3e7a586921ba37',
    
  }
};

async function engrain() {
    let res = await axios.get(url, options)
    setData(res.data.data)
    let data = res.data.data
   
    let areaOne = []
    let greaterThanOne= []
    for(let i = 0; i < data.length; i++){
        if(data[i].area === 1) {
        areaOne.push(data[i])
        
       
    }else {
        greaterThanOne.push(data[i])
    }
    setFirstList(areaOne)
    setSecondList(greaterThanOne)

    }

// console.log(areaOne)
// console.log(greaterThanOne)
}

useEffect(() => {
  engrain();
}, [])



// console.log(data)
//console.log(firstList, "firstlist")





  return (
 <div className="App">
    <header>Engrain Assessment</header>
    <h1>List 1</h1>
    <div className="one-container">
    {firstList.map((first) => {
      {console.log(first.area, "first")}
       return <div className="list-one">
       
       <p>Area: {first.area}</p>
       <p>Unit Number: {first.unit_number}</p>
       <p>Updated: {first.updated_at.split('T')[0]}</p>
       </div>
    })}
    </div>
    
    <h2>List 2</h2>
    <div className="two-container">
   {secondList.map((second) => {
     return <div className="list-two">
      <p>Area: {second.area}</p>
      <p>Unit Number: {second.unit_number}</p>
      <p>Updated: {second.updated_at.split('T')[0]}</p>
      </div>
    })}
    </div>
 </div>
  );
}

export default App;
