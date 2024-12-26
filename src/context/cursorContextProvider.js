import { useState } from "react";
import CursorContext from "./cursorContext";

export default function CursorContextProvider({ children }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [mouseVariant, setMouseVariant] = useState("default");

  //custom cursor
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      mixBlendMode: "difference",
    },
    text: {
      width: 100,
      height: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      mixBlendMode: "difference",
    },
    textLg: {
      width: 200,
      height: 200,
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
    },
  };

  return (
    <CursorContext.Provider
      value={{ variants, mouseVariant, setMouseVariant, setMousePosition }}
    >
      {children}
    </CursorContext.Provider>
  );
}
