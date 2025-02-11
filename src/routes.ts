import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("*?", "pages/catchall.tsx"),
] satisfies RouteConfig;