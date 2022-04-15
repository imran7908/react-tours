import React, { useState } from 'react'
import "./components/styles.css"
import info from './components/data';
//import Loading from './components/Loading';
import Tours from './components/Tours';

const App = () => {
  //const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(info);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  // if(loading) {
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   )
  // }

  if(tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => setTours(info)}>refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App;
