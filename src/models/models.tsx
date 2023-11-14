


export interface IItem {
    id: number,
    type: string,
    name: string,
    price: number,
    imgSrc: string,
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
    name: string
  }