function TransactionItem({ transaction, onDelete }) {
    const isCredit = transaction.type === "credit"

    return (
        <div className="flex items-center justify-between bg-white p-3.5 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                    isCredit ? "bg-credit/10 text-credit" : "bg-debit/10 text-debit"
                }`}>
                    {isCredit ? '↓' : '↑' }
                </div>
               <div className="">
                 <p className="font-medium text-gray-800 text-sm">
                    {transaction.category || (isCredit ? "income" : "other")}
                </p>
                {transaction.note && (
                    <p className="text-sm text-gray-400">{transaction.note}</p>
                )}
               </div>
            </div>

            <div className="flex items-center gap-3">
                <span className={`font-semibold text-sm ${isCredit ? "text-credit" : "text-debit"}`}>
                    {isCredit ? "+" : "-"}<del>N</del>{transaction.amount.toLocaleString()}
                </span>
                <button onClick={() => onDelete(transaction.id)} className="text-gray-400 hover:text-debit transition-colors text-sm">x</button>
            </div>
        </div>
    )
} 

export default TransactionItem