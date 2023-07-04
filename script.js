let money, time;

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
}

const start = () => {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

const chooseExpenses = () => {
    for (let i = 0; i < 2; i++) {
        let answerFirstQuestion = prompt('Введите обязательную статью расходов в этом месяце', ''),
            answerSecondQuestion = prompt('Во сколько обойдется?', '');
    
        if ((typeof(answerFirstQuestion)) === 'string' && (typeof(answerFirstQuestion)) != null && (typeof(answerSecondQuestion)) != null
            && answerFirstQuestion != '' && answerSecondQuestion != '' && answerFirstQuestion.length < 50) {
            appData.expenses[answerFirstQuestion] = answerSecondQuestion;
        } else {
            i--;
        }
    } 
}

const detectDayBudget = () => {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
}

const detectLevel = () => {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
     } else if (appData.moneyPerDay > 2000) {
       console.log('Высокий уровень достатка');
     } else {
       console.log('Произошла ошибка. Доход не определен.');
     }
}

const checkSavings = () => {
    if (appData.savings) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = (save / 100 / 12 * percent).toFixed();
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);  
    }
}

start();
chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();

