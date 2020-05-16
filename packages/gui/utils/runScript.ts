import {WriteStream} from 'fs'

import spawn from 'cross-spawn'

export const runScript = (
  command: string,
  args: string[] | undefined,
  cwd: string,
  logStream: WriteStream,
  callback: (exitCode: number) => void,
) => {
  const child = spawn(command, args, {cwd})

  if (child.stdout) {
    child.stdout.setEncoding('utf-8')
    child.stdout.on('data', (data) => {
      logStream.write(data)
    })
  }

  if (child.stderr) {
    child.stderr.setEncoding('utf-8')
    child.stderr.on('data', (data) => {
      logStream.write(data)
    })
  }

  child.on('close', (exitCode) => {
    logStream.end()
    callback(exitCode)
  })
}
