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