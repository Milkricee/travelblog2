import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Travelblog",
  description: "Welcome to the Travelblog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header eingefügt */}
        <Header />
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
        {/* Footer eingefügt */}
        <Footer />
      </body>
    </html>
  );
}
