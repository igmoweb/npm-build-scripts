import { rm, exec } from 'shelljs'

const pkgVersion = process.env.npm_package_version;

rm( '-rf',  `./dist/${pkgVersion}` );
exec( `pug --obj data.json src/index.pug --out dist/${pkgVersion}`);
exec( `node-sass scss/style.scss | cssmin > dist/${pkgVersion}/style.css`);
exec( `mustache data.json src/index.mustache | uglifyjs > dist/${pkgVersion}/index.js`);
