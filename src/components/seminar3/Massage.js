import { PropTypes } from "prop-types";
export default function Message({ text, time, author, themeColor }) {
  return (
    <div className={themeColor}>
      <h4>Author{text}</h4>
      <p>{author}</p>
      <p>Post time: {time}</p>
    </div>
  );
}
Message.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
