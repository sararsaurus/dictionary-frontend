export function MeaningsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMeaning(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Enter a word!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="word" type="text" />
        </div>
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}
