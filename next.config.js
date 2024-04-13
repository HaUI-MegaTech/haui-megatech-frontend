/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    images: {
        domains: ['laptop88.vn', 'encrypted-tbn0.gstatic.com', 'variety.com', 'cdn.tgdd.vn'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
