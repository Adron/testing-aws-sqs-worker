# Testing AWS SQS Web App

## Description:
Amazon SQS Sample Web App in Node.js using Hapi.js, the AWS SDK and other libraries.
## Key Technologies:

![AWS Elastic Beanstalk Worker](https://raw.githubusercontent.com/Adron/testing-aws-sqs-site/master/working-collateral/png/Deployment-&-Management_Elastic-Beanstalk_100x100.png)
***AWS Elastic Beanstalk Worker***

AWS Elastic Beanstalk is a service used to deploy and scale web application and services. In this particular example I'll be using Node.js for all the work, but other options are available such as Java, .NET, PHP, Python, Ruby and even anything you can stick in a Docker Container. Simply put, you can run whatever you need in Beanstalk and gain all the advantages of the virtualized services and scaling of the toolset.

The worker feature that I'll be using in this how-to, referred to by AWS as Worker Tiers, is setup to handle background tasks at scale. Think of things like doing database cleanup, setting action flags, events, firing triggers or simply sending an email notification. The worker tier that I'll be using, again with Node.js, will simple be there to process messages that I'll put into the queue.

![AWS Simple Queue Service (SQS)](https://raw.githubusercontent.com/Adron/testing-aws-sqs-site/master/working-collateral/png/Amazon-SQS_100x100.png)
***AWS Simple Queue Service (SQS)***

AWS Simple Queue Service, or SQS for short, is a distributed and scalable hosted queue service for storing messages that need to be reliably available between systems. By using SQS I can then create decoupled components of an application that are autonomous of each other in execution. This provides more options around scaling up or scaling down particular workloads, apps and services throughout the application ecosystem that I've built.

For more information on AWS SQS check out this video series by Evan Brown or LinkedIn @ [Evan Brown](https://www.linkedin.com/pub/evan-brown/12/ab5/32b).

* [AWS SQS Part 1](https://www.youtube.com/watch?v=rsg4YI4mljg)
* [AWS SQS Part 2](https://www.youtube.com/watch?v=IuwfVX52PV8)
* [AWS SQS Part 3](https://www.youtube.com/watch?v=DrRr-JgdgzE)
* [AWS SQS Part 4](https://www.youtube.com/watch?v=jSVY-SVcCAM)

***AWS Identity and Access Management Permissions (IAM)***

When setting up a worker role with Elastic Beanstalk, certain permissions need set to CloudWatch and Elastic Beanstalk can interoperate. To set the permissions an [IAM Role needs to be set for the Worker Environment Tiers](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.roles.aeb.html#AWSHowTo.iam.policies.actions.worker). For a high level view of IAM check out the [AWS IAM Page](http://aws.amazon.com/iam/). For this particular project the specific feature of IAM that is needed is the [IAM Roles](http://aws.amazon.com/iam/details/manage-roles/).
