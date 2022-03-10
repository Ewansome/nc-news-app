import { Link } from "react-router-dom";

export default function ErrorPage(props) {
  const { status, msg } = props;
  return (
    <div>
      <Link to="/">Homepage</Link>
      <br></br>
      <h1>
        {status}: {msg || "oops I think youre lost"}
      </h1>
    </div>
  );
}
