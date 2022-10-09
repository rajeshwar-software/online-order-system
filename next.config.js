/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['goodtaste.fleksa.de', 'd1nfw7b4288zmf.cloudfront.net'],
	},
};

module.exports = nextConfig;
