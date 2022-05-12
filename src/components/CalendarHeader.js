import dayjs from 'dayjs'
import React, { useContext } from 'react'
import logo from '../assets/calendar.jpeg'
import GlobalContext from '../context/GlobalContext'
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext)
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1)
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1)
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    )
  }
  return (
    <header className='px-12 py-4 flex items-center'>
      <img src={logo} scale-110 alt='calendar' className='mr-2 w-12 h-12' />
      <h1 className='mr-12 text-xl slate-50 fond-bold'>Calendar</h1>
      <button onClick={handleReset} className='border rounded py-3 px-5 mr-12'>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className='material-icons-outlined cursor-pointer text-violet-50 mx-2'>
          chevron_left
        </span>
      </button>
      <h2 className='ml-96 text-3xl text-violet-50 font-bold'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
      <button onClick={handleNextMonth}>
        <span className='material-icons-outlined cursor-pointer text-violet-50 mx-2'>
          chevron_right
        </span>
      </button>
    </header>
  )
}
