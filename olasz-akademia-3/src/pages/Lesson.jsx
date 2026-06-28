function Lesson({ lesson, currentWord, onSpeak }) {
      const word = lesson.words[currentWord];

        return (
            <div className="card">
                  <h1>🇮🇹 {lesson.title}</h1>

                        <h2>{word.italian}</h2>

                              <p>{word.hungarian}</p>

                                    <button onClick={() => onSpeak(word.italian)}>
                                            🔊 Kiejtés
                                                  </button>
                                                      </div>
                                                        );
                                                        }

                                                        export default Lesson;