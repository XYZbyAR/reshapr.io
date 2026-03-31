import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function Breadcrumb() {
  return (
    <nav className={styles.breadcrumb} aria-label="Blog navigation">
      <Link to="/blog" className={styles.breadcrumbBack}>
        <span className={styles.breadcrumbArrow} aria-hidden="true">←</span>
        Back to Blog
      </Link>
    </nav>
  );
}

export default function BlogPostItemWrapper(props) {
  const {isBlogPostPage} = useBlogPost();

  return (
    <>
      {isBlogPostPage && <Breadcrumb />}
      <OriginalBlogPostItem {...props} />
    </>
  );
}
