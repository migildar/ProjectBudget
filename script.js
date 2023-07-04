let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let answerFirstQuestion = prompt('Введите обязательную статью расходов в этом месяце'),
        answerSecondQuestion = prompt('Во сколько обойдется?');

    if ((typeof(answerFirstQuestion)) === 'string' && (typeof(answerFirstQuestion)) != null && (typeof(answerSecondQuestion)) != null
        && answerFirstQuestion != '' && answerSecondQuestion != '' && answerFirstQuestion.length < 50) {
        appData.expenses[answerFirstQuestion] = answerSecondQuestion;
    } else {
        i--;
    }
}    

appData.moneyPerDay = appData.budget / 30;
alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);

