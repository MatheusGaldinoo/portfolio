export function ClosingStatement() {
  return (
    <section className="closing-statement" aria-labelledby="closing-line">
      <h2
        className="container closing-headline"
        id="closing-line"
        data-reveal-02="chars"
        data-reveal-from-color="#0D0E0E"
        data-scroll="scrub"
        style={{ visibility: 'hidden' }}
      >
        <span>O código começa</span>
        <br />
        <em>com uma pergunta.</em>
      </h2>
    </section>
  );
}
