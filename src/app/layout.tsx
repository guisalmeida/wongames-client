import type { Metadata } from 'next';

import Providers from './providers';
import StyledComponentsRegistry from '../lib/registry';

export const metadata: Metadata = {
  title: 'Won Games ',
  description: 'The best Game Stores in the world!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
