import {homedir} from 'os'
import {join} from 'path'

export const getStreamLocation = (id: string) => join(homedir(), '.blitz', `${id}.txt`)
