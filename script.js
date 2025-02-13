'use strict';

// Hardcoding data for app
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// Function to create username for account(username is first letters of each word of account.owner property in lower case)
const createUsernames = function (accs) {
    accs.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(` `)
            .map((word) => word.at(0))
            .join(``);
    });
};

// Function for display movement for account according to movement type
function displayMovements(acc) {
    // Clear movements container
    containerMovements.innerHTML = ``;
    // Create div element for each movement according to type of movement and put it in movements container
    acc.movements.forEach((mov, i) => {
        const type = mov > 0 ? `deposit` : `withdrawal`;
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
        containerMovements.insertAdjacentHTML(`afterbegin`, html);
    });
}

// Function for display balance for account according to movements
function calcDisplayBalance(acc) {
    // Calculate balance
    const balance = acc.movements.reduce((acc, mov) => acc + mov);
    // Display balance
    labelBalance.textContent = `${balance}€`;
}

// Function to calculate summary income, outcome and interest for account according to movements
function calcDisplaySummary(acc) {
    // Calculate incomes
    const incomes = acc.movements.filter((mov) => mov > 0).reduce((acc, income) => acc + income);
    // Calculate outcomes
    const outcomes = Math.abs(
        acc.movements.filter((mov) => mov < 0).reduce((acc, outcome) => acc + outcome)
    );
    // Calculate interest
    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        // Condition for getting interest
        .filter((deposit) => deposit >= 1)
        .reduce((acc, interest) => acc + interest);

    // Display income, outcome and interest
    labelSumIn.textContent = `${incomes}€`;
    labelSumOut.textContent = `${outcomes}€`;
    labelSumInterest.textContent = `${interest}€`;
}
