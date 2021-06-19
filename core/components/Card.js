import React, { useContext } from 'react'
import { Observer } from 'mobx-react-lite'
import { RiHeartFill, RiHeartLine } from 'react-icons/ri'
import { BsAward } from 'react-icons/bs'
import { CardContext } from '../contexts/CardContext'
import Image from 'next/image'
import { Button } from './Button'

const Card = ({ data }) => {
  const context = useContext(CardContext)
  return (
    <div className="pt-6 m-3 pl-5 pr-4 border-0 rounded shadow w-card bg-white-100">
      <div className="flex flex-col justify-between h-24">
        <div className="flex justify-between gap-2">
          <Image src={data?.logo} alt="logo" width="80px" height="80px" className="object-contain" />
          <div className="flex flex-col justify-between w-64">
            <div>
              <p className="leading-4 text-heading-5 font-prompt-semibold text-grapefruit">{data?.faculty?.name}</p>
              <p className="text-heading-6 text-warn-grey font-prompt-medium">{data?.name}</p>
            </div>
            <div>
              <p className="text-heading-6 text-warn-grey font-prompt-light">{data?.faculty?.university?.name}</p>
            </div>
          </div>
          <div className="w-9 text-heading-5 text-grapefruit">
            <Observer>
              {() => (
                <button className="focus:outline-none" onClick={() => context.setState('isLike', !context.isLike)}>
                  {context.isLike ? <RiHeartFill />: <RiHeartLine />}
                </button>
              )}
            </Observer>
          </div>
        </div>
        <div className="self-end w-full">
          <hr className="border bg-warn-grey border-warn-grey opacity-20" />
        </div>
      </div>
      <div className="flex items-center mt-3 font-prompt-light">
        <p className="mr-6 text-heading-6 text-dark-400">รอบที่เปิด</p>
        {data.roundSeats.map((round, i) => (
          <div key={i} className="flex m-1 flex-col items-center justify-center rounded-full w-7 h-7 bg-greenish-teal">
            <p className="text-white">{round}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3">
        <p className="mr-6 text-body-2 font-prompt-semibold text-grapefruit">รอบที่ 4 : <span className="capitalize">{data?.score?.scoreType.toLowerCase() || '-'}</span></p>
        <Button>
          <p className="text-grapefruit font-prompt-medium text-body-3 mr-3">แก้ไขคะแนน</p>
          <Image src="/images/button_logo.png" alt="logo_button" width="16px" height="16px" />
        </Button>
      </div>
      <div className="grid items-center h-24 grid-cols-3">
        <div className="ml-7 text-heading-4">
          <Image src="/images/award.png" width="27px" height="35px" alt="award" />
        </div>
        <div className="col-span-2 text-right font-prompt-light text-dark-500">
          <p className="text-body-3">คะแนนของคุณคือ</p>
          <p className="leading-10 text-heading-3">23,453</p>
        </div>
      </div>
      <div className="flex items-center justify-between h-14 font-prompt-light gap-x-2 text-dark-400">
        <div className="flex flex-col items-center">
          <p className="leading-4 text-heading-6">{data?.score?.min.toLocaleString() || '-'}</p>
          <p className="text-body-3">คะแนนต่ำสุด {data?.score?.year || '-'}</p>
        </div>
        <div className="px-8 text-center border-l border-r border-warn-grey">
          <p className="leading-4 text-heading-6">{data?.score?.avg.toLocaleString() || '-'}</p>
          <p className="text-body-3">คะแนนต่ำเฉลี่ย {data?.score?.year || '-'}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="leading-4 text-heading-6">{data?.score?.max.toLocaleString() || '-'}</p>
          <p className="text-body-3">คะแนนสูงสุด {data?.score?.year || '-'}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
