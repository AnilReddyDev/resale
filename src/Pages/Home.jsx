import React from 'react'
import TicketCards from '../Components/TicketCards'

export default function Home() {
  return (
    <div className="w-full h-screen flex bg-darkgray">
      <h1>Tickets</h1>
      <TicketCards/>
    </div>
  )
}
