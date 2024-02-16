import t from 'tap'

t.test('load package successfully', async t => {
  const { default: pkg, file } = await t.mockImport(
    '../dist/esm/package.js'
  )
  t.equal(pkg.name, 'tshy')
  t.equal(pkg.type, 'module')
  t.type(file, 'string')
})

t.skip('unsuccessfully fails build', async t => {
  const exits = t.capture(process, 'exit').args
  process.chdir(t.testdir())
  let failed = false
  await t.mockImport('../dist/esm/package.js', {
    '../dist/esm/fail.js': () => (failed = true),
  })
  t.strictSame(exits(), [[1]])
  t.equal(failed, true)
})
