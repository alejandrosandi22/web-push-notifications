import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import router from "./routes/index.routes.ts";

const app: Application = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", (_e: any) =>
  console.log("Listening on http://localhost:4001")
);
await app.listen({ port: 4001 });
