
const admin = require('firebase-admin');

function syncToFirebase(dataArray) {
    console.log('got data:');
    console.log(dataArray);
}

module.exports = {
    syncToFirebase,
};