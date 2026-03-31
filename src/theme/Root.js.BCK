import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

/**
 * Map the current human-view URL to its agent-view equivalent.
 * Returns null when already inside the agent view (suppresses the toggle).
 */
function getAgentHref(pathname) {
  if (pathname.startsWith('/agent/')) return null;

  if (pathname.startsWith('/blog')) return '/agent/blog';

  if (pathname.startsWith('/docs/overview')) return '/agent/docs?s=overview';
  if (
    pathname.includes('docker-compose') ||
    pathname.includes('kubernetes') ||
    pathname.includes('hybrid-gateway')
  ) return '/agent/docs?s=how-to-guides';
  if (pathname.startsWith('/docs/tutorials')) return '/agent/docs?s=tutorials';
  if (pathname.startsWith('/docs/how-to-guides')) return '/agent/docs?s=how-to-guides';
  if (pathname.startsWith('/docs/explanation')) return '/agent/docs?s=explanation';
  if (pathname.startsWith('/docs/reference')) return '/agent/docs?s=reference';
  if (pathname === '/docs/demos' || pathname.startsWith('/docs/demos')) return '/agent/docs?s=demos';
  if (pathname.startsWith('/docs')) return '/agent/docs?s=overview';

  if (pathname.startsWith('/about')) return '/agent/about';
  if (pathname.startsWith('/community')) return '/agent/community';

  // Home and any other pages — fall back to blog agent view
  return '/agent/blog';
}

export default function Root({children}) {
  const {pathname} = useLocation();
  const agentHref = getAgentHref(pathname);

  return (
    <>
      {children}
      {agentHref && (
        <Link to={agentHref} className="agent-view-toggle" aria-label="Switch to agent view">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><circle cx="9.5" cy="14.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="14.5" cy="14.5" r="1.5" fill="currentColor" stroke="none"/><path d="M9.5 18.5h5"/></svg>
          Agent View
        </Link>
      )}
    </>
  );
}
