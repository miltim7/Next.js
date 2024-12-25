export default function Loans() {
    return (
        <div className="bg-gray-50">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                    { title: 'Personal Loans', value: '$50,000', icon: <img src="loans/personal.png" alt="Personal Loans" className="w-[clamp(45px, 5vw, 70px)] h-[clamp(45px, 5vw, 70px)]" /> },
                    { title: 'Corporate Loans', value: '$100,000', icon: <img src="loans/corporate.png" alt="Corporate Loans" className="w-[clamp(45px, 5vw, 70px)] h-[clamp(45px, 5vw, 70px)]" /> },
                    { title: 'Business Loans', value: '$500,000', icon: <img src="loans/business.png" alt="Business Loans" className="w-[clamp(45px, 5vw, 70px)] h-[clamp(45px, 5vw, 70px)]" /> },
                    { title: 'Custom Loans', value: 'Choose Money', icon: <img src="loans/custom.png" alt="Custom Loans" className="w-[clamp(45px, 5vw, 70px)] h-[clamp(45px, 5vw, 70px)]" /> },
                ].map(({ title, value, icon }, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl flex items-center gap-4 p-4"
                    >
                        <div>{icon}</div>
                        <div>
                            <p className="text-[#718EBF] text-[16px]">{title}</p>
                            <p className="text-[20px] font-semibold text-gray-700">{value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-[22px] font-semibold text-[#333B69] mb-4">Active Loans Overview</h2>
            <div className="bg-white rounded-lg p-2">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr>
                                {['SL No', 'Loan Money', 'Left to repay', 'Duration', 'Interest rate', 'Installment', 'Repay'].map((header, index) => (
                                    <th key={index} className="px-4 py-2 text-sm font-normal text-[#718EBF] text-[16px]">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { slNo: '01', loanMoney: '$100,000', leftToRepay: '$40,500', duration: '8 Months', interestRate: '12%', installment: '$2,000 / month' },
                                { slNo: '02', loanMoney: '$500,000', leftToRepay: '$250,000', duration: '36 Months', interestRate: '10%', installment: '$8,000 / month' },
                                { slNo: '03', loanMoney: '$900,000', leftToRepay: '$40,500', duration: '12 Months', interestRate: '12%', installment: '$5,000 / month' },
                                { slNo: '04', loanMoney: '$50,000', leftToRepay: '$40,500', duration: '25 Months', interestRate: '5%', installment: '$2,000 / month' },
                                { slNo: '05', loanMoney: '$50,000', leftToRepay: '$40,500', duration: '5 Months', interestRate: '16%', installment: '$10,000 / month' },
                                { slNo: '06', loanMoney: '$80,000', leftToRepay: '$25,500', duration: '14 Months', interestRate: '8%', installment: '$2,000 / month' },
                                { slNo: '07', loanMoney: '$12,000', leftToRepay: '$5,500', duration: '9 Months', interestRate: '13%', installment: '$500 / month' },
                                { slNo: '08', loanMoney: '$160,000', leftToRepay: '$100,800', duration: '3 Months', interestRate: '12%', installment: '$900 / month' },
                            ].map(({ slNo, loanMoney, leftToRepay, duration, interestRate, installment }, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2 text-base text-[#232323]">{slNo}</td>
                                    <td className="px-4 py-2 text-base text-[#232323]">{loanMoney}</td>
                                    <td className="px-4 py-2 text-base text-[#232323]">{leftToRepay}</td>
                                    <td className="px-4 py-2 text-base text-[#232323]">{duration}</td>
                                    <td className="px-4 py-2 text-base text-[#232323]">{interestRate}</td>
                                    <td className="px-4 py-2 text-base text-[#232323]">{installment}</td>
                                    <td className="px-4 py-2 text-base">
                                        <button className="border border-[#232323] text-[#232323] rounded-full px-4 py-1 hover:bg-[#232323] hover:text-white">
                                            Repay
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="px-4 py-2 text-base font-normal text-[#FE5C73]">Total</td>
                                <td className="px-4 py-2 text-base font-normal text-[#FE5C73]">$125,0000</td>
                                <td className="px-4 py-2 text-base font-normal text-[#FE5C73]">$750,000</td>
                                <td className="px-4 py-2 text-base font-normal text-[#FE5C73]"></td>
                                <td className="px-4 py-2 text-base font-normal text-[#FE5C73]"></td>
                                <td colSpan={3} className="px-4 py-2 text-base font-normal text-[#FE5C73]">
                                    $50,000 / month
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}