import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { title } from 'process';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Acme - Log in</title>
      <html lang="pt-BR">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </>
  );
}
