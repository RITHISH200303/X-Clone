export async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials:"include",
    ...options,
  });
  if (!res.ok){
    const error = await res.text();
    throw new Error(error || "API error");
  }
  return res.json();
}