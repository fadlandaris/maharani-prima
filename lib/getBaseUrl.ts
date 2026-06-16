export const getApiBaseUrl = (): string => {
  if (typeof window === "undefined" || process.env.NODE_ENV !== "development") {
    return process.env.NEXT_PUBLIC_API!;
  }
  const port = process.env.NEXT_PUBLIC_API_PORT;
  return `${window.location.protocol}//${window.location.hostname}:${port}/api/`;
}