let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

const appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answerFirstQuestion1 = prompt('Введите обязательную статью расходов в этом месяце'),
    answerFirstQuestion2 = prompt('Во сколько обойдется?'),

    answerFirstQuestion3 = prompt('Введите обязательную статью расходов в этом месяце'),
    answerFirstQuestion4 = prompt('Во сколько обойдется?');

appData.expenses[answerFirstQuestion1] = answerFirstQuestion2;
appData.expenses[answerFirstQuestion3] = answerFirstQuestion4;

alert(appData.money / 30);

