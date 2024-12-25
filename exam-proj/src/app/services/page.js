export default function Services() {
    return (
        <div className="bg-gray-100 p-6">
            {/* Top Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                    { title: 'Life Insurance', description: 'Unlimited protection', icon: 'services/life-insurance.png' },
                    { title: 'Shopping', description: 'Buy. Think. Grow.', icon: 'services/shopping.png' },
                    { title: 'Safety', description: 'We are your allies', icon: 'services/safety.png' },
                ].map(({ title, description, icon }, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl flex items-center p-4"
                    >
                        <img src={icon} alt={title} className="w-[clamp(40px, 10vw, 70px)] h-[clamp(40px, 10vw, 70px)] mr-4" />
                        <div>
                            <h3 className="text-[#232323] font-semibold text-[clamp(18px, 4vw, 24px)]">{title}</h3>
                            <p className="text-[#718EBF] font-normal text-[clamp(14px, 3vw, 16px)]">{description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bank Services List */}
            <h2 className="text-[clamp(20px, 4vw, 22px)] font-semibold text-[#333B69] mb-4">Bank Services List</h2>
            <div className="flex flex-col gap-4">
                {[
                    {
                        title: 'Business loans',
                        description: 'It is a long established',
                        image: (
                            <div className="w-[clamp(40px, 10vw, 50px)] h-[clamp(40px, 10vw, 50px)] bg-pink-100 rounded-2xl flex items-center justify-center">
                                <img src="services/business-loans.png" className="w-[clamp(20px, 5vw, 30px)] h-[clamp(20px, 5vw, 30px)]" />
                            </div>
                        ),
                    },
                    {
                        title: 'Checking accounts',
                        description: 'It is a long established',
                        image: (
                            <div className="w-[clamp(40px, 10vw, 50px)] h-[clamp(40px, 10vw, 50px)] bg-yellow-100 rounded-2xl flex items-center justify-center">
                                <img src="services/checking-accounts.png" className="w-[clamp(20px, 5vw, 30px)] h-[clamp(20px, 5vw, 30px)]" />
                            </div>
                        ),
                    },
                    {
                        title: 'Savings accounts',
                        description: 'It is a long established',
                        image: (
                            <div className="w-[clamp(40px, 10vw, 50px)] h-[clamp(40px, 10vw, 50px)] bg-red-100 rounded-2xl flex items-center justify-center">
                                <img src="services/savings-accounts.png" className="w-[clamp(20px, 5vw, 30px)] h-[clamp(20px, 5vw, 30px)]" />
                            </div>
                        ),
                    },
                    {
                        title: 'Debit and credit cards',
                        description: 'It is a long established',
                        image: (
                            <div className="w-[clamp(40px, 10vw, 50px)] h-[clamp(40px, 10vw, 50px)] bg-blue-100 rounded-2xl flex items-center justify-center">
                                <img src="services/debit-credit-cards.png" className="w-[clamp(20px, 5vw, 30px)] h-[clamp(20px, 5vw, 30px)]" />
                            </div>
                        ),
                    },
                    {
                        title: 'Life Insurance',
                        description: 'It is a long established',
                        image: (
                            <div className="w-[clamp(40px, 10vw, 50px)] h-[clamp(40px, 10vw, 50px)] bg-teal-100 rounded-2xl flex items-center justify-center">
                                <img src="services/life-insurance2.png" className="w-[clamp(20px, 5vw, 30px)] h-[clamp(20px, 5vw, 30px)]" />
                            </div>
                        ),
                    },
                ].map(({ title, description, image }, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-white p-4 rounded-lg"
                    >
                        <div className="flex items-center gap-4">
                            {image}
                            <div>
                                <p className="text-[#333B69] font-semibold text-[clamp(14px, 3vw, 16px)]">{title}</p>
                                <p className="text-[#718EBF] text-[clamp(12px, 2.5vw, 14px)]">{description}</p>
                            </div>
                        </div>
                        <div className="flex justify-around flex-1 gap-4 text-center hidden md:flex">
                            {Array(3)
                                .fill()
                                .map((_, i) => (
                                    <div key={i} className="flex flex-col">
                                        <p className="text-[clamp(12px, 2.5vw, 14px)] text-[#333B69]">Lorem Ipsum</p>
                                        <p className="text-[clamp(12px, 2.5vw, 14px)] text-[#718EBF]">Many publishing</p>
                                    </div>
                                ))}
                        </div>
                        <button className="text-[#1814F3] text-[clamp(10px, 3vw, 12px)] font-normal px-4 py-1 hover:bg-[#1814F3] hover:text-white md:border md:rounded-full">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
