const cluster = require('cluster')
const os = require('os')
const path = require('path')
// const app

const numCPUS = os.cpus().length;

console.log('numCPU', numCPUS)

if (cluster.isMaster) {
    console.log(`master ${process.pid} is runing`)

    for (let i = 0; i < numCPUS; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })
} else {
}