import { useState, useEffect } from "react";

function useTransactions() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("spendly-transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [weeklyBudget, setWeeklyBudget] = useState(() => {
    const saved = localStorage.getItem('spendly-weekly-budget')
    return saved ? Number(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem('spendly-weekly-budget', weeklyBudget)
  }, [weeklyBudget])


  useEffect(() => {
    localStorage.setItem("spendly-transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(transaction) {
    const newTransaction = {
      id: Date.now(),
      ...transaction,
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  }

  function deleteTransaction(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  function calculateBalance() {
    return transactions.reduce((total, t) => {
      if (t.type === "credit") {
        return total + t.amount;
      } else {
        return total - t.amount;
      }
    }, 0);
  }

  return {
    transactions,
    balance: calculateBalance(),
    addTransaction,
    deleteTransaction,
    weeklyBudget,
    setWeeklyBudget,
  };
}

export default useTransactions;
