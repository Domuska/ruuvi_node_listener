"use strict";

const ruuvi =  require('node-ruuvitag');
const syncToFirebase = require('./syncToFirebase').syncToFirebase;

const unSynced = [];
const syncFrequency = 600000; // 10 minutes
const syncFrequency2 = 10000;


ruuvi.on('found', tag=> {
    console.log('tag found');
    console.log(tag);
    tag.on('updated', update => {
        // console.log('got data');
        // console.log(update);
        unSynced.push(update);
    });
});

async function sendToDb() {
    const syncedIndex = unSynced.length;
    await syncToFirebase(unSynced);
    // remove the synced elements from arr
    unSynced.splice(0, syncedIndex);
    console.log('unSynced:');
    console.log(unSynced);
}

setInterval(sendToDb, syncFrequency2);