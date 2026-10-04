let transactions = [];

const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionList = document.getElementById('transaction-list');
const totalSaldoEl = document.getElementById('total-saldo');
const totalPemasukanEl = document.getElementById('total-pemasukan');
const totalPengeluaranEl = document.getElementById('total-pengeluaran');
const statRatioEl = document.getElementById('stat-ratio');

function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

function switchPage(pageId) {
    const pageHome = document.getElementById('page-home');
    const pageHistory = document.getElementById('page-history');
    const pageStats = document.getElementById('page-stats');
    
    const btnHome = document.getElementById('btn-home');
    const btnHistory = document.getElementById('btn-history');
    const btnStats = document.getElementById('btn-stats');

    pageHome.style.display = 'none';
    pageHistory.style.display = 'none';
    pageStats.style.display = 'none';
    
    btnHome.classList.remove('active');
    btnHistory.classList.remove('active');
    btnStats.classList.remove('active');

    if (pageId === 'home') {
        pageHome.style.display = 'block';
        btnHome.classList.add('active');
    } else if (pageId === 'history') {
        pageHistory.style.display = 'block';
        btnHistory.classList.add('active');
    } else if (pageId === 'stats') {
        pageStats.style.display = 'block';
        btnStats.classList.add('active');
    }
}
// Event Submit Form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const description = descriptionInput.value;
    const amount = Number(amountInput.value);
    const type = document.querySelector('input[name="type"]:checked').value;

    if (amount <= 0) {
        alert("Silakan masukkan nominal angka yang lebih besar dari 0!");
        return;
    }

    const newTransaction = {
        id: Date.now(),
        description: description,
        amount: amount,
        type: type
    };

    transactions.push(newTransaction);
    initApp();
    form.reset();

    transactions.push(newTransaction);
    initApp();
    form.reset();
    switchPage('history');
});

function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    initApp();
}

function initApp() {
    transactionList.innerHTML = '';
    let totalIncome = 0;
    let totalExpense = 0;

    if (transactions.length === 0) {
        transactionList.innerHTML = '<li style="text-align: center; color: #6B7280; padding: 15px; background: white; border-radius: 5px;"><i class="fa-solid fa-folder-open"></i> Belum ada transaksi tercatat.</li>';
    }

    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }

        const item = document.createElement('li');
        item.classList.add('transaction-item');
        if (transaction.type === 'expense') {
            item.classList.add('expense');
        }

        const sign = transaction.type === 'income' ? '+' : '-';

        item.innerHTML = `
            <span>${transaction.description}</span>
            <span>${sign} ${formatRupiah(transaction.amount)}</span>
            <button class="btn-delete" onclick="deleteTransaction(${transaction.id})"><i class="fa-solid fa-trash-can"></i> Hapus</button>
        `;

        transactionList.appendChild(item);
    });

    const totalBalance = totalIncome - totalExpense;

    totalSaldoEl.innerText = formatRupiah(totalBalance);
    totalPemasukanEl.innerText = formatRupiah(totalIncome);
    totalPengeluaranEl.innerText = formatRupiah(totalExpense);
    
    let percentage = 0;
    if (totalIncome > 0) {
        percentage = Math.round((totalExpense / totalIncome) * 100);
    }
    statRatioEl.innerText = `${percentage}% dari Pemasukan`;
}