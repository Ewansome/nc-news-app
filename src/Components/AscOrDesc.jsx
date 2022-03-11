export default function AscOrDesc(props) {
  const { allArticles, setAllArticles } = props;
  return (
    <>
      <h3>Choose what order they return in:</h3>
      <div className="orderButtons">
        <button
          className="navButtons"
          onClick={() => {
            setAllArticles((allArticles) =>
              [...allArticles].sort((a, b) => (a.typeOf > b.typeOf ? 1 : -1))
            );
          }}
        >
          Ascending
        </button>
        <button
          className="navButtons"
          onClick={() => {
            setAllArticles((allArticles) =>
              [...allArticles].sort((a, b) => (a.typeOf < b.typeOf ? 1 : -1))
            );
          }}
        >
          Descending
        </button>
      </div>
    </>
  );
}
