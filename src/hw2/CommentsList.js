import { useState } from "react";

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      <h1>Домашнее задание 2</h1>
      <h2>Список комментариев </h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <span>{comment.text}</span>
            <button onClick={() => handleDeleteComment(comment.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;