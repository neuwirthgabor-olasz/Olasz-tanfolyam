function Home({ onStartLesson }) {
      return (
          <>
                <header className="hero">
                        <div className="badge">🇮🇹 90 napos olasz tanfolyam</div>
                                <h1>Gábor Olasz Akadémia</h1>
                                        <p>Tanulj olaszul naponta rövid, gyakorlati leckékkel.</p>
                                                <button className="primary" onClick={onStartLesson}>
                                                          ▶ Mai lecke indítása
                                                                  </button>
                                                                        </header>

                                                                              <main className="dashboard">
                                                                                      <section className="grid">
                                                                                                <div className="mini"><h3>📚 Leckék</h3><p>1 / 90 kész</p></div>
                                                                                                          <div className="mini"><h3>🧠 Anki</h3><p>5 kártya</p></div>
                                                                                                                    <div className="mini"><h3>🏆 XP</h3><p>25 pont</p></div>
                                                                                                                              <div className="mini"><h3>🔥 Sorozat</h3><p>1 nap</p></div>
                                                                                                                                      </section>

                                                                                                                                              <section className="card">
                                                                                                                                                        <h2>📈 Haladás</h2>
                                                                                                                                                                  <div className="progress"><div className="bar"></div></div>
                                                                                                                                                                            <p className="muted">Cél: használható társalgási olasz 90 nap alatt.</p>
                                                                                                                                                                                    </section>
                                                                                                                                                                                          </main>
                                                                                                                                                                                              </>
                                                                                                                                                                                                );
                                                                                                                                                                                                }

                                                                                                                                                                                                export default Home;