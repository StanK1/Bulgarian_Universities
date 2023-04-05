const table1Id = "#t1";
const table2Id = "#t2";
const table3Id = "#t3";
const table4Id = "#t4";
const table5Id = "#t5";


function showTable(tableId) {
    $(tableId).css('display', 'inline-block');
    // console.log(typeof(tableId));
}

function hideTable(tableId) {
    $(tableId).css('display', 'none');
}

function showResult() {
    $('#button-result').css('display', 'block');
}

function hideResult() {
    $('#button-result').css('display', 'none');
}

function getSpecSelectorValue() {
    return $('#selector').val();
}

function getTableIdForSelectedSpec(option) {
    switch (option) {
        case '1':
            return table1Id;
        case '2':
            return table2Id;
        case '3':
            return table3Id;
        case '4':
            return table4Id;
        case '5':
            return table5Id;
    }
}

function emptyInputs() {
    $('input[type=text]').val('');
    $('input[type=text]').css('border', '1px solid #000000');
    $('#result').text('');
}

function showCalc() {

    emptyInputs();

    let option = getSpecSelectorValue();

    hideTable(table1Id);
    hideTable(table2Id);
    hideTable(table3Id);
    hideTable(table4Id);
    hideTable(table5Id);
    hideResult();


    switch (option) {
        case '1':
            showTable(table1Id);
            showResult();
            break;
        case '2':
            showTable(table2Id);
            showResult();
            break;
        case '3':
            showTable(table3Id);
            showResult();
            break;
        case '4':
            showTable(table4Id);
            showResult();
            break;
        case '5':
            showTable(table5Id);
            showResult();
            break;
    }
}

