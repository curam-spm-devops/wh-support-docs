import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Merative Support',
    href: 'https://merative.my.site.com/mysupport/s/',
  },
  {
    title: 'Cúram (SPM) support details',
    href: 'https://www.merative.com/support/curam',
  },
  {
    title: 'Integrated Care support details',
    href: 'https://www.merative.com/support/integrated-care',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;