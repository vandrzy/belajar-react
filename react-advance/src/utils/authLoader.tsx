import { redirect } from "react-router-dom";

const authLoader = () => {
  const token = localStorage.getItem("accessToken");
  console.log(token);
  if (!token) {
    return redirect("/auth/login");
  }
  return null;
};
export default authLoader;
