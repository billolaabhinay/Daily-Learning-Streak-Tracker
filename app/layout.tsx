import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="flex bg-gray-100 dark:bg-gray-900">

        <Sidebar />

        <main className="flex-1 p-10">
          {children}
        </main>

      </body>
    </html>
  );
}
