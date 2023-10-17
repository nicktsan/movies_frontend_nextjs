/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig

module.exports = {
    //reactStrictMode: true,
    env: {
        AWS_USER_POOL_ID: process.env.AWS_USER_POOL_ID,
        AWS_PROJECT_REGION: process.env.AWS_PROJECT_REGION,
        AWS_USER_POOL_APP_CLIENT_ID: process.env.AWS_USER_POOL_APP_CLIENT_ID,
        COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
        COGNITO_CLIENT_SECRET: process.env.COGNITO_CLIENT_SECRET,
        COGNITO_ISSUER: process.env.COGNITO_ISSUER,
        COGNITO_DOMAIN: process.env.COGNITO_DOMAIN
    }
}
