import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        verificationCodeValidity: 300, //verification code validity default 1 hrs, now set to 300 seconds aka 5 min
        userPoolId: process.env.AWS_USER_POOL_ID,
        region: process.env.AWS_PROJECT_REGION,
        userPoolWebClientId: process.env.AWS_USER_POOL_APP_CLIENT_ID,
        forgotPassword: {
            // Limit password resets to 3 attempts per hrs
            deliveryLimit: 3,
            timeToLive: 60, // 60 minutes (1 hours)
        },
    },
})