function getInputs() {

    let option = getSpecSelectorValue();
    let data;

    if (option == '1') {

        data = {
            group1: $(table1Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(table1Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(table1Id + ' .group3 input').map((_, el) => el.value).get()
        };

    } else if (option == '2') {

        data = {
            group1: $(table2Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(table2Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(table2Id + ' .group3 input').map((_, el) => el.value).get()
        };

    } else if (option == '3') {

        data = {
            group1: $(table3Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(table3Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(table3Id + ' .group3 input').map((_, el) => el.value).get()
        };

    } else if (option == '4') {

        data = {
            group1: $(table4Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(table4Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(table4Id + ' .group3 input').map((_, el) => el.value).get()
        };

    } else if (option == '5') {

        data = {
            group1: $(table5Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(table5Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(table5Id + ' .group3 input').map((_, el) => el.value).get()
        };

    }

    return data;

}

function isValidDegree(input) {

    // Remove whitespace from both ends of a string
    input = input.trim();

    //Matches a number between 2 and 6, inclusive
    const regex = /^([2-5]{1}(\.\d{1,2}){0,1}|6(\.0{1,2}){0,1}|^$)$/;
    return regex.test(input)
}

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function isGroupEmpty(group) {

    let hasDegreeInGroup = false;
    for (let i = 0; i < group.length; i++) {
        if (!isEmptyOrSpaces(group[i])) {
            hasDegreeInGroup = true;
            break;
        }
    }
    return hasDegreeInGroup;

}

function areDegreesValid(inputs) {
    let validDegrees = true;
    for (let group in inputs) {

        for (let i = 0; i < inputs[group].length; i++) {
            let groupEl = inputs[group][i];
            let option = getSpecSelectorValue();
            let tableId = getTableIdForSelectedSpec(option);
            $(tableId + ' .' + group + ' input').eq(i).css('border', '1px solid #000000');
            if (!isValidDegree(groupEl)) {
                // Red color to not valid inputs
                $(tableId + ' .' + group + ' input').eq(i).css('border', '1px solid #ff0000');
                validDegrees = false;
            }
        }
    }
    return validDegrees;
}

function validateInputs(inputs) {

    let areInputsValid = true;

    for (let group in inputs) {

        if (!isGroupEmpty(inputs[group])) {
            alert('Не трябва да има празна група с оценки!');
            areInputsValid = false;
            break;
        }
    }

    if (!areDegreesValid(inputs)) {
        alert('Въведете оценките в Диапазона! (От 2.00 до 6.00))');
        areInputsValid = false;
    }

    return areInputsValid;

}

function showFinalResult(result, color) {
    $('#result').text(result);
    $('#result').css('color', color);
}

function makeCalculation(inputs) {

    let finalResult = 'Вашият състезателен бал е = ';
    let total = 0;


    for (let group in inputs) {

        let option = getSpecSelectorValue();
        if (option == '1') {

            if (group == 'group1') {

                let mark = parseFloat(inputs[group][0]);
                if (isNaN(mark)) {
                    finalResult += '0.00';
                } else {
                    finalResult += mark.toFixed(2);
                    total += mark;
                }

            } else if (group == 'group2') {

                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                let groupMax = Math.max.apply(null, marks);

                if (isNaN(groupMax)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + groupMax.toFixed(2);
                    total += groupMax;
                }

            } else if (group == 'group3') {

                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                marks.forEach((element, index) => {
                    if (index == 0 && !isNaN(element)) {
                        marks[index] = element * 2.5;
                    } else if (index > 0 && !isNaN(element)) {
                        marks[index] = element * 3;
                    }
                });
                let groupMax = Math.max.apply(null, marks);

                if (isNaN(groupMax)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + groupMax.toFixed(2);
                    total += groupMax;
                }

            }

        } else if (option == '2') {

            if (group == 'group1') {

                let mark = parseFloat(inputs[group][0]);
                if (isNaN(mark)) {
                    finalResult += '0.00';
                } else {
                    finalResult += mark.toFixed(2);
                    total += mark;
                }

            } else if (group == 'group2') {

                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                let groupMax = Math.max.apply(null, marks);

                if (isNaN(groupMax)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + groupMax.toFixed(2);
                    total += groupMax;
                }

            } else if (group == 'group3') {

                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                marks.forEach((element, index) => {
                    if (!isNaN(element)) {
                        marks[index] = element * 1.5;
                        finalResult += ' + ' + marks[index].toFixed(2);
                        total += marks[index];
                    } else {
                        finalResult += ' + 0.00'
                    }
                });

            }

        } else if (option == '3') {

            if (group == 'group1') {

                let mark = parseFloat(inputs[group][0]);
                if (isNaN(mark)) {
                    finalResult += '0.00';
                } else {
                    finalResult += mark.toFixed(2);
                    total += mark;
                }

            } else if (group == 'group2') {

                let mark = parseFloat(inputs[group][0]);
                if (isNaN(mark)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + mark.toFixed(2);
                    total += mark;
                }

            } else if (group == 'group3') {
                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                marks.forEach((element, index) => {
                    if (index == 0 && !isNaN(element)) {
                        marks[index] = element * 2.5;
                    } else if (index > 0 && !isNaN(element)) {
                        marks[index] = element * 3;
                    }
                });
                let groupMax = Math.max.apply(null, marks);

                if (isNaN(groupMax)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + groupMax.toFixed(2);
                    total += groupMax;
                }
            }

        } else if (option == '4') {

            if (group == 'group1') {

                let mark = parseFloat(inputs[group][0]);
                if (isNaN(mark)) {
                    finalResult += '0.00';
                } else {
                    finalResult += mark.toFixed(2);
                    total += mark;
                }

            } else if (group == 'group2') {

                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                let groupMax = Math.max.apply(null, marks);

                if (isNaN(groupMax)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + groupMax.toFixed(2);
                    total += groupMax;
                }

            } else if (group == 'group3') {
                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                marks.forEach((element, index) => {
                    if (!isNaN(element)) {
                        marks[index] = element * 3;
                    }
                });
                let groupMax = Math.max.apply(null, marks);

                if (isNaN(groupMax)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + groupMax.toFixed(2);
                    total += groupMax;
                }
            }

        } else if (option == '5') {

            if (group == 'group1') {

                let mark = parseFloat(inputs[group][0]);
                if (isNaN(mark)) {
                    finalResult += '0.00';
                } else {
                    finalResult += mark.toFixed(2);
                    total += mark;
                }

            } else if (group == 'group2') {

                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                let groupMax = Math.max.apply(null, marks);

                if (isNaN(groupMax)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + groupMax.toFixed(2);
                    total += groupMax;
                }

            } else if (group == 'group3') {
                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                marks.forEach((element, index) => {
                    if (!isNaN(element)) {
                        marks[index] = element * 3;
                    }
                });
                let groupMax = Math.max.apply(null, marks);

                if (isNaN(groupMax)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + groupMax.toFixed(2);
                    total += groupMax;
                }
            }

        }

    }

    finalResult += (' = ' + total.toFixed(2));
    return finalResult;

}

function calc() {

    let data = getInputs();

    let valid = validateInputs(data);

    if (valid) {
        let result = makeCalculation(data);
        let color = '#000000';
        showFinalResult(result, color);
    }
}