import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Counter from "./components/counter";
import NavigationBar from "./components/navigationBar";
import GreySeparator from "./components/separator";
import TeamRegistration from "./components/teamregistration";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    applyDarkMode();
  }, [isDarkMode]);

  const applyDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <Container className={isDarkMode ? "dark-mode" : "light-mode"}>
      <NavigationBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <GreySeparator />

      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Container
              className="content-container"
              style={{
                boxShadow: isDarkMode
                  ? "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)"
                  : "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)",
              }}
            >
              <TeamRegistration isDarkMode={isDarkMode} />
            </Container>
          </Col>
          <Col xs={12} md={4}>
            <Container
              className="content-container"
              style={{
                boxShadow: isDarkMode
                  ? "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)"
                  : "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                nisi deserunt iusto corporis maiores eum. Voluptas corporis
                magnam quaerat cum placeat ullam in velit accusamus amet
                blanditiis repellat quidem, maiores beatae labore doloribus
                asperiores ex vero et. Nostrum ex soluta blanditiis fugit.
              </p>
            </Container>
          </Col>
          <Col xs={12} md={4}>
            <Container
              className="content-container"
              style={{
                boxShadow: isDarkMode
                  ? "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)"
                  : "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)",
              }}
            >
              <p>
                <Counter isDarkMode={isDarkMode} />
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
