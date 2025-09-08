import { clsx, type ClassValue } from "clsx";

/**
 * Utility function to conditionally join classNames
 * Useful for combining Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
