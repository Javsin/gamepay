const historyList = () => {
    return(
    <div className={`2xl:container 2xl:max-w-[80rem] xl:mx-auto mx-2 xl:pt-6 py-2.5 xl:pb-12 xl:max-w-[70rem] mt-4`}>
        <div className="w-3/5">
            <h1 className="text-xl text-white font-medium">10 Transaksi Terahkir</h1>
            <p className="text-sm text-white py-3">Berikut ini adalah 10 transaksi terahkir dari semua pengguna. Informasi yang tersedia mencakup tanggal transaksi, kode invoice, Nomor ponsel, harga dan status</p>
        </div>
        <div className="-mx-4 overflow-x-auto ring-1 ring-secondary-700 sm:mx-0 sm:rounded-lg py-7">

        <table className="min-w-full divide-y divide-secondary-700">
            <thead>
            <tr>
                <th className="text-start px-4 py-2 bg-dark-blue-2 text-white">Tanggal</th>
                <th className="text-start px-4 py-2 bg-dark-blue-2 text-white">Nomor Invoice</th>
                <th className="text-start px-4 py-2 bg-dark-blue-2 text-white">No. Handphone</th>
                <th className="text-start px-4 py-2 bg-dark-blue-2 text-white">Harga</th>
                <th className="text-start px-4 py-2 bg-dark-blue-2 text-white">Status</th>
            </tr>
            </thead>
            <tbody className="text-white bg-dark-blue-2">
            <tr>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">30</td>
                <td className="px-4 py-2">New York</td>
                <td className="px-4 py-2">New York</td>
                <td className="px-4 py-2">New York</td>
            </tr>
            <tr>
                <td className="px-4 py-2">Jane Doe</td>
                <td className="px-4 py-2">25</td>
                <td className="px-4 py-2">Los Angeles</td>
                <td className="px-4 py-2">Los Angeles</td>
                <td className="px-4 py-2">Los Angeles</td>
            </tr>
            <tr>
                <td className="px-4 py-2">Alice Smith</td>
                <td className="px-4 py-2">35</td>
                <td className="px-4 py-2">Chicago</td>
                <td className="px-4 py-2">Chicago</td>
                <td className="px-4 py-2">Chicago</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    )
}

export default historyList;