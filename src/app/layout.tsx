import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "GetDataReady", description: "Learn the skills. Solve real problems. Prove the results." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
