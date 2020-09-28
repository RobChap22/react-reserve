const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://react-reserve-e263y5cjc.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
