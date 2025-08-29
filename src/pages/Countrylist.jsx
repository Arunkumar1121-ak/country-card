import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Loading from '../components/Loading';




const Countrylist = () => {
  const [countrydatas, setcountrydatas] = useState([])
  const [isLoading , setLoading] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcountrydatas(data);
      }).finally(() => {
        setLoading(false);
      })
  }, []);
  if(isLoading){
    return <Loading />;
  }
  return (
    <div>
      <h1>Countries</h1>
      <div className="card-container grid grid-cols-4 gap-4">
        {countrydatas.map((country) => {
          return (
            <Link to={`/country/${country.name.common}`} className="card p-4 border rounded-xl shadow-md ">
              <img className='w-full h-32  object-contain' src={country.flags.svg} alt="" />
              <h2 className='mt-2'>{country.name.common}</h2>
            </Link>
          )
        })}

      </div>
    </div>
  )
}

export default Countrylist