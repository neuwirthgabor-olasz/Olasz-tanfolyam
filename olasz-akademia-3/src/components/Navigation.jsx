function Navigation({ onNavigate }) {
      return (
          <nav className="menu">
                <button onClick={() => onNavigate("home")}>🏠 Főoldal</button>

                      <button onClick={() => onNavigate("lesson")}>
                              📚 Leckék
                                    </button>

                                          <button onClick={() => onNavigate("anki")}>
                                                  🧠 Ismétlés
                                                        </button>

                                                              <button onClick={() => onNavigate("progress")}>
                                                                      📈 Haladás
                                                                            </button>
                                                                                </nav>
                                                                                  );
                                                                                  }

                                                                                  export default Navigation;