import React from 'react'
import { RiHeartFill } from 'react-icons/ri'
import Image from 'next/image'

export const HeaderCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-between h-24">
      <div className="flex justify-between gap-2">
        <Image src={data?.logo} alt="logo" width="80px" height="80px" className="object-contain" />
        <div className="flex flex-col justify-between w-64">
          <div>
            <p className="leading-4 text-heading-5 font-prompt-semibold text-grapefruit">{data?.faculty?.name}</p>
            <p className="text-heading-6 text-warn-grey font-prompt-medium truncate ">{data?.name}</p>
          </div>
          <div>
            <p className="text-heading-6 text-warn-grey font-prompt-light">{data?.faculty?.university?.name}</p>
          </div>
        </div>
        <div className="w-9 text-heading-5 text-grapefruit">
          <button className="focus:outline-none">
            <RiHeartFill />
          </button>
        </div>
      </div>
      <div className="self-end w-full">
        <hr className="border bg-warn-grey border-warn-grey opacity-20" />
      </div>
    </div>
  )
}
