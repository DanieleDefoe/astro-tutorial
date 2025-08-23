import { defineMiddleware, sequence } from "astro:middleware";

const validation = defineMiddleware(async (_, next) => {
  console.log("validation request");
  const response = await next();
  console.log("validation response");
  return response;
});

const auth = defineMiddleware(async (_, next) => {
  console.log("auth request");
  const response = await next();
  console.log("auth response");
  return response;
});

const greeting = defineMiddleware(async (context, next) => {
  if (Math.random() > 0.5) {
    return next(
      new Request("/blog", {
        headers: {
          "x-redirect-to": context.url.pathname,
        },
      }),
    );
  }

  console.log("greeting request");
  const response = await next();
  console.log("greeting response");
  return response;
});

export const onRequest = sequence(validation, auth, greeting);
