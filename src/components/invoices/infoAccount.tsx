const infoAccount = () => {
    const userInfo = [
        { label: 'Nickname', value: 'Kuceng_orens' },
        { label: 'ID', value: '9088090' },
        { label: 'Server', value: '2181' }
    ];

    return(
        <div className="mt-5 bg-dark-blue-2 rounded-xl text-white py-5 px-4">
            <p className='mb-4 font-medium'>Informasi Akun</p>
            {
                userInfo.map((item, index) => (
                    <div className="grid grid-cols-12 border-t border-[#556EB1] py-3" key={index}>
                        <div className="col-span-4">{item.label}</div>
                        <div className="col-span-8">{item.value}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default infoAccount;