import { useState } from "react";

export default function Commenter(props) {
  const { setComments } = props;
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      comment,
      Author: "weegembump",
    };
    setComments((currentComments) => {
      return [newComment, ...currentComments];
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Write you're own comment:
        <input type="text" value={comment} onChange={handleChange} />
      </label>
      <button type="submit">Submit comment</button>
    </form>
  );
}
