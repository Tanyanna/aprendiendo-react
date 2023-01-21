export function TwitterTrendingCard({ category, name, tweetNumber }) {
  return (
    <article className="tw-trending-info">
      <span className="tw-trending-small-text">{category}</span>
      <strong>{name}</strong>
      <span className="tw-trending-small-text">{tweetNumber} Tweets</span>
    </article>
  );
}
