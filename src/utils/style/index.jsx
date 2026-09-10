import { useContext } from "react";
import { ThemeContext } from "../context";
import { createGlobalStyle } from "styled-components";

export function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyleGlobalStyle isDarkMode={theme === "dark"} />;
}
const StyleGlobalStyle = createGlobalStyle`
      *{
          font-family: 'Trebuchet MS', Helvetica, sans-serif;
          }
      body{
       background-color: ${({ isDarkMode }) =>
         isDarkMode ? "#back" : "white"};
          heigth: 100vh;
          margin: 0;
          color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
      }
  `;
