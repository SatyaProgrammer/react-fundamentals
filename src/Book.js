const Book = (props) => {
  const { img, title, author, getBook, id, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <button onClick={() => getBook(id)}>get book</button>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
