"use strict";

const ruuvi =  require('node-ruuvitag');

ruuvi.on('found', tag=> {
    console.log('tag found');
    console.log(tag);
    tag.on('updated', update => {
        console.log('got data');
        console.log(update);
    });
});