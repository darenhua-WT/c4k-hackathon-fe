import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { ThemeProvider } from "@/components/site/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    "[&_.slate-selected]:!bg-primary/20 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/10",
                    inter.className
                )}
                suppressHydrationWarning
            >
                <ThemeProvider attribute="class" defaultTheme="light">
                    <TooltipProvider
                        disableHoverableContent
                        delayDuration={500}
                        skipDelayDuration={0}
                    >
                        <header className="sticky top-0 z-30 flex h-12 justify-center items-center gap-4 border-b bg-background px-4 sm:px-6">
                            <div className="flex font-bold gap-2 text-foreground items-center">
                                <h3>C4K Hackathon Dashboard</h3>
                            </div>
                        </header>
                        <main>{children}</main>
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
