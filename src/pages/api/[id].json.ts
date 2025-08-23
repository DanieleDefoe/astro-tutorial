import type { APIRoute } from "astro";

const usernames = ["Sarah", "Chris", "Yan", "Elian"];

export function getStaticPaths() {
  return [
    {
      params: {
        id: "0",
      },
    },
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ];
}

export const GET: APIRoute = ({ params }) => {
  const { id } = params;

  if (!id || !usernames[id]) {
    return Response.redirect("/500");
  }

  return new Response(
    JSON.stringify({
      username: usernames[id],
    }),
  );
};
