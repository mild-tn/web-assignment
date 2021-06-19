import React from 'react'
import { HeaderCard } from './Header'
import { ContentCard } from './Content'
import { FooterCard } from './Footer'

const Card = ({ data }) => {
  return (
    <div className="pt-6 m-3 pl-5 pr-4 border-0 rounded shadow w-card bg-white-100">
      <HeaderCard data={data}/>
      <ContentCard data={data?.roundSeats} scoreType={data?.score?.scoreType.toLowerCase()} />
      <FooterCard score={data?.score}/>
    </div>
  )
}

export default Card
