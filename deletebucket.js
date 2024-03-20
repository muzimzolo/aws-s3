import { DeleteBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3client.js";

const params = {
    Bucket: "new-bucket-from-sdk-45645" 
};

export const run = async () => {
  try {
    const data = await s3Client.send(new DeleteBucketCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();