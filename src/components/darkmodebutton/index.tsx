import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Moon, Sun } from "react-bootstrap-icons";

type Props = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeButton = ({ isDarkMode, toggleDarkMode }: Props) => {
  useEffect(() => {
    if (isDarkMode) {
      document.body.className = "dark-mode";
    } else {
      document.body.className = "light-mode";
    }
  }, [isDarkMode]);

  return (
    <Button
      onClick={toggleDarkMode}
      style={{ backgroundColor: "transparent", borderColor: "transparent" }}
    >
      {isDarkMode ? (
        <Sun size={26} color={isDarkMode ? "white" : "black"} />
      ) : (
        <Moon size={26} color={isDarkMode ? "white" : "black"} />
      )}
    </Button>
  );
};

export default DarkModeButton;
