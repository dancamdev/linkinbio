const sitemap = require("nextjs-sitemap-generator");
const path = require("path");
const fs = require('fs');

sitemap({
    baseUrl: "https://linkinbio.dancamdev.com",
    pagesDirectory: path.resolve(__dirname, "./.next/server/pages"),
    targetDirectory: path.resolve(__dirname, "./public"),
    ignoredExtensions: ["js", "map", "json"],
    ignoredPaths: ["404", "500", "favicon"],
}).then(() => {
    const sitemapDir = path.resolve(__dirname, "./public");

    const sitemap_content = fs.readFileSync(path.resolve(sitemapDir, "sitemap.xml"), "utf-8");

    fs.writeFileSync(path.resolve(sitemapDir, "sitemap.xml"), sitemap_content, 'utf-8');

    console.log("Sitemap generated");
});