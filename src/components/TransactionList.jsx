import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDelete }) {
    if (transactions.lenght === 0) {
        return (
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <p className="text-gray-400 text-sm">No transaction yet</p>
                <p className="text-gray-300 text-xs mt-1">Add your first one above</p>
            </div>
        )
    }

    return (
        <div className="space-y-2 mt-4">
            {transactions.map((t) => (
                <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default TransactionList