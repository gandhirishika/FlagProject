import React from 'react'

const Card = ({capital,name,region,img,population}) => {
    console.log(capital,"cap");
    console.log(name,"name");
    console.log(region,"reg");
  return (
    <div className='bg-white-300 text-xl p-4 m-2 border-3 rounded-xl shadow-lg'>
      <img src={img}alt="loading"/>
      
        <h1 className='text-bold'>{name}</h1> 
      <h1>Capital : {capital[0]}</h1>
      <h1>Region : {region}</h1>
      <h1>Population : {population}</h1>
    </div>
  )
}

export default Card
