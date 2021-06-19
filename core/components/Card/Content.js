import React from 'react'
import Image from 'next/image'
import { Button } from '../Button'

export const ContentCard = ({ data, scoreType }) => {
  return (
    <>
      <div className="flex items-center mt-3 font-prompt-light">
        <p className="mr-6 text-heading-6 text-dark-400">รอบที่เปิด</p>
        {data.map((round, i) => (
          <div key={i} className="flex m-1 flex-col items-center justify-center rounded-full w-7 h-7 bg-greenish-teal">
            <p className="text-white">{round}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3">
        <p className="mr-6 text-body-2 font-prompt-semibold text-grapefruit">รอบที่ 4 : <span className="capitalize">{scoreType || '-'}</span></p>
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
    </>
  )
}
