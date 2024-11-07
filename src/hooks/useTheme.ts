import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../theme";

const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? darkTheme : lightTheme);

    setTheme(prefersDarkScheme.matches ? darkTheme : lightTheme);
    prefersDarkScheme.addEventListener("change", updateTheme);

    return () => prefersDarkScheme.removeEventListener("change", updateTheme);
  }, []);

  return theme;
};

export default useTheme;
