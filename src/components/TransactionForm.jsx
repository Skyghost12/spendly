import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [type, setType] = useState("debit");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [note, setNote] = useState();


  function handleSubmit(e) {
    e.preventDefault()

    if (!amount) return

    onAdd({
      type,
      amount: Number(amount),
      category: type === 'debit' ? category : null,
      note,
      date: new Date().toISOString(),
    })

    setAmount('')
    setNote('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-2xl shadow-sm space-y-3"
    >
      <div className="flex gap-2 bg-surface p-1 rounded-xl">
        <button
          type="button"
          onClick={() => setType("debit")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
            type === "debit"
              ? "bg-debit text-white shadow-sm"
              : "text-gray-500"
          }`}
        >
          Debit
        </button>
        <button
          type="button"
          onClick={() => setType('credit')}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
            type === 'credit' ? 'bg-credit text-white shadow-sm' : 'text-gray-400'
          }`}
        >
          Credit
        </button>
      </div>

       <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full border border-gray-200 rounded-xl p-3 text-lg font-semibold focus:outline-none focus:ring-primary-light"
      />

      {type === 'debit' && (
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
        >
          <option value="Food">Food</option>
          <option value="Data">Data</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Others">Others</option>
        </select>
      )}

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note (optional)"
        className="w-full border border-b-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
      />

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-xl font-semibold cursor-pointer mt-4 hover:bg-primary-light transition-colors"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
