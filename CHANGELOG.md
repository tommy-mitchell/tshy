# 1.11

- Add support for TypeScript 5.3

# 1.10

- Exclude sources from all builds via the `exclude` config
  setting.

# 1.9

- Set a custom tsconfig file via the `project` config setting.

# 1.8

- Support `"incremental": true` tsconfig option, making the build
  directory persistent if there are `*.tsbuildinfo` files
  present.
- Rename build directory from '.tshy-build-tmp' to '.tshy-build',
  since it's not temporary if incremental builds are used.
- Make the `selfLink` best-effort if not explicitly true or
  false.

# 1.7

- Prevent `verbatimModuleSyntax` ts config if building for both
  ESM and CommonJS, as it's fundamentally incompatible
- Add `--watch` option
- Add `--help` option

# 1.6

- put all imports in top-level imports field (2023-10-19)

# 1.5

- Add `tshy.imports` config

# 1.4

- Add `tshy.esmDialects` and `tshy.commonjsDialects` configs
- Use more complete package/import/export types defined by the
  `resolve-import` package

# 1.3

- Default `tshy.main = true` if a `'.'` CommonJS export is
  present

# 1.2

- Initial experimental support for `tshy.main`
- Add `tshy.selfLink` config to suppress the internal symlink

# 1.1

- Add support for local package imports/exports

# 1.0

- Initial version
