import "./App.css";

function App() {
  return (
      <div className="app">

            <header className="hero">
                    <h1>🇮🇹 Gábor Olasz Akadémia</h1>
                            <p>Tanulj olaszul minden nap!</p>
                                  </header>

                                        <nav className="menu">
                                                <button>🏠 Főoldal</button>
                                                        <button>📚 Leckék</button>
                                                                <button>🧠 Anki</button>
                                                                        <button>📈 Haladás</button>
                                                                                <button>⚙️ Beállítások</button>
                                                                                      </nav>

                                                                                            <section className="card">
                                                                                                    <h2>🔥 Mai lecke</h2>
                                                                                                            <h3>1. lecke – Köszönések</h3>

                                                                                                                    <div className="word">
                                                                                                                              <span>Ciao</span>
                                                                                                                                        <button>🔊</button>
                                                                                                                                                </div>

                                                                                                                                                        <div className="word">
                                                                                                                                                                  <span>Buongiorno</span>
                                                                                                                                                                            <button>🔊</button>
                                                                                                                                                                                    </div>

                                                                                                                                                                                            <button className="start">
                                                                                                                                                                                                      ▶ Lecke indítása
                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                    </section>

                                                                                                                                                                                                                          <section className="card">
                                                                                                                                                                                                                                  <h2>📈 Haladás</h2>

                                                                                                                                                                                                                                          <div className="progress">
                                                                                                                                                                                                                                                    <div className="bar"></div>
                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                    <p>1 / 90 lecke kész</p>
                                                                                                                                                                                                                                                                          </section>

                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                export default App;