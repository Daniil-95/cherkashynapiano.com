const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getHero() {
  const response = await fetch(
    `${API_URL}/api/hero?populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch hero");
  }

  const json = await response.json();

  return json.data;
}