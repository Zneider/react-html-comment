import { useLayoutEffect as _useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? _useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
export const useLayoutEffect = useIsomorphicLayoutEffect
