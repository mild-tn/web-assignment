  
import { makeAutoObservable, runInAction } from 'mobx'
import { createContext } from 'react'
import { apiTcas } from '../../../core/services/getTCASAsset'

export class homePageContext {
  data
  isLike

  constructor() {
    makeAutoObservable(this)

    this.data = []
    this.isLike = false
  }

  setState = (key, value) => {
    this[key] = value
  }

  getData = async () => {
    try {
      const response = await apiTcas.getTcasData()
      runInAction(() => {
        this.data = response.data
      })
    } catch (error) {
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่')
    }
  }
}

export const HomePageContext = createContext(new homePageContext())