/**
 * Utility function for automatically updating sitemap.xml lastmod dates
 * Run this script before deployment to update all lastmod dates to current date
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseStringPromise, Builder } from 'xml2js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to sitemap.xml file
const sitemapPath = path.join(__dirname, '../../public/sitemap.xml');

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Update the sitemap lastmod dates
const updateSitemapLastmod = async () => {
  try {
    // Read sitemap file
    const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
    
    // Parse XML to JS object
    const result = await parseStringPromise(sitemapXml);
    
    // Get current date
    const currentDate = getCurrentDate();
    
    // Update lastmod dates for all URLs
    if (result.urlset && result.urlset.url) {
      result.urlset.url.forEach(url => {
        if (url.lastmod) {
          url.lastmod[0] = currentDate;
        }
      });
    }
    
    // Convert back to XML
    const builder = new Builder();
    const updatedXml = builder.buildObject(result);
    
    // Write updated XML back to the file
    fs.writeFileSync(sitemapPath, updatedXml, 'utf8');
    
    console.log('✅ Sitemap lastmod dates updated successfully to', currentDate);
  } catch (error) {
    console.error('❌ Error updating sitemap lastmod dates:', error);
  }
};

// Execute the update function
updateSitemapLastmod();
