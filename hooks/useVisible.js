import { useEffect, useState } from 'react'

/*
 * Make threshold for params
 */
const useVisible = ({ visorRef, threshold }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const { current } = visorRef
    const callbackFunction = (entries) => {
      const [entry] = entries

      if (entry.isIntersecting) setVisible(entry.isIntersecting) //Sí esta en pantalla, pone el estado en true, de lo contrario, lo pone en false
    }

    const options = {
      //Configuraciones del intersection observer
      root: null,
      rootMargin: '0px',
      threshold: threshold || 0.5
    }

    const observer = new IntersectionObserver(callbackFunction, options) //Creamos la instancia del intersection observer
    if (current) observer.observe(current) //Sí tenemos al visor, lo observamos

    return () => {
      //Debemos desobservar si salimos del componente
      if (current) observer.disconnect()
    }
  }, [visorRef])

  return { visible }
}

export default useVisible
