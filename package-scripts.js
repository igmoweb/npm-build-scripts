module.exports = {
  scripts: {
    default: 'node index.js && nps poststart',
    server: {
      default: 'npm-run-all --parallel server:*',
      create: 'cross-var http-server dist/$npm_package_version -p $npm_package_config_port',
      launch: 'cross-var opn http://localhost:$npm_package_config_port'
    },
    server3: 'babel-node ./scripts/server3.js',
    watch: {
      default: 'npm-run-all --parallel watch:*',
      test: 'nps "test --watch"',
      lint: 'onchange **/*.js **/*.scss -- npm run lint'
    },
    test: 'nps pretest && cross-env BABEL_ENV=test mocha ./tests --require babel-register',
    test2: './scripts/test2.sh',
    test3: 'babel-node ./scripts/test3.js',
    coverage: {
      default: 'nyc --reporter=html npm run test && nps postcoverage',
      open: 'opn coverage/index.html'
    },
    postcoverage: 'rimraf .nyc_output',
    lint: {
      default: 'npm-run-all --parallel lint:*',
      js: 'eslint --env mocha --cache --fix ./',
      style: 'stylelint **/*.scss --syntax scss'
    },
    prebuild: 'cross-var rimraf ./dist/$npm_package_version',
    build: {
      default: 'nps prebuild && npm-run-all -s build:*',
      html: 'cross-var pug --obj data.json src/index.pug --out dist/$npm_package_version/',
      css: 'cross-var "node-sass scss/style.scss | cssmin > dist/$npm_package_version/style.css"',
      js: 'cross-var "mustache data.json src/index.mustache | uglifyjs > dist/$npm_package_version/index.js"'
    },
    build2: './scripts/build2.sh',
    build3: 'babel-node ./scripts/build3.js'
  }
};
