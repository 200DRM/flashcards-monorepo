//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require("./with-nx.js");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
