/**
 * Created by adron on 10/29/14.
 * Description: Test to verify the SDK is installed and the
 *    security information is available for the SDK to use.
 */

var should = require("should"),
  AWS = require("aws-sdk"),
  awsRegion = "us-west-2",
  sqs = {};

describe("When trying out this sample application in AWS you", function () {
  "use strict";

  before(function () {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: awsRegion
    });
    sqs = new AWS.SQS();
  })

  it("should have an environment variable set for AWS_ACCESS_KEY_ID", function () {
    console.log(process.env.AWS_ACCESS_KEY_ID);
    process.env.AWS_ACCESS_KEY_ID.should.exist;
  });

  it("should have an environment variables set for AWS_SECRET_KEY", function () {
    console.log(process.env.AWS_SECRET_KEY);
    process.env.AWS_SECRET_KEY.should.exist;
  })

  it("should have the AWS Access Key set in the AWS config", function () {
    var config = AWS.config;
    config.credentials.accessKeyId.should.equal(process.env.AWS_ACCESS_KEY_ID);
    config.credentials.secretAccessKey.should.equal(process.env.AWS_SECRET_KEY);
  })

  it("should have the AWS region set to us west 2", function () {
    AWS.config.region.should.equal(awsRegion);
  })

});
