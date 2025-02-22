'use strict';

// Hardcoding data for app
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2025-02-15T14:11:59.604Z',
        '2025-02-18T17:01:17.194Z',
        '2025-02-19T23:36:17.929Z',
        '2025-02-19T10:51:36.790Z',
    ],
    locale: 'pt-PT',
    currency: `EUR`,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2025-02-17T18:49:59.371Z',
        '2025-02-19T12:01:20.894Z',
    ],
    locale: 'en-US',
    currency: `USD`,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2025-02-15T14:11:59.604Z',
        '2025-02-18T17:01:17.194Z',
        '2025-02-19T23:36:17.929Z',
        '2025-02-19T10:51:36.790Z',
    ],
    locale: `en-GB`,
    currency: `GBP`,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-12-25T06:04:23.907Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2025-02-19T12:01:20.894Z',
    ],
    locale: `en-GB`,
    currency: `GBP`,
};

const account5 = {
    owner: "Il'ya Emel'yanov",
    movements: [15000, 10000, -7000, 502, 905, -1250],
    interestRate: 2,
    pin: 1414,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-04-01T10:17:24.185Z',
        '2025-02-15T14:11:59.604Z',
        '2025-02-19T23:36:17.929Z',
        '2025-02-19T10:51:36.790Z',
    ],
    locale: `ru-RU`,
    currency: `RUB`,
};

const account6 = {
    owner: 'Olya Skryabina',
    movements: [1000, 9520, 1000, -5267, -55, -1250],
    interestRate: 1.7,
    pin: 5555,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',

        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',

        '2020-04-10T14:43:26.374Z',
        '2025-02-17T18:49:59.371Z',
        '2025-02-19T12:01:20.894Z',
    ],
    locale: `kk-KZ`,
    currency: `KZT`,
};

const account7 = {
    owner: 'Buket Arturov',
    movements: [200000, 200000, -36, -1234, 200000],
    interestRate: 2,
    pin: 6666,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',

        '2020-04-01T10:17:24.185Z',

        '2025-02-18T17:01:17.194Z',
        '2025-02-19T23:36:17.929Z',
        '2025-02-19T10:51:36.790Z',
    ],
    locale: `ja-JP`,
    currency: `JPY`,
};

const account8 = {
    owner: 'Gleb Fedoseev',
    movements: [200, -179],
    interestRate: 0,
    pin: 1337,
    movementsDates: ['2025-02-17T18:49:59.371Z', '2025-02-19T12:01:20.894Z'],
    locale: `ru-RU`,
    currency: `RUB`,
};

const accounts = [account1, account2, account3, account4, account5, account6, account7, account8];

// Getting all elements in document
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Create usernames for all existing accounts
createUsernames(accounts);

// Options for data format
const dateOptions = {
    hour: `numeric`,
    minute: `numeric`,
    day: `numeric`,
    month: `numeric`,
    year: `numeric`,
};

// Log in to account
let currentAccount;
btnLogin.addEventListener(`click`, function (e) {
    // Prevent form from submitting and reload page
    e.preventDefault();
    // Finding account according to username input
    currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
    // Checking login and pin
    if (currentAccount?.username && currentAccount?.pin === +inputLoginPin.value) {
        // ------------------------------------------------------------------------------------------------ Исправить логику
        // If login and pin is correct
        // Display UI and welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(` `).at(0)}!`;
        containerApp.style.opacity = 100;
        // Display loggin time according to account locale
        const logTime = new Date();
        labelDate.textContent = Intl.DateTimeFormat(currentAccount.locale, dateOptions).format(logTime);
        // Set sort to default
        sort = false;
        // Display balance, movements and etc.
        updateUI(currentAccount);
    } else {
        // If login and pin is incorrect
        alert(`Incorrect login or password!`);
        inputLoginUsername.value = inputLoginPin.value = ``;
    }
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    // Reset pointer and focus
    inputLoginPin.blur();
});

// Transfer
btnTransfer.addEventListener(`click`, function (e) {
    e.preventDefault();
    // Finding account of receiver
    const receiver = accounts.find((acc) => acc.username === inputTransferTo.value);
    const amount = +inputTransferAmount.value;
    // Checking receiver account is exist, sender account is not receiver account, positive sum to transfer and amount did not exceed balance
    if (receiver && receiver.username !== currentAccount.username && amount > 0 && currentAccount.balance >= amount) {
        // Valid transfer
        // Add new transactions on both accounts
        currentAccount.movements.push(-amount);
        receiver.movements.push(amount);
        // Add transfer time
        currentAccount.movementsDates.push(new Date().toISOString());
        receiver.movementsDates.push(new Date().toISOString());
        // Display updated balance, transactions and summary of current account
        updateUI(currentAccount);
    } else {
        // -------------------------------------------------------------------- Добавить уведомления для различных причин невыполнения операции
        alert(`Invalid operation!`);
    }
    inputTransferTo.value = inputTransferAmount.value = ``;
    inputTransferAmount.blur();
});

