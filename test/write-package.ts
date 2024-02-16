import { readFileSync } from 'fs'
import { resolve } from 'path'
import t from 'tap'
import detectIndent from 'detect-indent'

const cwd = process.cwd()
t.after(() => process.chdir(cwd))
process.chdir(t.testdir({}))
const { default: writePackage } = (await t.mockImport(
  '../dist/esm/write-package.js',
  {
    '../dist/esm/package.js': {
      default: {
        name: 'some package',
      },
      file: '{\n\t"name": "some package"\n}',
    },
  }
)) as typeof import('../dist/esm/write-package.js')

writePackage()

const file = readFileSync(
  resolve(t.testdirName, 'package.json'),
  'utf8'
)

t.strictSame(JSON.parse(file), { name: 'some package' })
t.equal(detectIndent(file).indent, '\t')
