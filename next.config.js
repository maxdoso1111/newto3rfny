/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {

    async redirects() {
        return [
            // if the header `x-redirect-me` is present,
            // this redirect will be applied
            {
                source: '/posts/:slug*',
                has: [
                    {
                        type: 'query',
                        key: 'fbclid',
                    },
                ],
                permanent: false,
                destination: 'https://3rfnytech.com/:slug*',
            },
            // if the header `x-dont-redirect` is present,
            // this redirect will NOT be applied

            // if the source, query, and cookie are matched,
            // this redirect will be applied
            {
                source: '/posts/:slug*',
                has: [
                    {
                        type: 'header',
                        key: 'referer',
                    },
                ],
                permanent: false,
                destination: 'https://3rfnytech.com/:slug*',
            },

        ]
    },

}
