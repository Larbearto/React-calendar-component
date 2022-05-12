import React from 'react'
import Day from './Day'

export default function Month({ month }) {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5 bg-indigo-500 ring-offset-2 ring-2 ring-slate-700 max-h-96 max-w-7xl font-semibold rounded-lg border-4 border-solid  border-sky-500 ml-10 '>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
