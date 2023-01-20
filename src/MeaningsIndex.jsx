export function MeaningsIndex(props) {
  return (
    <div>
      <h1>All Meanings</h1>
      {props.meanings.map((meaning) => (
        <div key={meaning.part_of_speech}>
          <h2>{meaning.part_of_speech}</h2>
          <p>{meaning.definition}</p>
        </div>
      ))}
    </div>
  );
}
