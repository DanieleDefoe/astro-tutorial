import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response(
    await (
      await fetch("https://docs.astro.build/assets/full-logo-light.png")
    ).arrayBuffer(),
  );
};
