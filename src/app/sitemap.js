/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {
  const siteUrl = 'https://heartvalveexperts.com';
  const lastMod = new Date().toISOString();

  // 1️⃣ Static URLs
  const staticUrls = [
    { url: `${siteUrl}/`, priority: 1.0 },
    { url: `${siteUrl}/contact-us`, priority: 0.8 },
    { url: `${siteUrl}/cardiologist-mumbai`, priority: 0.8 },
    { url: `${siteUrl}/tavi`, priority: 0.8 },
    { url: `${siteUrl}/tmvr`, priority: 0.8 },
    { url: `${siteUrl}/teer`, priority: 0.8 },
    { url: `${siteUrl}/left-atrial-appendage-occlusion`, priority: 0.8 },
    { url: `${siteUrl}/blog`, priority: 0.8 },
    { url: `${siteUrl}/case-studies`, priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`, priority: 0.8 },
    { url: `${siteUrl}/balloon-mitral-valvotomy`, priority: 0.8 },
    { url: `${siteUrl}/ruptured-sinus-of-valsalva`, priority: 0.8 },
    { url: `${siteUrl}/tric-valve`, priority: 0.8 },
    { url: `${siteUrl}/device-closure/autism-spectrum-disorder`, priority: 0.8 },
    { url: `${siteUrl}/device-closure/patent-foramen-ovale`, priority: 0.8 },
    { url: `${siteUrl}/device-closure/ventricular-septal-defect`, priority: 0.8 },
    { url: `${siteUrl}/device-closure/patent-ductus-arteriosus`, priority: 0.8 },
    { url: `${siteUrl}/case-studies/first-asia-pacific-an2-tavi-via-carotid-artery`, priority: 0.64 },
  ];

  // 2️⃣ Dynamic Blog URLs
  let blogUrls = [];
  try {
    const blogRes = await fetch(
      `https://hclient.in/heartvalveexperts/wp-json/custom-api/v1/blogs?fields=slug&per_page=1000`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    );
    const blogData = await blogRes.json();

    if (blogData?.posts?.length) {
      blogUrls = blogData.posts.map((item) => ({
        url: `${siteUrl}/blog/${item.slug}`,
        lastModified: lastMod,
        priority: 0.8,
      }));
    }
  } catch (err) {
    console.error("Error fetching blog URLs:", err);
  }

  // 3️⃣ Dynamic Cardiologist URLs
  let cardiologistUrls = [];
  try {
    const cardioRes = await fetch(
      `https://hclient.in/heartvalveexperts/wp-json/custom-api/v1/cardiologists?fields=slug`,
      { next: { revalidate: 3600 } }
    );
    const cardiologistData = await cardioRes.json();

    if (Array.isArray(cardiologistData) && cardiologistData.length) {
      cardiologistUrls = cardiologistData.map((item) => ({
        url: `${siteUrl}/cardiologist-mumbai/${item.slug}`,
        lastModified: lastMod,
        priority: 0.8,
      }));
    }
  } catch (err) {
    console.error("Error fetching cardiologist URLs:", err);
  }

  // ✅ Combine everything
  return [...staticUrls, ...blogUrls, ...cardiologistUrls];
}
