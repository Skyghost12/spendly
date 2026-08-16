function BudgetSummary({ weeklyTotal, weeklyBudget, onSetBudget }) {

    
    const remaining = weeklyBudget - weeklyTotal
    const isOverBudget = remaining < 0
    const percentUsed = weeklyBudget > 0 ? Math.min((weeklyTotal / weeklyBudget) * 100, 100) : 0

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm mt-4">
            <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-gray-700 text-sm">Weeky Budget</p>
                <div className="flex items-center gap-1 bg-surface rounded-lg px-2 py-1">
                    <span className="text-gray-400 text-sm">₦</span>
                    <input 
                type="number"
                value={weeklyBudget || ''}
                onChange={(e) => onSetBudget(Number(e.target.value))}
                placeholder="Set Budget"
                className="w-28 bg-transparent text-sm text-right focus:outline-none"
                 />
                </div>
                
            </div>

            <div className="w-full bg-surface rounded-full h-2.5 overflow-hidden">
                <div className={`h-full rounded-full transition-all ${isOverBudget ? "bg-debit" : "bg-primary"}`}
                style={{ width: `${percentUsed}%` }}>
                </div>
                
            </div>
            <div className="flex justify-between items-center mt-2">
                     <p className={`text-xs font-medium ${isOverBudget ? "text-debit" : "text-gray-500"}`}>
                {isOverBudget 
                ? `Over by ₦${Math.abs(remaining).toLocaleString()}`
                : `₦${remaining.toLocaleString()} left`}
            </p>
            <p className="text-xs text-gray-300">{Math.round(percentUsed)}% used</p>
            </div>
           
        </div>
    )
}

export default BudgetSummary
