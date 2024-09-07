import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./_components/style.css";
import toast, { Toaster } from "react-hot-toast";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import CartProvider from "./providers/CartProvider";
import NextTopLoader from "nextjs-toploader";

const myFont = localFont({
  src: [
    {
      path: "./_fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./_fonts/Satoshi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />

        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {" "}
              <NextTopLoader showSpinner={false} />
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </body>
    </html>
  );
}
