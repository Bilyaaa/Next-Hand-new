

export interface IItem {
    id: number,
    type: string,
    brand: string,
    price: number,
    imgSrc: any,
    imgSrc2: any,
    imgSrc3: any,
  }

  export interface IArr {
    items: IItem[]
  }

export interface IContext {
    items: IItem[],
    filteredItems: IItem[],
    setFilteredItems?: any
  
  }

export interface Itype  {
    type: string
  }
  
export interface IBrand {
    brand: string
  }