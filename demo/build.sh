#!/bin/bash

# Pre-requisite: https://deno.land/x/bundler
$DENO_INSTALL/bin/bundler bundle index.html=index.html

cp ../build/editor.worker.bundle.js dist/.
cp ../build/74d8acf8740a672d6801.ttf dist/.
