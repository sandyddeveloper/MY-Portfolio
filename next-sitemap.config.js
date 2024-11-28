module.exports = {
  siteUrl: "https://yourdomain.com", // Replace with your actual domain
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
