#!/usr/bin/env node
var optimist = require('optimist');

var argv = optimist.usage('Usage: $0 --interval [num] -serial [num] -lat [latitude] -lng [longitude]').
    options('i', {
        alias : 'interval',
        default : '30',
        describe: 'update interval'
    }).
    options('s', {
        alias : 'serial',
        default : '',
        describe: '013612345678'
    }).
    options('x', {
        alias : 'lat',
        default : '52.80113',
        describe: 'initial latitude'
    }).
    options('y', {
        alias : 'lng',
        default: '-1.63130',
        describe: 'initial longitude'
    }).
    options('h', {
        alias : 'help',
        describe: 'show help'
    }).argv;

console.log(argv);