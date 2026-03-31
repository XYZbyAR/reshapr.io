import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function PostCard({item, direction}) {
  return (
    <Link to={item.permalink} className={styles.card}>
      <span className={styles.cardDirection}>{direction}</span>
      <span className={styles.cardTitle}>{item.title}</span>
      <span className={styles.cardArrow} aria-hidden>
        {direction === 'Previous' ? '←' : '→'}
      </span>
    </Link>
  );
}

export default function BlogPostPaginator({nextItem, prevItem}) {
  if (!nextItem && !prevItem) return null;

  return (
    <nav className={styles.root} aria-label="Read more">
      <div className={styles.grid}>
        {prevItem ? (
          <PostCard item={prevItem} direction="Previous" />
        ) : (
          <span />
        )}
        {nextItem && <PostCard item={nextItem} direction="Next" />}
      </div>
    </nav>
  );
}
