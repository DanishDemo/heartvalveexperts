/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {
  const siteUrl = 'https://heartvalveexperts.com';

  // 1️⃣ Static URLs
  const staticUrls = [
    { url: "https://heartvalveexperts.com", lastModified: "2025-09-03T10:28:23+00:00", priority: 1.0 },
    { url: "https://heartvalveexperts.com/our-story", lastModified: "2025-09-03T10:28:23+00:00", priority: 0.8 },
    { url: "https://heartvalveexperts.com/career", lastModified: "2025-09-03T10:28:23+00:00", priority: 0.8 },
    { url: "https://heartvalveexperts.com/blog", lastModified: "2025-09-03T10:28:23+00:00", priority: 0.8 },
   
  ];

// 2️⃣ Dynamic Blog URLs (fixed)
let blogUrls = [];
try {
  const blogRes = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/blogs?fields=slug`);
  const blogData = await blogRes.json(); // array of blog objects
  blogUrls = blogData.map((item) => ({
    url: `${siteUrl}/blog/${item}`, // use slug directly
    lastModified: new Date().toISOString(), // fallback date
    priority: 0.8,
  })) || [];
} catch (err) {
  console.error("Error fetching blog URLs:", err);
}


// 3️⃣ Dynamic Podcast/Disease URLs (adjusted for array of slugs)
let diseaseUrls = [];
try {
  const diseaseRes = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/podcasts?fields=slug`);
  const slugs = await diseaseRes.json(); // This is an array of slugs
  diseaseUrls = slugs.map((item) => ({
    url: `${siteUrl}/videos-and-media-gallery/podcast/${item}`, // use slug here, not key
    lastModified: new Date().toISOString(), // fallback date
    priority: 0.8,
  }));
} catch (err) {
  console.error("Error fetching disease/podcast URLs:", err);
}

  // Combine all URLs
  return [
    ...staticUrls,
    ...blogUrls,
    ...diseaseUrls,
  ];
}