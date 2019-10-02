import { useCallback, useRef } from 'react';
import honkify from './honkify';

const useHonk = () => {
  const ref = useRef(null);
  const dehonk = useRef(null);
  const setRef = useCallback(node => {
    if (ref.current && dehonk.current) {
      dehonk();
      dehonk.current = null;
    }

    if (node) {
      dehonk.current = honkify(node);
    }
    ref.current = node;
  }, []);

  return [setRef];
};

export default useHonk;
