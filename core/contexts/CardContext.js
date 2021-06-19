  
import { makeObservable, observable, action } from 'mobx'
import { createContext } from 'react'

export class cardContext {
  content = []
  isLike = false

  constructor() {
    makeObservable(this, {
      content: observable,
      isLike: observable,
      setState: action.bound,
    })

  }

  setState = (key, value) => {
    this[key] = value
  }
}

export const CardContext = createContext(new cardContext())