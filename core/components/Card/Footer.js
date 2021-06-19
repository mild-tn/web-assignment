import React from 'react'

export const FooterCard = ({ score }) => {
  return (
    <div className="flex items-center justify-between h-14 font-prompt-light gap-x-2 text-dark-400">
      <div className="flex flex-col items-center">
        <p className="leading-4 text-heading-6">{score?.min.toLocaleString() || '-'}</p>
        <p className="text-body-3">คะแนนต่ำสุด {score?.year || '-'}</p>
      </div>
      <div className="px-8 text-center border-l border-r border-warn-grey">
        <p className="leading-4 text-heading-6">{score?.avg.toLocaleString() || '-'}</p>
        <p className="text-body-3">คะแนนต่ำเฉลี่ย {score?.year || '-'}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="leading-4 text-heading-6">{score?.max.toLocaleString() || '-'}</p>
        <p className="text-body-3">คะแนนสูงสุด {score?.year || '-'}</p>
      </div>
    </div>
  )
}
