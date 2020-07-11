import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";

import {
  fetchAllEmployees,
  createEmployee,
  fetchOneEmployee,
  updateEmployee,
  deleteEmployee,
} from "./controler/employees.ts";
import { ErrorMiddleware } from "./errohandler/errorhandler.ts";
import { APP_PORT } from "./config/config.ts";

const app = new Application();

app.use(ErrorMiddleware);

app.get("/employees", fetchAllEmployees)
  .post("/employees", createEmployee)
  .get("/employees/:id", fetchOneEmployee)
  .put("/employees/:id", updateEmployee)
  .delete("/employees/:id", deleteEmployee)
  .start({ port: APP_PORT });


