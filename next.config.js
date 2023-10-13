/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig

module.exports = {
    //reactStrictMode: true,
    env: {
        REACT_APP_SCAN_URL: process.env.REACT_APP_SCAN_URL,
    }
}
