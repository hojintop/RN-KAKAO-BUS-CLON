import { useState } from "react";
import { DARK_COLOR, LIGHT_COLOR } from "./color";

export const useTheme = () => {
    const [isDark, setIsDarke] = useState(false);

    const toggleIsDark = () => setIsDarke(!isDark);

    return {
        NEWCOLOR: isDark ? DARK_COLOR : LIGHT_COLOR,
        toggleIsDark,
        isDark,
    }
}