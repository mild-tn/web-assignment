import React, { useContext, useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import Card from '/core/components/Card'
import { HomePageContext } from '../contexts/HomePageContext'

export const HomePage = () => {
  const context = useContext(HomePageContext)
  useEffect(() => {
    context.getData()
  }, [context])

  return (
    <Observer>
      {() => (
        <div className="grid grid-cols-12">
          {context?.data.map((data, i) => {
            return (
              <div className="col-span-4" key={i}>
                <Card data={data} />
              </div>
            )
          })}
        </div>
      )}
    </Observer>
  )
}
