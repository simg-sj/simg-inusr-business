require('dotenv').config({ path: '../.env' });
const AWS = require('aws-sdk');


const s3 = new AWS.S3({
    accessKeyId : process.env.AWS_ACCESS_KEY,
    secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
    region : process.env.region
})

module.exports = s3;


