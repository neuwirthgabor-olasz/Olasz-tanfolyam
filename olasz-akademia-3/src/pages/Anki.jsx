function Anki({ word, onSpeak }) {
      return (
          <main className="dashboard">
                <section className="card">
                        <h2>🧠 Anki ismétlés</h2>

                                <div className="word">
                                          <span>
                                                      <b>{word.italian}</b>
                                                                  <small>{word.hungarian}</small>
                                                                            </span>

                                                                                      <button onClick={() => onSpeak(word.italian)}>
                                                                                                  🔊
                                                                                                            </button>
                                                                                                                    </div>

                                                                                                                            <button className="primary">
                                                                                                                                      Tudtam
                                                                                                                                              </button>

                                                                                                                                                      <button className="start">
                                                                                                                                                                Nem tudtam
                                                                                                                                                                        </button>
                                                                                                                                                                              </section>
                                                                                                                                                                                  </main>
                                                                                                                                                                                    );
                                                                                                                                                                                    }

                                                                                                                                                                                    export default Anki;