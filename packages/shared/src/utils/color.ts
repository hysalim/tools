import { createColorize } from "colorize-template";
import color from "picocolors";

/**
 * Colorize console string
 * @example
 * ```ts
 * colorize`{cyan.bold text to colorize}`;
 * colorize`{bold variable to colorize {cyan ${var}}}`;
 * ```
 */
export const colorize = createColorize(color);
