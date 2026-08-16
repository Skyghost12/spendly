function getStartOfWeek(date) {
 const d = new Date(date)
 const day = d.getDay()
 const diff = day === 0 ? -6 : 1 - day
 d.setDate(d.getDate() + diff)
 d.setHours(0, 0, 0, 0)
 
 return d
}

function isSameDay(d1, d2) {
    return new Date(d1).toDateString() === new Date(d2).toDateString()
}

function isSameweek(d1, d2) {
    return getStartOfWeek(d1).getTime() === getStartOfWeek(d2).getTime()
}

function isSameMonth(d1, d2) {
    const a = new Date(d1)
    const b = new Date(d2)
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

function getTotalForDebits(transactions) {
    return transactions
    .filter((t) => t.type === 'debit')
    .reduce((sum, t) => sum + t.amount, 0)
}

export function getDailyTotal(transactions, date = new Date()) {
    const todays = transactions.filter((t) => isSameDay(t.date, date))
    return getTotalForDebits(todays)
}

export function getWeeklyTotal(transactions, date = new Date()) {
    const thisWeek = transactions.filter((t) => isSameweek(t.date, date))
    return getTotalForDebits(thisWeek)
}

export function getMonthlyTotal(transactions, date = new Date()) {
    const thisMonth = transactions.filter((t) => isSameMonth(t.date, date))
    return getTotalForDebits(thisMonth)
}