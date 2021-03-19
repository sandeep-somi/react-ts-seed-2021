import React, { Suspense, lazy } from 'react'
import Spinner from '../components/common/Spinner'


export function isChunkLoadingFailure(error: any) {
  return (
    error.toString() === 'SyntaxError: Unexpected token <' ||
    error.toString().indexOf('Loading chunk') >= 0
  )
}

export default (lazyLoadingFunc: any) => {
  const LazyLoadedComponent = lazy(lazyLoadingFunc)
  return (props: any) => (
    <Suspense fallback= {<Spinner />}>
      <LazyLoadedComponent { ...props } />
    </Suspense>
  )
}