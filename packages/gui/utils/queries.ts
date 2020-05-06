import {useQuery} from 'react-query'

import {endpoint} from './endpoint'
import {HomedirOutput} from './types'

export const useHomedir = () => {
  const getHomedir = async () => {
    const res = await fetch(`${endpoint}/homedir`)

    const data: HomedirOutput = await res.json()

    return data
  }

  return useQuery('works', getHomedir)
}
