import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from './carbon.jpg';

const BannerText = () => <h1>Merative Support Documentation</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
