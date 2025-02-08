import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import departmentRouter from "./routes/department.js";
import employeeRouter from "./routes/employee.js";
import salaryRouter from "./routes/salary.js";
import leaveRouter from "./routes/leave.js";
import settingRouter from "./routes/setting.js";
import dashboardRouter from "./routes/dashboard.js";
import connectToDataBase from "./db/db.js";
import User from "./models/User.js";
import bcrypt from "bcrypt";

/*const userRegister = async () => {
  console.log("Conectado a la base de datos");
  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "Brenda",
      email: "brenda@gmail.com",
      password: hashPassword,
      role: "admin",
    });
    await newUser.save();
    console.log("Usuario administrador creado");
  } catch (error) {
    console.log(error);
  }
};*/

const startServer = async () => {
  await connectToDataBase();
  /*await userRegister();*/

  const app = express();
  app.use(
    cors({
      origin: "https://empleados-frontend-git-main-norvis-projects.vercel.app/",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.static("public/uploads"));
  app.use("/api/auth", authRouter);
  app.use("/api/department", departmentRouter);
  app.use("/api/employee", employeeRouter);
  app.use("/api/salary", salaryRouter);
  app.use("/api/leave", leaveRouter);
  app.use("/api/setting", settingRouter);
  app.use("/api/dashboard", dashboardRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

startServer();
