import { useEffect,useState } from "react";

export default function useWindowChange(threshold){
    let [rootWidth, setRootWidth] = useState(() => window.innerWidth);
    useEffect(() => {
        function handleResize() {
          setRootWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [rootWidth]);
    
    return rootWidth < threshold    
}