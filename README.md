Prerequisites:

This project should be deployed along side https://github.com/nicktsan/stripe-webhook, https://github.com/nicktsan/movie-ownership-crud, https://github.com/nicktsan/movie_data_storage_crud, https://github.com/nicktsan/mux_webhook, https://github.com/nicktsan/stripe-webhook, and https://github.com/nicktsan/movie_authentication to be effective.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Currently deployed via Vercel at https://movies-frontend-nextjs.vercel.app/

## Deploy on AWS EKS
Prerequisites

Before continuing with this article, make sure you have the following:

    - An AWS account
    - Access to the EKS (Elastic Kubernetes Service) and ECR (Elastic Container Registry) services on AWS
    - The AWS CLI tool, we'll be using it to interact with the AWS services. Read the following tutorial to learn how to set up a new AWS account, configure users, and set up the AWS CLI: https://aws.amazon.com/getting-started/guides/setup-environment/
    - kubectl, the Kubernetes CLI tool
    - eksctl, a CLI tool that will simplify our work with Amazon EKS, abstracting away the complexity of the AWS CLI
    - Docker installed on your machine. We'll use it to build our app image and push it to the container registry

Step 1: Navigate to directory with the Dockerfile. Then, containerize the app with the command: 
$ docker compose build

This should build a local Docker image.

Step 2: Create a repository in AWS ECR. To create the repository, run the following command:
$ aws ecr create-repository --repository-name hello-world-app

Step 3: Authenticate Docker. To do this, you can run the following command with your region and account ID:
$ aws ecr get-login-password --region [region] | docker login --username AWS --password-stdin [aws_account_id].dkr.ecr.[region].amazonaws.com

Step 4: Tag the local image with the following command:
$ docker tag hello-world-app {aws account id}.dkr.ecr.{aws region}.amazonaws.com/hello-world-app:v1

Step 5: Push the local image to AWS ECR with the following command:
$ docker push {aws account id}.dkr.ecr.{aws region}.amazonaws.com/hello-world-app:v1
Confirm the image has been pushed to ECR with:
$ aws ecr list-images --repository-name hello-world-app

Step 6: Create a new EKS cluster with the following command:
$ eksctl create cluster --name hello-world-app --region {aws region}
Creating a new cluster might take a while. Once the command finishes executing, you should see in the terminal that it has created a new config file. In my case, it was at ~/.kube/config. This file contains the credentials necessary for kubectl to access our cluster.

Step 7: deploy the app to the cluster by calling kubectl apply
$ kubectl apply -f k8s/deployment.yaml 
$ kubectl apply -f k8s/service.yaml   
Confirm the deployment was successful with: 
$ kubectl get all

## Getting a secure connection and SSL/TL certificate with Cloudflare
Read the getting started guide on Cloudflare at https://developers.cloudflare.com/learning-paths/get-started/

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.