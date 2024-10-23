import './globals.css'; 
import Navbar from './components/Navbar'; 
import Sidebar from './components/Sidebar';

export const metadata = { 
  title: 'Your Website Title', 
  description: 'Your website description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}