export { default } from "next-auth/middleware";

export const config = { matcher: ["/admin", "/admin/view", "/admin/add", "/admin/edit", "/admin/delete"] };
