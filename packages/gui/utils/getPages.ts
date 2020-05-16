import glob from 'fast-glob'

export const getPages = async (path: string) => {
  const entries = await glob('app/**/*.tsx', {cwd: path})
  return entries.filter((route) => route.includes('page'))
}