// Close account
btnClose.addEventListener(`click`, function (e) {
    e.preventDefault();
    // Checking the account being closed is current account
    if (inputCloseUsername.value === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
        // Confirm closing account
        const confirm = prompt(`You are about to close your account. Write YES to confirm, or NO to cancel.`);
        // If closing account is confirmed
        if (confirm === `YES`) {
            // Finding closing account by input username
            const index = accounts.findIndex((acc) => acc.username === inputCloseUsername.value);
            // Delete closing account from accounts
            accounts.splice(index, 1);
            // Hiding UI and reset welcome message
            labelWelcome.textContent = `Log in to get started`;
            containerApp.style.opacity = 0;
        }
    }
    inputCloseUsername.value = inputClosePin.value = ``;
    inputClosePin.blur();
});

// Sorting transactions
// Disable sorting by default
let sort = false;
btnSort.addEventListener(`click`, function (e) {
    e.preventDefault();
    // Sorting transactions
    displayMovements(currentAccount, !sort);
    // Toggle sort condition
    sort = !sort;
});

btnLoan.addEventListener(`click`, function (e) {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);
    // Checking posibility to get loan
    if (amount > 0 && currentAccount.movements.some((mov) => mov >= amount * 0.1)) {
        // Approving loan
        alert(`The requested loan amount has been approved!`);
        // Adding loan to transactions
        currentAccount.movements.push(amount);
        // Add loan time
        currentAccount.movementsDates.push(new Date().toISOString());

        updateUI(currentAccount);
    } else {
        // Loan not approved
        alert(
            `Unfortunately, the requested loan amount cannot be approved. At least one deposit in your transaction history must be at least 10% of the requested loan amount. The maximum loan amount for you is ${
                currentAccount.maxDeposit * 10
            }€.`
        );
    }
    inputLoanAmount.value = ``;
    inputLoanAmount.blur();
});

// Function to create username for account(username is first letters of each word of account.owner property in lower case)
function createUsernames(accs) {
    accs.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(` `)
            .map((word) => word.at(0))
            .join(``);
    });
}

// Function for display transaction for account according to movement type
function displayMovements(acc, sort = false) {
    // Clear transactions container
    containerMovements.innerHTML = ``;
    // Sorting transactions by ascendening according to sort condition
    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
    // Create div element for each transaction according to type of movement and movement date and put it in transactions container
    movs.forEach((mov, i) => {
        const type = mov > 0 ? `deposit` : `withdrawal`;
        const movDate = getFormattedDate(new Date(acc.movementsDates[i]), acc.locale);
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${movDate}</div>
          <div class="movements__value">${formatCurrency(mov, acc.locale, acc.currency)}</div>
        </div>
    `;
        containerMovements.insertAdjacentHTML(`afterbegin`, html);
    });
}

// Function for display balance for account according to transactions
function calcDisplayBalance(acc) {
    // Calculate balance
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov);
    // Display balance
    labelBalance.textContent = `${formatCurrency(acc.balance, acc.locale, acc.currency)}`;
}

// Function to calculate summary income, outcome and interest for account according to transactions
function calcDisplaySummary(acc) {
    // Calculate incomes
    const incomes = acc.movements.filter((mov) => mov > 0).reduce((acc, income) => acc + income, 0);
    // Calculate outcomes
    const outcomes = Math.abs(acc.movements.filter((mov) => mov < 0).reduce((acc, outcome) => acc + outcome, 0));
    // Calculate interest
    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        // Condition for getting interest
        .filter((deposit) => deposit >= 1)
        .reduce((acc, interest) => acc + interest, 0);

    // Display income, outcome and interest
    labelSumIn.textContent = `${formatCurrency(incomes, acc.locale, acc.currency)}`;
    labelSumOut.textContent = `${formatCurrency(outcomes, acc.locale, acc.currency)}`;
    labelSumInterest.textContent = `${formatCurrency(interest, acc.locale, acc.currency)}`;
}

// Getting max deposite from transactions
function getMaxDeposite(acc) {
    acc.maxDeposit = acc.movements
        .slice()
        .sort((a, b) => a - b)
        .splice(-1);
}

// Updating UI function
function updateUI(acc) {
    // Calculate and display balance
    calcDisplayBalance(currentAccount);
    // Display transactions
    displayMovements(currentAccount);
    // Calculate and display summary
    calcDisplaySummary(currentAccount);
    // Getting max deposite
    getMaxDeposite(currentAccount);
}

// Getting formatted date string for year, month and etc.
function getDateStr(date) {
    return `${date}`.padStart(2, `0`);
}

// Getting passed days between 2 dates
function calcDaysPassed(date1, date2) {
    return Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
}

// Getting today/yesterday or day/month/year string for movements date according account to locale and passed days from date of movement
function getFormattedDate(date, locale) {
    const daysPassed = calcDaysPassed(new Date(), date);

    if (daysPassed == 0) return `Today`;
    if (daysPassed == 1) return `Yesterday`;
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    return Intl.DateTimeFormat(locale).format(date);
}

// Getting formatted string for currency according to currency type and locale of account
function formatCurrency(value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: `currency`,
        currency: currency,
    }).format(value);
}
