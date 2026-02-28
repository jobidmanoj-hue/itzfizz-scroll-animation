import "./globals.css";

export const metadata = {
  title: "Itzfizz Scroll Animation",
  description: "Scroll Driven Hero Section",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}