// get the package.json data for the cwd

import { readFileSync } from 'fs'
import fail from './fail.js'
import { Package } from './types.js'

const readPkg = () => {
  try {
    const file = readFileSync('package.json', 'utf8')
    return {
      file,
      pkg: JSON.parse(file) as Package,
    }
  } catch (er) {
    fail('failed to read package.json', er as Error)
    process.exit(1)
  }
}

const { file, pkg } = readPkg()

export { file }
export default pkg
