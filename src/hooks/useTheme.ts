import { useEffect, useState } from "react";
import { lightTheme } from "../theme";

const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  /**Hook para futura implementación del tema oscuro */

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? lightTheme : lightTheme);

    setTheme(prefersDarkScheme.matches ? lightTheme : lightTheme);
    prefersDarkScheme.addEventListener("change", updateTheme);

    return () => prefersDarkScheme.removeEventListener("change", updateTheme);
  }, []);

  return theme;
};

export default useTheme;
