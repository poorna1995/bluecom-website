module.exports = {
	siteUrl: "https://bluecom.ai",
	generateRobotsTxt: true, // (optional)
	exclude: ["/server-sitemap.xml"],
	robotsTxtOptions: {
		additionalSitemaps: [
			"https://bluecom.ai/server-sitemap.xml", // <==== Add here
		],
	},
	// ...other options
};
