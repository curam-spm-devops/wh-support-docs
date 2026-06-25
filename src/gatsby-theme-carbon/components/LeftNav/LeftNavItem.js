import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import cx from 'classnames';
import useNetwork from 'react-use/lib/useNetwork';

import {
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react';

import * as styles from 'gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss';

import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import usePathprefix from 'gatsby-theme-carbon/src/util/hooks/usePathprefix';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';

export const SERVICE_WORKER_UPDATE_FOUND = 'GTC-ServiceWorkerUpdateFound';

const LeftNavItem = (props) => {
  const { items, category, hasDivider } = props;
  const { toggleNavState } = useContext(NavContext);
  const { isServiceWorkerEnabled } = useMetadata();
  const isOnline = useNetwork();

  const handleClick = (event, to) => {
    toggleNavState('leftNavIsOpen', 'close');
    if (isServiceWorkerEnabled) {
      if (isOnline && window[SERVICE_WORKER_UPDATE_FOUND] === true) {
        event.preventDefault();
        window.location.href = to;
      }
    }
  };

  const pathPrefix = usePathprefix();

  return (
    <Location>
      {({ location }) => {
        const pathname = pathPrefix
          ? location.pathname.replace(pathPrefix, '')
          : location.pathname;

        const isActive = items.some(
          (item) => item.path.split('/')[1] === pathname.split('/')[1]
        );

        if (items.length === 1) {
          const to = items[0].path;
          return (
            <>
              <SideNavLink
                onClick={(e) => handleClick(e, to)}
                icon={<span>dummy icon</span>}
                element={Link}
                className={cx({
                  [styles.currentItem]: isActive,
                })}
                isActive={isActive}
                to={to}>
                {category}
              </SideNavLink>
              {hasDivider && <hr className={styles.divider} />}
            </>
          );
        }
        return (
          <>
            <SideNavMenu
              icon={<span>dummy icon</span>}
              isActive={isActive} // TODO similar categories
              defaultExpanded={isActive}
              title={category}>
              <SubNavItems
                onClick={handleClick}
                items={items}
                pathname={pathname}
              />
            </SideNavMenu>
            {hasDivider && <hr className={styles.divider} />}
          </>
        );
      }}
    </Location>
  );
};

const normalizePath = (path) =>
  path && path.length > 1 ? path.replace(/\/$/, '') : path;

// Determine the single most specific item that matches the current pathname.
// An item matches when the pathname equals its path or is nested beneath it.
// When several items match (e.g. a section landing page and one of its
// children), only the longest (most specific) path is treated as active so
// that sibling items are not all highlighted at once.
const getActivePath = (items, pathname) => {
  const current = normalizePath(pathname);
  let activePath = null;
  items.forEach((item) => {
    const itemPath = normalizePath(item.path);
    if (current === itemPath || current.startsWith(`${itemPath}/`)) {
      if (!activePath || itemPath.length > activePath.length) {
        activePath = itemPath;
      }
    }
  });
  return activePath;
};

const SubNavItems = ({ items, pathname, onClick }) => {
  const activePath = getActivePath(items, pathname);
  return items.map((item, i) => {
    const hasActiveTab = normalizePath(item.path) === activePath;
    const to = item.path;
    return (
      <SideNavMenuItem
        to={to}
        onClick={(e) => onClick(e, to)}
        element={Link}
        isActive={hasActiveTab}
        key={i}>
        {item.title}
      </SideNavMenuItem>
    );
  });
};

export default LeftNavItem;
