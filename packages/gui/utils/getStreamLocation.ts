import {homedir} from 'os'
import {join} from 'path'

export const getStreamLocation = (id: string, type: string) => join(homedir(), '.blitz', `${id}-${type}.txt`)
