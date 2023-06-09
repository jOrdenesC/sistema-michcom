export default function CardDashboardLoss() {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="rounded-full bg-red-500 text-white p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-gray-700 text-lg font-bold">Pérdidas</p>
                            <p className="text-gray-500 text-sm">Último trimestre</p>
                        </div>
                    </div>
                    <p className="text-red-500 text-3xl font-bold">-$50,000</p>
                </div>
            </div>
        </>
    )
}
