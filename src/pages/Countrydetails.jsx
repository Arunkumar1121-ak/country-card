import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Countrydetails = () => {
  const { name } = useParams();
  const [countrydata, setcountrydata] = useState({})
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true`)

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcountrydata(data[0]);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [name])

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='flex flex-col justify-center gap-4 items-center text-center'>
      <h2 className='font-bold text-2xl'> {countrydata.name.common} </h2>
      <img src={countrydata.flags.svg} className='w-96' alt="" />
      <p><b>Capital</b>: {countrydata.capital[0]}</p>
      <p><b>Region</b>: {countrydata.region}</p>
      <p><b>population</b>: {countrydata.population}</p>

    </div>
  )
}

export default Countrydetails