#!/bin/bash -e
npx lerna run --scope taktische-zeichen-core build
node packages/cli/bin/taktisches-zeichen.js "$@" > tz.svg
