import {useEffect, useState} from 'react'
import {canUseDOM} from 'utils/canUseDom'
import {managedEventListener} from 'utils/managedEventListener'

export const useWindowSize = (): Readonly<[number, number]> => {
  const [size, setSize] = useState<Readonly<[number, number]>>(
    canUseDOM ? [window.innerWidth, window.innerHeight] : [0, 0],
  )

  useEffect(
    () =>
      managedEventListener(window, 'resize', () => {
        setSize([window.innerWidth, window.innerHeight])
      }),
    [],
  )

  return size
}
