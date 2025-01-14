"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: "link-icons/dashboard.png", activeIcon: "link-icons/active/dashboardActive.png" },
    { name: "Transactions", href: "/transactions", icon: "link-icons/transactions.png", activeIcon: "link-icons/active/transactionsActive.png" },
    { name: "Accounts", href: "/accounts", icon: "link-icons/accounts.png", activeIcon: "link-icons/active/accountsActive.png" },
    { name: "Investments", href: "/investments", icon: "link-icons/investments.png", activeIcon: "link-icons/active/investmentsActive.png" },
    { name: "Credit Cards", href: "/credit-cards", icon: "link-icons/credit-cards.png", activeIcon: "link-icons/active/credit-cardsActive.png" },
    { name: "Loans", href: "/loans", icon: "link-icons/loans.png", activeIcon: "link-icons/active/loansActive.png" },
    { name: "Services", href: "/services", icon: "link-icons/services.png", activeIcon: "link-icons/active/servicesActive.png" },
    { name: "My Privileges", href: "/my-privileges", icon: "link-icons/my-privileges.png", activeIcon: "link-icons/active/my-privilegesActive.png" },
    { name: "Setting", href: "/setting", icon: "link-icons/setting.png", activeIcon: "link-icons/active/settingActive.png" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <button
          className="md:hidden p-2 fixed top-5 left-4 z-50"
          onClick={() => setIsOpen(true)}
        >
          <img src="header/burger.png" alt="Menu" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={closeMenu}
        />
      )}

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform fixed md:relative w-60 bg-white h-screen flex flex-col py-6 px-4 z-40 border-r-[1px] border-r-gray-120`}
      >
        <div className="text-[#343C6A] font-extrabold text-2xl mb-6 flex justify-around">
          <img src="logo.png" alt="Bank Logo" />
          BankDash.
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map(({ name, href, icon, activeIcon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`relative flex items-center font-normal gap-6 rounded-md px-4 py-2
                  ${isActive ? "text-[#1814F3]" : "text-[#B1B1B1] hover:text-[#1814F3]"} group`}
              >
                {isActive && (
                  <span
                    className="
                      absolute left-0 top-0 h-full w-1 bg-[#1814F3] rounded-r-lg
                      -ml-4
                    "
                  />
                )}
                <img
                  src={isActive ? activeIcon : icon}
                  alt={name}
                  className="w-4 h-4"
                />
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
