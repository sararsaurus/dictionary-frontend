export function MeaningsIndex(props) {
  return (
    <div>
      <h1>Wrds</h1>
      {props.meanings.map((meaning) => (
        <div key={meaning.id}>
          <h2>{meaning.word}</h2>
          <h3>{meaning.first_part_of_speech}</h3>
          <p>{meaning.first_definition}</p>
          {/* <h3>{meaning.second_part_of_speech}</h3>
          <p>{meaning.second_definition}</p>
          <h3>{meaning.third_part_of_speech}</h3>
          <p>{meaning.third_definition}</p> */}
        </div>
      ))}
    </div>
  );
}
