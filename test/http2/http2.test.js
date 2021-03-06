'use strict'

const semver = require('semver')
const tap = require('tap')

if (semver.gt(process.versions.node, '8.8.0')) {
  require('./plain')
  require('./secure')
  require('./secure-with-fallback')
} else {
  tap.pass('Skip because Node version < 8.8')
  tap.end()
}
