import { exec } from 'shelljs'

const { npm_package_version: pkgVersion, npm_package_config_port: port } = process.env;

exec( `http-server dist/${pkgVersion} -p ${port}`, { async: true } );
exec( `opn http://localhost:${port}` );
