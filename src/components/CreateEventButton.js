import React, { useContext } from 'react'
import plusImg from '../assets/pencil.png'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext)
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className='border p-2 border-white	border-solid rounded-full flex items-center shadow-md bg-green-400 hover:bg-sky-700'
    >
      <img src={plusImg} alt='create_event' className='w-7 h-7' />
      <span className='pl-3 pr-7 text-white'> Create New Event</span>
    </button>
  )
}
