const express = require("express");
require("dotenv").config();
const hpcc = require("@hpcc-js/comms")

const app = express();
const host = process.env.CLUSTER_URL;
const port = process.env.CLUSTER_PORT;

console.log(`${host}:${port}`);

const getJobs = async() =>{
    const wsService = new hpcc.WorkunitsService({ baseUrl:`${host}:${port}` });
    const jobs = await wsService.WUQuery({ LastNDays: 1, DateRB: 0 });
    console.log(jobs)
}

getJobs();

app.listen(3009, () =>{
    console.log('App  running at port 3009')
})