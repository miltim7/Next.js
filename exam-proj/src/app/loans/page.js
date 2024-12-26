"use client";
import { useState, useEffect } from "react";

export default function Loans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/loansData")
      .then((res) => res.json())
      .then((data) => setLoans(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 max-w-[1400px] mx-auto px-4">
        {[
          {
            title: "Personal Loans",
            value: "$50,000",
            icon: (
              <img
                src="loans/personal.png"
                alt="Personal Loans"
                className="w-[clamp(40px,5vw,70px)] h-[clamp(40px,5vw,70px)]"
              />
            ),
          },
          {
            title: "Corporate Loans",
            value: "$100,000",
            icon: (
              <img
                src="loans/corporate.png"
                alt="Corporate Loans"
                className="w-[clamp(40px,5vw,70px)] h-[clamp(40px,5vw,70px)]"
              />
            ),
          },
          {
            title: "Business Loans",
            value: "$500,000",
            icon: (
              <img
                src="loans/business.png"
                alt="Business Loans"
                className="w-[clamp(40px,5vw,70px)] h-[clamp(40px,5vw,70px)]"
              />
            ),
          },
          {
            title: "Custom Loans",
            value: "Choose Money",
            icon: (
              <img
                src="loans/custom.png"
                alt="Custom Loans"
                className="w-[clamp(40px,5vw,70px)] h-[clamp(40px,5vw,70px)]"
              />
            ),
          },
        ].map(({ title, value, icon }, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl flex items-center gap-4 p-4"
          >
            <div>{icon}</div>
            <div>
              <p className="text-[#718EBF] text-base sm:text-sm">{title}</p>
              <p className="text-lg sm:text-base font-semibold text-gray-700">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl sm:text-lg font-semibold text-[#333B69] mb-4 px-4 max-w-[1400px] mx-auto">
        Active Loans Overview
      </h2>

      <div className="bg-white rounded-lg p-2 max-w-[1400px] mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="py-2 pl-[10px] pr-0 hidden md:table-cell text-base sm:text-sm font-normal text-[#718EBF]">
                  SL No
                </th>
                <th className="px-2 py-2 text-base sm:text-sm font-normal text-[#718EBF]">
                  Loan Money
                </th>
                <th className="px-2 py-2 text-base sm:text-sm font-normal text-[#718EBF]">
                  Left to repay
                </th>
                <th className="px-2 py-2 text-base sm:text-sm font-normal text-[#718EBF] hidden md:table-cell">
                  Duration
                </th>
                <th className="px-2 py-2 text-base sm:text-sm font-normal text-[#718EBF] hidden md:table-cell">
                  Interest rate
                </th>
                <th className="px-2 py-2 text-base sm:text-sm font-normal text-[#718EBF] hidden md:table-cell">
                  Installment
                </th>
                <th className="py-2 pl-0 pr-[10px] text-base sm:text-sm font-normal text-[#718EBF]">
                  Repay
                </th>
              </tr>
            </thead>
            <tbody>
              {loans.map(
                (
                  { slNo, loanMoney, leftToRepay, duration, interestRate, installment },
                  i
                ) => (
                  <tr key={i} className="border-b">
                    <td className="py-2 pl-[10px] pr-0 hidden md:table-cell text-base sm:text-sm text-[#232323]">
                      {slNo}
                    </td>
                    <td className="px-2 py-2 text-base sm:text-sm text-[#232323]">
                      {loanMoney}
                    </td>
                    <td className="px-2 py-2 text-base sm:text-sm text-[#232323]">
                      {leftToRepay}
                    </td>
                    <td className="px-2 py-2 text-base sm:text-sm text-[#232323] hidden md:table-cell">
                      {duration}
                    </td>
                    <td className="px-2 py-2 text-base sm:text-sm text-[#232323] hidden md:table-cell">
                      {interestRate}
                    </td>
                    <td className="px-2 py-2 text-base sm:text-sm text-[#232323] hidden md:table-cell">
                      {installment}
                    </td>
                    <td className="py-2 pl-0 pr-[10px] text-base sm:text-sm">
                      <button className="border border-[#232323] text-[#232323] rounded-full px-3 py-1 hover:bg-[#232323] hover:text-white">
                        Repay
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-2 pl-[10px] pr-0 text-base sm:text-sm font-normal text-[#FE5C73] hidden md:table-cell">
                  Total
                </td>
                <td className="px-2 py-2 text-base sm:text-sm font-normal text-[#FE5C73]">
                  $125,0000
                </td>
                <td className="px-2 py-2 text-base sm:text-sm font-normal text-[#FE5C73]">
                  $750,000
                </td>
                <td className="px-2 py-2 text-base sm:text-sm font-normal text-[#FE5C73] hidden md:table-cell" />
                <td className="px-2 py-2 text-base sm:text-sm font-normal text-[#FE5C73] hidden md:table-cell" />
                <td className="px-2 py-2 text-base sm:text-sm font-normal text-[#FE5C73] hidden md:table-cell">
                  $50,000 / month
                </td>
                <td className="py-2 pl-0 pr-[10px] text-base sm:text-sm font-normal text-[#FE5C73] hidden md:table-cell" />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
