import { writeFileSync } from 'fs'
import detectIndent from 'detect-indent'
import pkg, { file } from './package.js'

export default () => {
  const indent = detectIndent(file).indent || 2
  writeFileSync(
    'package.json',
    JSON.stringify(pkg, null, indent) + '\n'
  )
}
