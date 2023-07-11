let money, time;

const start = () => {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
};

start();

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: () => {
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
    },
    detectDayBudget: () => {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
    },
    detectLevel: () => {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
         } else if (appData.moneyPerDay > 2000) {
           console.log('Высокий уровень достатка');
         } else {
           console.log('Произошла ошибка. Доход не определен.');
         }
    },
    checkSavings: () => {
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
            appData.monthIncome = (save / 100 / 12 * percent).toFixed();
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);  
        }
    },
    chooseOptExpenses: () => {
        for (let i = 1; i < 3; i++) {
            let answer = prompt ('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = answer;
        }
    },
    chooseIncome: () => {
        let answer = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = answer.split(',');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();  
    }
};

appData.chooseExpenses();