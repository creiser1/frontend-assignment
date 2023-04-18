import Dropdown from './Dropdown';
import React from 'react';

function App() {
  const ageList = [
  { value: "0-12" }, 
  { value: "13-17" }, 
  { value: "18-25" }, 
  { value: "26-35" }, 
  { value: "36-49" }, 
  { value: "50+" }
];

  const animalList = [
    { value: "Ape" },
    { value: "Bear" },
    { value: "Bird" },
    { value: "Bison" },
    { value: "Cat" },
    { value: "Chicken" },
    { value: "Cow" },
    { value: "Deer" },
    { value: "Dog" },
    { value: "Dolphin" },
    { value: "Duck" },
    { value: "Eagle" },
    { value: "Fish" },
    { value: "Horse" },
    { value: "Lion" },
    { value: "Lobster" },
    { value: "Monkey" },
    { value: "Pig" },
    { value: "Rabbit" },
    { value: "Shark" },
    { value: "Snake" },
    { value: "Spider" },
    { value: "Turkey" },
    { value: "Wolf" }
  ];

  return (
    <div className="App">
      <Dropdown title="Select your Age" list={ageList} singleSelect={true}/>
      <Dropdown title="Pick Your Favorite Animals" list={animalList} singleSelect={false} hasSearch={true}/>
    </div>
  );
}


export default App;

