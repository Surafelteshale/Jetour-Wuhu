// generate-sitemap.js
import fs from 'fs';
import { create } from 'xmlbuilder2';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1️⃣ Base site URL
const baseUrl = 'https://jetouret.com';

// 2️⃣ Static routes
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/models', priority: 0.9, changefreq: 'weekly' },
  { path: '/more', priority: 0.8, changefreq: 'monthly' },
  { path: '/all-events', priority: 0.8, changefreq: 'weekly' },
  { path: '/events-detail', priority: 0.7, changefreq: 'weekly' },
  { path: '/pages/ContactUs', priority: 0.8, changefreq: 'monthly' },
  { path: '/blogs/SafetyBlog', priority: 0.7, changefreq: 'monthly' },
  { path: '/blogs/ComfortBlog', priority: 0.7, changefreq: 'monthly' },
  { path: '/blogs/ShowroomBlog', priority: 0.7, changefreq: 'monthly' },
];

// 3️⃣ Dynamic product pages
const jetourModels = ['X70', 'X90', 'T-X'];
const dynamicRoutes = jetourModels.map(model => ({
  path: `/product-details/${model}`,
  priority: 0.9,
  changefreq: 'weekly'
}));

// Combine routes
const routes = [...staticRoutes, ...dynamicRoutes];

// 4️⃣ Generate XML sitemap
const urlset = create({ version: '1.0' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

routes.forEach(route => {
  const url = urlset.ele('url');
  url.ele('loc').txt(baseUrl + route.path);
  url.ele('lastmod').txt(new Date().toISOString());
  url.ele('changefreq').txt(route.changefreq);
  url.ele('priority').txt(route.priority);
});

// 5️⃣ Write sitemap to public folder
const xml = urlset.end({ prettyPrint: true });
fs.writeFileSync(path.join(__dirname, '../../public/sitemap.xml'), xml);

console.log('✅ Sitemap generated successfully!');
