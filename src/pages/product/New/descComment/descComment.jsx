import  { useState } from 'react';
import './descComment.css';

const DescComment = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [comments, setComments] = useState([
    { name: 'Dũng', rating: 5, text: 'Đúng vàng ý có khác, đẹp ghê' },
    { name: 'Tuyên Hoàng', rating: 5, text: 'Chi tiết và rất sang trọng.' }
  ]);
  const [newComment, setNewComment] = useState({ name: '', rating: 5, text: '' });

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment({ name: '', rating: 5, text: '' });
  };

  return (
    <div>
      <button
        className={`accordion ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => togglePanel(0)}
      >
        Information & Description
      </button>
      <div className="panel" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
        <p>Lorem ipsum...</p>
      </div>

      <button
        className={`accordion ${activeIndex === 1 ? 'active' : ''}`}
        onClick={() => togglePanel(1)}
      >
        Comment
      </button>
      <div className="panel" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
        <div className="comments-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p><strong>{comment.name}:</strong> {'★'.repeat(comment.rating)}</p>
              <p>{comment.text}</p>
            </div>
          ))}
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              name="name"
              value={newComment.name}
              onChange={handleCommentChange}
              placeholder="Tên của bạn"
              required
            />
            <select
              name="rating"
              value={newComment.rating}
              onChange={handleCommentChange}
              required
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <textarea
              name="text"
              value={newComment.text}
              onChange={handleCommentChange}
              placeholder="Viết bình luận của bạn"
              required
            />
            <button type="submit">Viết bình luận</button>
          </form>
        </div>
      </div>

      <button
        className={`accordion ${activeIndex === 2 ? 'active' : ''}`}
        onClick={() => togglePanel(2)}
      >
      Support Service
      </button>
      <div className="panel" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
        <p>Lorem ipsum...</p>
      </div>
    </div>
  );
};

export default DescComment;
