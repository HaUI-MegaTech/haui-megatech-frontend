/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    images: {
        domains: ['laptop88.vn', 'encrypted-tbn0.gstatic.com', 'variety.com', 'cdn.tgdd.vn', 'cdn.ankhang.vn', 'img.tgdd.vn', 'phucanhcdn.com',
            'www.tnc.com.vn', 'anphat.com.vn', 'cdn2.cellphones.com.vn', 'cdn.nguyenkimmall.com', 'chinhnhan.vn', 'nguyencongpc.vn', 'www.hp.com',
            'www.thegioididong.com','hangchinhhieu.vn','vitinhhoangvu.com','laptop4pro.vn','www.canhtoan.com','longbinh.com.vn',
            'quangninhcomputer.vn','dienmayxanh.com', 'product.hstatic.net', 'longbinh.com.vn',
            'res-console.cloudinary.com'
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
    },
}

module.exports = nextConfig
