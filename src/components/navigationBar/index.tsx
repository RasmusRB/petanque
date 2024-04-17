import { Container, Navbar } from "react-bootstrap";
import DarkModeButton from "../darkmodebutton";
import "./style.css";

type Props = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const NavigationBar = ({ isDarkMode, toggleDarkMode }: Props) => {
  return (
    <Navbar
      expand="lg"
      className={isDarkMode ? "navbar-dark" : "navbar-light"}
      sticky="top"
    >
      <Container
        fluid
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <div style={{ flex: 1, textAlign: "center" }}>
          <Navbar.Brand style={{ padding: 15, fontSize: 24 }} href="#">
            Petanque Pensionisterne
          </Navbar.Brand>
        </div>

        <DarkModeButton
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
