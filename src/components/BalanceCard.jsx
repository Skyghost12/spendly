function BalanceCard({ balance }) {

    const isNegative = balance < 0
    return (
        <div className="bg-primary rounded-2xl p-6 text-white shadow-lg">
            <p className="text-sm text-white/70 font-medium">Total Balance</p>
            <p className={`text-4x1 font-bold mt-1 tracking-tight ${isNegative ? "text-red-300" : "text-white"}`}>
                <del>N</del>{balance.toLocaleString()}
            </p>
        </div>
    )
}

export default BalanceCard