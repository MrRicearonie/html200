/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
let input = '';
let balance = 1000;

function showBalance() {
  alert(`Your current balance is: $${balance}`);
}

function withdraw() {
  let done = false;
  let warningLoop = true;
  let inputAmount;
  let amount;
  while (!done) {
    inputAmount = prompt('How much would you like to withdraw? (enter 0 to cancel)');
    // Make sure the user entered input is a number
    try {
      amount = Number(inputAmount);
      // If the user enters a number above 0 then try to withdraw
      if (amount > 0) {
        // If the user will have $300 or more left, let them withdraw
        if (balance - amount >= 300) {
          balance -= amount;
          done = true;
        // If the user will have less than $300 left, ask before withdraw
        } else if (amount <= balance) {
          while (warningLoop) {
            input = prompt(`If you withdraw the current amount you will have $${balance - amount} left. Would you like to continue ('Y' for yes, 'N' for no)?`).toUpperCase();
            // Withdraw if user selects Y
            if (input === 'Y') {
              balance -= amount;
              warningLoop = false;
              done = true;
            // Go back to withdraw menu if user selects N
            } else if (input === 'N') {
              warningLoop = false;
            // Get another input if user does not enter Y or N
            } else {
              alert('Invalid selection. Please try again.');
            }
          }
          // Reset loop in case the user enters another number that will bring balance < $300
          warningLoop = true;
        // Alert user that they will go into the negitive with current amount
        } else {
          alert(`You currently have $${balance} in your account, and $${amount} will put your account in the negative`);
        }
      // If the user enters 0, they want to not withdraw, exit
      } else if (amount === 0) {
        done = true;
      // The user enters a negitive number! Do not accept it
      } else {
        alert('Cannot enter a negative amount.');
      }
    } catch (error) {
      alert('Invalid input. Please try again.');
    }
  }
  showBalance();
}

function deposit() {
  let done = false;
  let inputAmount;
  let amount;
  while (!done) {
    inputAmount = prompt('How much would you like to deposit? (enter 0 to cancel)');
    // Make sure the user enters a number as an input
    try {
      amount = Number(inputAmount);
      // The user has a $50,000 deposit cap
      if (amount > 50000) {
        alert('Sorry, you cannot deposit more than $50,000 at one time.');
      // The user needs to enter a positive number
      } else if (amount > 0) {
        balance += amount;
        done = true;
      // If user enters '0' they don't want to deposit, exit
      } else if (amount === 0) {
        done = true;
      // If the user enters in a negative amount, send them back to the top
      } else {
        alert('Cannot enter a negative amount.');
      }
    } catch (error) {
      alert('Invalid input. Please try again.');
    }
  }
  showBalance();
}

function banking() {
  let done = false;
  while (!done) {
    input = prompt('Enter command \r\nQ: Quit\r\nW: Withdraw\r\nD: Deposit\r\nB: View Balance').toUpperCase();
    switch (input) {
      case 'Q':
        alert('Thank you for using BankX!');
        done = true;
        break;
      case 'W':
        withdraw();
        break;
      case 'D':
        deposit();
        break;
      case 'B':
        showBalance();
        break;
      default:
        alert('Invalid selection');
        break;
    }
  }
}
