let correctAnswers = 0;
let incorrectAnswers = 0;
let question1 = +prompt('Сколько будет 2 + 2 ?').trim();
if (question1 === 4) {
    alert('Правильно! Продолжай в том же духе!')
    correctAnswers++
} else {
    alert('Ошибка. Не расттраивайся, поехали дальше');
    incorrectAnswers++
}
let question2 = +prompt('Сколько будет 2 * 2 ?').trim()
if (question2 === 4) {
    alert('Правильно! Молодец!');
    correctAnswers++
} else {
    alert('Ошибка. Ничего страшного, поехали дальше');
    incorrectAnswers++
}
let question3 = +prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim();
if (question3 === 1) {
    alert('Правильно! Движемся дальше!');
    correctAnswers++
} else {
    alert('Неправильно. Не грусти, у тебя всё получится!');
    incorrectAnswers++
}
let question4 = +prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim();
if (question4 === 12)  {
    alert('Правильно! Умница');
    correctAnswers++
} else {
    alert('Ошибка. Ничего страшного, поехали дальше');
    incorrectAnswers++
}
let question5 = +prompt('Сколько будет 2 + 2 * 2?').trim();
if (question5 === 6) {
    alert('Правильно!');
    correctAnswers++
} else {
    alert('Неправильно!Не расстраивайся, просто повтори пройденные темы');
    incorrectAnswers++
}

alert(`Тест окончен! Правильные ответы: ${correctAnswers}; Неправильные ответы: ${incorrectAnswers}`)