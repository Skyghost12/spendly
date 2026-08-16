import useTransactions from "./hooks/useTransactions";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import BalanceCard from "./components/BalanceCard";
import {
  getDailyTotal,
  getWeeklyTotal,
  getMonthlyTotal,
} from "./utils/calculation";
import BudgetSummary from "./components/BudgetSummary";

function App() {
  const { transactions, balance, addTransaction, deleteTransaction, weeklyBudget, setWeeklyBudget } =
    useTransactions();

  const dailyTotal = getDailyTotal(transactions);
  const weeklyTotal = getMonthlyTotal(transactions);
  const monthlyTotal = getMonthlyTotal(transactions);

  return (
    <div className="min-h-screen bg-surface pb-10">
    <div className="max-w-md mx-auto px-4 pt-8 space-y-5">

      <p className="text-xs font-semibold text-primary-light uppercase tracking-wider">
        Spendly
      </p>
      <h1 className="text-xl font-bold text-primary mt-0.5">
        Hi there 👋
      </h1>
    </div>
      <BalanceCard balance={balance} />
      <p className="m-2 text-sm text-gray-500">
        {transactions.length} transaction(s) so far
      </p>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-3 roundeed-lg shadow-sm text-center">
          <p className="text-[11px] text-gray-400 font-medium">Today</p>
          <p className="font-bold text-debit mt-1"><del>N</del>{dailyTotal.toLocaleString()}</p>
        </div>
        <div className="bg-white p-3 roundeed-lg shadow-sm text-center">
          <p className="text-[11px] text-gray-400 font-medium">This Week</p>
          <p className="font-bold text-debit mt-1"><del>N</del>{weeklyTotal.toLocaleString()}</p>
        </div>
        <div className="bg-white p-3 roundeed-lg shadow-sm text-center">
          <p className="text-[11px] text-gray-400 font-medium">This Month</p>
          <p className="font-bold text-debit mt-1"><del>N</del>{monthlyTotal.toLocaleString()}</p>
        </div>
      </div>

      <BudgetSummary
      weeklyTotal={weeklyTotal}
      weeklyBudget={weeklyBudget}
      onSetBudget={setWeeklyBudget}
      />

      <div className="mt-4">
        <TransactionForm onAdd={addTransaction} />
      </div>
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default App;
