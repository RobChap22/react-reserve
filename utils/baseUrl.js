const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://react-reserve-nine.vercel.app/"
    : "http://localhost:3000";

export default baseUrl;
