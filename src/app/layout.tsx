import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Container, CssBaseline } from "@mui/material";
import { NavLinks } from "./ui/nav-links";

export const metadata: Metadata = {
  title: "SFP",
  description: "Sistema Folha Pagamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <NavLinks />
          <Container maxWidth="lg" sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
            {children}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
