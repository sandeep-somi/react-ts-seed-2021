import { useEffect } from 'react'


const addCssClass = (element: any, className: string[]) => element.classList.add(className)
const removeCssClass = (element: any, className: string[]) => element.classList.remove(className)

export const useCssClass = (element: any, className: string[]) => {
  useEffect(() => {
    // className instanceof Array
    //   ? className.map(addCssClass.bind(this, element))
    //   : addCssClass(element, className)

    return () => {
      // className instanceof Array
      //   ? className.map(removeCssClass.bind(this, element))
      //   : removeCssClass(element, className)
    }
  }, [className])
}
