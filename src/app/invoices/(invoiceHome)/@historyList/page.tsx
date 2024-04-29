const historyList = () => {
    const transactions = [
        {
            tanggal: '21-07-2023 08:43:22',
            nomorInvoice: 'MP******768',
            nomorHandphone: '081*****456',
            harga: 'Rp 5.500',
            status: 'Sukses'
        },
        {
            tanggal: '21-07-2023 08:43:22',
            nomorInvoice: 'MP******768',
            nomorHandphone: '081*****456',
            harga: 'Rp 5.500',
            status: 'Pending'
        },
        {
            tanggal: '21-07-2023 08:43:22',
            nomorInvoice: 'MP******768',
            nomorHandphone: '081*****456',
            harga: 'Rp 5.500',
            status: 'Pending'
        },
        {
            tanggal: '21-07-2023 08:43:22',
            nomorInvoice: 'MP******768',
            nomorHandphone: '081*****456',
            harga: 'Rp 5.500',
            status: 'Pending'
        },
        {
            tanggal: '21-07-2023 08:43:22',
            nomorInvoice: 'MP******768',
            nomorHandphone: '081*****456',
            harga: 'Rp 5.500',
            status: 'Pending'
        },
    ];

    return(
        <div className={`2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-6 py-2.5 xl:pb-12 xl:max-w-[70rem] mt-4`}>
            <div className="w-full px-1 md:px-0 md:w-3/5">
                <h1 className="text-xl text-white font-medium">10 Transaksi Terahkir</h1>
                <p className="text-sm text-white py-3">Berikut ini adalah 10 transaksi terahkir dari semua pengguna. Informasi yang tersedia mencakup tanggal transaksi, kode invoice, Nomor ponsel, harga dan status</p>
            </div>
            <div className="py-8 md:py-10">
                <div className="rounded-lg border border-[#556EB1] shadow-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr>
                                <th className="bg-dark-blue-2 text-white border-b border-[#556EB1] py-3 px-4 text-start text-sm font-medium">Tanggal</th>
                                <th className="bg-dark-blue-2 text-white border-b border-[#556EB1] py-3 px-4 text-start text-sm font-medium">Nomor Invoice</th>
                                <th className="bg-dark-blue-2 text-white border-b border-[#556EB1] py-3 px-4 text-start text-sm font-medium">No. Handphone</th>
                                <th className="bg-dark-blue-2 text-white border-b border-[#556EB1] py-3 px-4 text-start text-sm font-medium">Harga</th>
                                <th className="bg-dark-blue-2 text-white border-b border-[#556EB1] py-3 px-4 text-start text-sm font-medium">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    transactions.map((transaction, index) => (
                                        <tr key={index}>
                                            <td className="bg-dark-blue-2 text-white text-xs py-3 px-4">{transaction.tanggal}</td>
                                            <td className="bg-dark-blue-2 text-white text-xs py-3 px-4">{transaction.nomorInvoice}</td>
                                            <td className="bg-dark-blue-2 text-white text-xs py-3 px-4">{transaction.nomorHandphone}</td>
                                            <td className="bg-dark-blue-2 text-white text-xs py-3 px-4">{transaction.harga}</td>
                                            <td className="bg-dark-blue-2 text-black text-xs py-3 px-4">
                                                <div className={`flex justify-center items-center p-1 rounded-md w-full md:w-1/2 
                                                ${transaction.status.toLowerCase() === "sukses" 
                                                ? "bg-green-400" 
                                                : transaction.status.toLowerCase() === "pending" 
                                                ? "bg-yellow-400" 
                                                : "bg-red-600" }`
                                                }>
                                                    {transaction.status}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default historyList;