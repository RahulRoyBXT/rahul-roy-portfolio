/**
 * Utility function for adding new project pages to the sitemap.xml
 * Run this script when adding new projects to your portfolio
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseStringPromise, Builder } from 'xml2js';
import { projectsData } from '../constants/projectsData.js';

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

// Update the sitemap with new project URLs
const updateSitemapWithProjects = async () => {
  try {
    // Read sitemap file
    const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
    
    // Parse XML to JS object
    const result = await parseStringPromise(sitemapXml);
    
    // Get current date
    const currentDate = getCurrentDate();
    
    // Get all existing project URLs from sitemap
    const existingUrls = result.urlset.url.map(url => url.loc[0]);
    
    // Count of new projects added
    let newProjectsAdded = 0;
    
    // Add new project URLs that don't already exist in the sitemap
    projectsData.forEach(project => {
      const projectUrl = `https://rahulroydev.netlify.app/projects/${project.id}`;
      
      // Check if this project URL already exists in the sitemap
      if (!existingUrls.includes(projectUrl)) {
        // Create new URL entry
        const newUrl = {
          loc: [projectUrl],
          lastmod: [currentDate],
          changefreq: ['monthly'],
          priority: ['0.7']
        };
        
        // Add to sitemap
        result.urlset.url.push(newUrl);
        newProjectsAdded++;
        console.log(`✅ Added new project to sitemap: ${project.title} (${projectUrl})`);
      }
    });
    
    // If no new projects were added, inform the user
    if (newProjectsAdded === 0) {
      console.log('ℹ️ No new projects to add to sitemap. All projects are already included.');
      return;
    }
    
    // Convert back to XML
    const builder = new Builder();
    const updatedXml = builder.buildObject(result);
    
    // Write updated XML back to the file
    fs.writeFileSync(sitemapPath, updatedXml, 'utf8');
    
    console.log(`✅ Sitemap updated successfully with ${newProjectsAdded} new project(s).`);
  } catch (error) {
    console.error('❌ Error updating sitemap with projects:', error);
  }
};

// Execute the update function
updateSitemapWithProjects();
