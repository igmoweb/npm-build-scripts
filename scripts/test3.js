import { exec } from 'shelljs'

const isWindows = process.platform === 'win32'
const babelEnv = isWindows ? 'set BABEL_ENV=test&&' : 'BABEL_ENV=test'

exec(`${babelEnv} mocha ./tests --require babel-register`)
