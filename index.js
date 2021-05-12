'use strict';

const { GetObjectsCommand, S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');

const client = new S3Client({ region: 'us-west-2' });
const command = new ListObjectsV2Command({ Bucket: 'jessilambdabucket' });

exports.handler = async (event, context, callback) => {
  console.log('Event details:', JSON.stringify(event, undefined, 2));
  try {
    const data = await client.send(command);
    console.log('S3 bucket data:', data);
  } 
  catch (error) {
    console.log('there was an error retreiving data');
  }
}

