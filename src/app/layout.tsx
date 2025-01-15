"use client";
import type { Metadata } from "next";
import "./globals.css";
import { ServerProvider } from "../Utils/ServerContext";

 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/happy_creeper_head.babdbc4478f5ffbe44d9.png" />
      <title>Block-Server</title>
      </head>
      <body
        className={`antialiased`}
      >
        <ServerProvider>
        {children}
        </ServerProvider>
      </body>
    </html>
  );
}
