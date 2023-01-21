export function TwitterCard({ children, title }) {
  return (
    <section className="tw-card">
      <h1 className="tw-title">{title}</h1>
      <div className="tw-content-card">{[children]}</div>
    </section>
  );
}
