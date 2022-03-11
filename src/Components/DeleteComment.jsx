import { useParams } from "react-router-dom";
import * as api from "../api";

export default function DeleteComment(props) {
  const { commentId } = props;
  console.log(commentId);

  return (
    <button
      onClick={() => {
        api.deleteComment(commentId);
      }}
    >
      Delete comment
    </button>
  );
}
