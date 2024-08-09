import { useEffect, useState } from "react"


export const useImageSlider = ({images}) => {
    const [activeImg, setActiveImg] = useState(0)
    useEffect(()=> {
        const interval = setInterval(() => {
            setActiveImg((prevImg) => (prevImg + 1) % images.length);
          }, 4000);
          return () => clearInterval(interval);
    },[images.length])
  return {activeImg}
}
