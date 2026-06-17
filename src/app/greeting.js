// Pure helper: pick a time-of-day greeting. Extracted so it is unit-testable.
export function greetingFor(hour) {
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export function currentGreeting(date = new Date()) {
  return greetingFor(date.getHours())
}
