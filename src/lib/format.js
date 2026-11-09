export function formatDate(iso, dateLocale = "en-GB") {
  return new Date(`${iso}T00:00:00`).toLocaleDateString(dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
