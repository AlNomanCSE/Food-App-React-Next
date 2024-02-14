import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "AnotherLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ height: "100%", width: "100%" }} className="bubble">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
