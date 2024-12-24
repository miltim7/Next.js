'use client';
import './globals.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { usePathname } from 'next/navigation';

const getPageTitle = (pathname) => {
  const titles = {
    '/dashboard': 'Dashboard',
    '/transactions': 'Transactions',
    '/accounts': 'Accounts',
    '/investments': 'Investments',
    '/credit-cards': 'Credit Cards',
    '/loans': 'Loans',
    '/services': 'Services',
    '/my-privileges': 'My Privileges',
    '/setting': 'Setting',
  };
  return titles[pathname] || 'Page Not Found';
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header pageTitle={getPageTitle(pathname)} />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
