import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import { lessons } from "./data/lessons";

function App() {
  const [page, setPage] = useState("home");
    const [currentWord, setCurrentWord] = useState(0);

      const lesson = lessons[0];

        const speak = (text) => {
            const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = "it-IT";
                    utterance.rate = 0.85;
                        speechSynthesis.speak(utterance);
                          };

                            const startLesson = () => {
                                setCurrentWord(0);
                                    setPage("lesson");
                                      };

                                        if (page === "lesson") {
                                            return (
                                                  <div className="app">
                                                          <Lesson
                                                                    lesson={lesson}
                                                                              currentWord={currentWord}
                                                                                        onSpeak={speak}
                                                                                                />

                                                                                                        <div className="card">
                                                                                                                  <button
                                                                                                                              className="primary"
                                                                                                                                          onClick={() =>
                                                                                                                                                        setCurrentWord((prev) =>
                                                                                                                                                                        prev < lesson.words.length - 1 ? prev + 1 : prev
                                                                                                                                                                                      )
                                                                                                                                                                                                  }
                                                                                                                                                                                                            >
                                                                                                                                                                                                                        Következő ➡
                                                                                                                                                                                                                                  </button>

                                                                                                                                                                                                                                            <br /><br />

                                                                                                                                                                                                                                                      <button
                                                                                                                                                                                                                                                                  className="start"
                                                                                                                                                                                                                                                                              onClick={() => setPage("home")}
                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                    ⬅ Vissza a főoldalra
                                                                                                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                    return <Home onStartLesson={startLesson} />;
                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                    export default App;