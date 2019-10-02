import React, {useCallback, useRef} from 'react'
import honkify from './honkify';

const useHonk = () => {
  const ref = useRef(null);
  const dehonk = useRef(null);
  const setRef = useCallback(node => {
    if (ref.current && dehonk.current) {
      dehonk();
    }
    
    if (node) {
      dehonk.current = honkify(node);
    }
    
    // Save a reference to the node
    ref.current = node
  }, [])
  
  return [setRef]
}

export default useHonk;
