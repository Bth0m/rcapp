"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient({});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={`${inter.className} h-screen`}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
