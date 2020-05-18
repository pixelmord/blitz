/* This is related to the way we run commands in the GUI. The first thing
I tried was to use `child_process` everywhere, and then capture that output
to a log file. However, this solution is unfortunately a little hit-and-miss.
Instead, I’ve decided we can just run everything directly, e.g.:

```
await dev({
  rootFolder: project.path,
  port: 3000,
  hostname: 'localhost',
})
```

Sadly this means that there’s no good way to record log output, aside from
rewriting much of the server modules. As a proxy, this reads the filesystem, 
and returns an estimation of the progress of whatever command is being run.

N.B. If anyone can figure out how to get `child_process` working reliably,
a PR would be very welcome. I’ve left some useful code to get started with
in this gist: https://gist.github.com/merelinguist/b5e4c20f598bc4a0c0b19c151c581b6c.
*/

import {promises} from 'fs'

import {CREATING_FILES, DONE, INSTALLING_DEPS, RETRIEVING_DEPS, UNKNOWN} from 'utils/status'

const getCreateProjectStatus = async (path: string) => {
  const files = await promises.readdir(path)

  if (!files) {
    return CREATING_FILES
  } else if (!files.includes('node_modules')) {
    return RETRIEVING_DEPS
  } else if (!files.includes('yarn.lock')) {
    return INSTALLING_DEPS
  } else if (files.includes('yarn.lock')) {
    return DONE
  }

  return UNKNOWN
}

export default getCreateProjectStatus
