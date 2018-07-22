- `lint:js`: `--cache` option will only lint changed files and `--env mocha` will avoid errors by global functions in Mocha.
- `test`: Uses Mocha with `babel-register` as requirement so it transpiles ES6 code.
- `watch:test`: Makes use of `--` to pass additional parameters to `npm run test`. `--watch` is passed in this example.
- `lint`: Runs in parallel `lint:js` and `lint:style` by using `lint:*` wildcard.
- `watch:lint`: A simple example to run linting when a scss or js file changes.
- `pretest`: Makes use of the `pre` prefix to run linting before testing.
- `coverage`: Generates a testing coverage
- `coverage:open`: It opens coverage in the browser.
- `postcoverage`: Makes use of the `post` suffix to remove temp files.
- `build:css, build:js and build:html`: Example to build with pipes. Use `$npm_package_version` variable
- `build`: Build everything with * wildcard. Use `$npm_package_version` variable.
- `server` scripts: Build & starts a server by using npm variables.
- `prepush`: Is triggered with the help of Husky package.

These packages are used to run different things under any system (Windows/Mac/Linux):
- `cross-env`: Define env variables
- `rimraf`: Delete folders
- `cross-var`: Reference npm package variables. Because some `build:*` tasks are using piping, we need to wrap the whole commands inside double quotes to make `cross-var` work.
- `opn-cli`: Open a URL in the browser

Switch to branch `with-nps` to see the tasks splitted in `package-scripts.js` by using `nps` package.
