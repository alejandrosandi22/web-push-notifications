import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { Notification } from "https://deno.land/x/deno_notify@1.3.1/ts/mod.ts";

type NotifData = {
  title: string;
  message: string;
  icon: string;
};

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Visit alejandrosandi.com";
});

router.post("/", async ({ request, response }) => {
  const body = request.body();

  const { title, message, icon } = await body.value;

  const notif_data: NotifData = {
    title,
    message,
    icon,
  };

  new Notification({ macos: true, linux: true, windows: true })
    .title(notif_data.title)
    .body(notif_data.message)
    .icon(notif_data.icon)
    .show();

  response.body = "";
});

export default router;
