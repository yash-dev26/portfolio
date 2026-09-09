/**
 * Portfolio profile data - Yashwardhan Singh (@yash-dev26)
 *
 * Composes the individual data modules below into the single `profileData`
 * object every component imports. Edit the module for the section you want
 * to change (personal.js, techStack.js, experience.js, projects.js,
 * certifications.js) rather than this file.
 */

import { personal, socialLinks } from './personal';
import { heroStats } from './stats';
import { techCategories, techStack } from './techStack';
import { experiences } from './experience';
import { projects } from './projects';
import { certifications } from './certifications';

export const profileData = {
  personal,
  socialLinks,
  heroStats,
  techCategories,
  techStack,
  experiences,
  projects,
  certifications,
};
