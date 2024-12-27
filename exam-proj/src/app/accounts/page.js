export default function Accounts() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: 'My Balance', value: '$12,750', icon: <img src="accounts/my-balance.png" alt="My Balance" className="w-10 h-10" /> },
          { title: 'Income', value: '$5,600', icon: <img src="accounts/income.png" alt="Income" className="w-10 h-10" /> },
          { title: 'Expense', value: '$3,460', icon: <img src="accounts/expence.png" alt="Expense" className="w-10 h-10" /> },
          { title: 'Total Saving', value: '$7,920', icon: <img src="accounts/total-saving.png" alt="Total Saving" className="w-10 h-10" /> },
        ].map(({ title, value, icon }, index) => (
          <div key={index} className="bg-white rounded-2xl flex items-center gap-4 p-4">
            <div>{icon}</div>
            <div>
              <p className="text-[#718EBF] text-xs">{title}</p>
              <p className="text-base font-normal text-gray-700">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg p-6 flex-grow flex flex-col justify-between">
          <h2 className="text-lg sm:text-xl font-semibold text-[#333B69] mb-4">Last Transaction</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                name: 'Spotify Subscription',
                date: '25 Jan 2021',
                category: 'Shopping',
                card: '1234 ****',
                status: 'Pending',
                amount: '-$150',
                color: 'text-[#FE5C73]',
                image: <img src="accounts/spotify.png" alt="Spotify" className="w-10 h-10" />,
              },
              {
                name: 'Mobile Service',
                date: '25 Jan 2021',
                category: 'Service',
                card: '1234 ****',
                status: 'Completed',
                amount: '-$340',
                color: 'text-[#FE5C73]',
                image: <img src="accounts/mobile.png" alt="Mobile Service" className="w-10 h-10" />,
              },
              {
                name: 'Emily Wilson',
                date: '25 Jan 2021',
                category: 'Transfer',
                card: '1234 ****',
                status: 'Completed',
                amount: '+$780',
                color: 'text-green-300',
                image: <img src="accounts/emilly.png" alt="Emily" className="w-10 h-10" />,
              },
            ].map(({ name, date, category, card, status, amount, color, image }, index) => (
              <div key={index} className="flex justify-between items-center gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center">
                    {image}
                  </div>
                  <div>
                    <p className="font-semibold text-[#333B69] text-xs sm:text-base">{name}</p>
                    <p className="text-xs sm:text-sm text-[#718EBF]">{date}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-[#718EBF]">
                  <p>{category}</p>
                  <p>{card}</p>
                  <p>{status}</p>
                  <p className={color}>{amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[#333B69]">My Card</h2>
            <span className="text-sm sm:text-base px-2 py-1 text-[#333B69]">See All</span>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-light">Balance</p>
                  <p className="text-lg sm:text-xl font-normal mb-4">$5,756</p>
                </div>
                <img src="accounts/chip-card.png" alt="Chip" className="w-8 h-auto" />
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm mb-4 gap-4">
                <div>
                  <p className="uppercase font-light">Card Holder</p>
                  <p className="font-normal">Eddy Cusuma</p>
                </div>
                <div className="mr-10 sm:mr-20">
                  <p className="uppercase font-light">Valid Thru</p>
                  <p className="font-normal">12/22</p>
                </div>
              </div>
              <div className="text-sm sm:text-lg font-semibold tracking-wider mt-8 flex items-center justify-between">
                <span>3778 **** **** 1234</span>
                <img src="accounts/master-card.png" alt="MasterCard" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg p-6 flex-grow flex flex-col">
          <h2 className="text-lg sm:text-xl font-semibold text-[#333B69]">Debit & Credit Overview</h2>
          <div className="flex flex-col mt-2 h-72">
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-sm text-gray-500">
                $7,560 Debited & $5,420 Credited in this Week
              </p>
              <div className="flex gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-[#718EBF]">Debit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-[#718EBF]">Credit</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-between items-end">
              {[
                { day: 'Sat', debitHeight: 'h-28', creditHeight: 'h-44' },
                { day: 'Sun', debitHeight: 'h-20', creditHeight: 'h-36' },
                { day: 'Mon', debitHeight: 'h-20', creditHeight: 'h-28' },
                { day: 'Tue', debitHeight: 'h-40', creditHeight: 'h-24' },
                { day: 'Wed', debitHeight: 'h-32', creditHeight: 'h-40' },
                { day: 'Thu', debitHeight: 'h-24', creditHeight: 'h-20' },
                { day: 'Fri', debitHeight: 'h-36', creditHeight: 'h-40' },
              ].map(({ day, debitHeight, creditHeight }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex gap-2 items-end">
                    <div className={`w-3 sm:w-4 md:w-6 ${debitHeight} bg-[#1A16F3] rounded-lg`}></div>
                    <div className={`w-3 sm:w-4 md:w-6 ${creditHeight} bg-[#FCAA0B] rounded-lg`}></div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#718EBF] mt-2">{day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 flex-grow flex flex-col">
          <h2 className="text-lg sm:text-xl font-semibold text-[#333B69] mb-4">Invoices Sent</h2>
          {[
            { name: 'Apple Store', time: '5h ago', amount: '$450', image: <img src="accounts/apple-store.png" /> },
            { name: 'Michael', time: '2 days ago', amount: '$160', image: <img src="accounts/michael.png" /> },
            { name: 'Playstation', time: '5 days ago', amount: '$1085', image: <img src="accounts/playstation.png" /> },
            { name: 'William', time: '10 days ago', amount: '$90', image: <img src="accounts/william.png" /> },
          ].map(({ name, time, amount, image }, index) => (
            <div key={index} className="flex justify-between items-center py-4 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center text-xl">
                  {image}
                </div>
                <div>
                  <p className="font-semibold text-[#333B69] text-sm sm:text-base">{name}</p>
                  <p className="text-xs sm:text-sm text-[#718EBF]">{time}</p>
                </div>
              </div>
              <p className="font-light text-[#718EBF] text-sm sm:text-base">{amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}