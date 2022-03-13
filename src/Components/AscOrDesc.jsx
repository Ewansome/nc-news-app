import { useState } from "react";

export default function AscOrDesc(props) {
  const { setAllArticles } = props;
  const [disableAsc, setDisableAsc] = useState(false);
  const [disableDesc, setDisableDesc] = useState(false);
  return (
    <>
      <h3>Choose what order they return in:</h3>
      <div className="orderButtons">
        <button
          disabled={disableAsc}
          className="navButtons"
          onClick={() => {
            setDisableAsc(true);
            setDisableDesc(false);
            setAllArticles((allArticles) =>
              [...allArticles].sort((a, b) => (a.typeOf > b.typeOf ? 1 : -1))
            );
          }}
        >
          Ascending
        </button>
        <button
          disabled={disableDesc}
          className="navButtons"
          onClick={() => {
            setDisableDesc(true);
            setDisableAsc(false);
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
