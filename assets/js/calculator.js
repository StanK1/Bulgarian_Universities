const tableTUS1Id = "#tTUS1";
const tableTUS2Id = "#tTUS2";
const tableTUS3Id = "#tTUS3";
const tableTUS4Id = "#tTUS4";
const tableTUS5Id = "#tTUS5";
const tableIUVId = "#tIUV";
const tableTUG1Id = "#tTUG1";
const tableTUG2Id = "#tTUG2";
const tableMUPId = "#tMUP";
const tableSUFMIId = "#tSUFMI";
//---------------------------------------------
const MUPprom = "#MUPprom";

//calculator
function showTable(tableId) {
    $(tableId).css('display', 'inline-block');
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

function getSpecselectorValue() {
    return $('#selector').val();
}

function getTableIdForSelectedSpec(option) {
    switch (option) {
        case 'TUS1':
            return tableTUS1Id;
        case 'TUS2':
            return tableTUS2Id;
        case 'TUS3':
            return tableTUS3Id;
        case 'TUS4':
            return tableTUS4Id;
        case 'TUS5':
            return tableTUS5Id;
        case 'IUV':
            return tableIUVId;
        case 'TUG1':
            return tableTUG1Id;
        case 'TUG2':
            return tableTUG2Id;
        case 'MUP':
            return tableMUPId;
        case 'SUFMI':
            return tableSUFMIId;
    }
}

function emptyInputs() {
    $('input[type=text]').val('');
    $('input[type=text]').css('border', '1px solid rgb(255, 255, 255)');
    $('#result').text('');
}

function showCalc() {

    emptyInputs();

    let option = getSpecselectorValue();

    hideTable(tableTUS1Id);
    hideTable(tableTUS2Id);
    hideTable(tableTUS3Id);
    hideTable(tableTUS4Id);
    hideTable(tableTUS5Id);
    hideTable(tableIUVId);
    hideTable(tableTUG1Id);
    hideTable(tableTUG2Id);
    hideTable(tableMUPId);
    hideTable(tableSUFMIId);
    hideResult();


    switch (option) {
        case 'TUS1':
            showTable(tableTUS1Id);
            showResult();
            break;
        case 'TUS2':
            showTable(tableTUS2Id);
            showResult();
            break;
        case 'TUS3':
            showTable(tableTUS3Id);
            showResult();
            break;
        case 'TUS4':
            showTable(tableTUS4Id);
            showResult();
            break;
        case 'TUS5':
            showTable(tableTUS5Id);
            showResult();
            break;
        case 'IUV':
            showTable(tableIUVId);
            showResult();
            break;
        case 'TUG1':
            showTable(tableTUG1Id);
            showResult();
            break;
        case 'TUG2':
            showTable(tableTUG2Id);
            showResult();
            break;
        case 'MUP':
            showTable(tableMUPId);
            showResult();
            break;
        case 'SUFMI':
            showTable(tableSUFMIId);
            showResult();
            break;
    }
}

function getInputs() {

    let option = getSpecselectorValue();
    let data;

    if (option == 'TUS1') {

        data = {
            group1: $(tableTUS1Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableTUS1Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableTUS1Id + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    } 
    if (option == 'TUS2') {

        data = {
            group1: $(tableTUS2Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableTUS2Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableTUS2Id + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    }
    if (option == 'TUS3') {

        data = {
            group1: $(tableTUS3Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableTUS3Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableTUS3Id + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    }
    if (option == 'TUS4') {

        data = {
            group1: $(tableTUS4Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableTUS4Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableTUS4Id + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    }
    if (option == 'TUS5') {

        data = {
            group1: $(tableTUS5Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableTUS5Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableTUS5Id + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    }
    if (option == 'IUV') {

        data = {
            group1: $(tableIUVId + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableIUVId + ' .group2 input').map((_, el) => el.value).get()
        };
        return data;
    }
    if (option == 'TUG1') {

        data = {
            group1: $(tableTUG1Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableTUG1Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableTUG1Id + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    }
    if (option == 'TUG2') {

        data = {
            group1: $(tableTUG2Id + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableTUG2Id + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableTUG2Id + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    }
    if (option == 'MUP') {

        data = {
            group1: $(tableMUPId + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableMUPId + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableMUPId + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    }
    if (option == 'SUFMI') {

        data = {
            group1: $(tableSUFMIId + ' .group1 input').map((_, el) => el.value).get(),
            group2: $(tableSUFMIId + ' .group2 input').map((_, el) => el.value).get(),
            group3: $(tableSUFMIId + ' .group3 input').map((_, el) => el.value).get()
        };
        return data;
    }

    //return data;

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
            let option = getSpecselectorValue();
            let tableId = getTableIdForSelectedSpec(option);
            $(tableId + ' .' + group + ' input').eq(i).css('border', '1px solid #FFFFFF)');
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

        let option = getSpecselectorValue();
        switch (option) {
            case 'TUS1':{

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
            break;
        }
        case 'TUS2': {

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
            break;
        }
        case 'TUS3': {

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
            break;
        } 
        case 'TUS4': {

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
            break;
        }
         case 'TUS5': {
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
            break;

        }
        case 'IUV': {
            if (group == 'group1') {

                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                let groupMax = Math.max.apply(null, marks);
                if (groupMax>=5) {
                    finalResult = "Влизате, понеже сте получили оценка" + " " + groupMax + " на КСИ";
                    return finalResult;

                } else {
                    
                
                if (isNaN(groupMax)) {
                    finalResult += '0.00';
                } else {
                    finalResult += groupMax.toFixed(2);
                    total += groupMax;
                }
            }

            } else if (group == 'group2') {
                
                //sum funtion
                let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                let sum = marks.reduce((total, current) => total + current, 0);

                if (isNaN(sum)) {
                    finalResult += ' + 0.00';
                } else {
                    finalResult += ' + ' + sum.toFixed(2);
                    total += sum;
                }

            }
            break;
        }
        case 'TUG1': {

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
                        marks[index] = element * 2;
                    } else if (index > 0 && !isNaN(element)) {
                        marks[index] = element * 2;
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
            break;
        }
        case 'TUG2': {

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
                        marks[index] = element * 2;
                    } else if (index > 0 && !isNaN(element)) {
                        marks[index] = element * 2;
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
            break;
         }
        
         case 'MUP': {

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
                    marks.forEach((element, index) => {
                        if (index == 0 && !isNaN(element)) {
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
                } else if (group == 'group3') {
                    let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                    marks.forEach((element, index) => {
                        if (index == 0 && !isNaN(element)) {
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
                break;
            }
             case 'SUFMI':{

                if (group == 'group1') {
    
                    let marks = inputs[group].map(i => i == '' ? 0 : parseFloat(i));
                    marks.forEach((element, index) => {
                        if (index == 3 && !isNaN(element)) {
                            marks[index] = element * 2.5;
                        } else if (index == 1 && !isNaN(element)) {
                            marks[index] = element * 3;
                        }
                        else if (index == 2 && !isNaN(element)) {
                            marks[index] = element * 2.75;
                        }
                        else(!isNaN(element))
                            marks[index] = element * 3.25;
                        
                    });
                    let groupMax = Math.max.apply(null, marks);
    
                    if (isNaN(groupMax)) {
                        finalResult += ' + 0.00';
                    } else {
                        finalResult += ' + ' + groupMax.toFixed(2);
                        total += groupMax;
                    }
    
                } else (group == 'group2') 
    
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
        let color = '#FFFFFF';
        showFinalResult(result, color);
    }
}
// Тази част от кода проверява дали си добър кандидат или не
let finalMan = 'Мъже - ';
let finalWoman = 'Жени - ';
    let total = 0;
    function compareNumbers() {

        document.getElementById('Man').textContent = ` is greater than .`;
        return finalMan;

    }



//text boxes

//All cities
$("select[name='NameCity']").change(function() {
    //Sofia
    if ($(this).val() !== "sofia") {
        $("select[id='UniSelector'] option[name='TUS'], select[id='UniSelector'] option[name='SU']").addClass('hidden');

      
    } else {
        $("select[id='UniSelector'] option[name='TUS'], select[id='UniSelector'] option[name='SU']").removeClass('hidden');
      
    }
    //Gabrovo
    if ($(this).val() !== "gabrovo") {
        $("select[id='UniSelector'] option[name='TUG']").addClass('hidden');

      
    } else {
        $("select[id='UniSelector'] option[name='TUG']").removeClass('hidden');
      
    }
    //Veliko Tarnovo
    if ($(this).val() !== "veliko-tarnovo") {
        $("select[id='UniSelector'] option[name='VU']").addClass('hidden');

      
    } else {
        $("select[id='UniSelector'] option[name='VU']").removeClass('hidden');
      
    }

    //Varna
    if ($(this).val() !== "varna") {
        $("select[id='UniSelector'] option[name='IUV']").addClass('hidden');

      
    } else {
        $("select[id='UniSelector'] option[name='IUV']").removeClass('hidden');
      
    }

    //Pleven
    if ($(this).val() !== "pleven") {
        $("select[id='UniSelector'] option[name='MUP']").addClass('hidden');

      
    } else {
        $("select[id='UniSelector'] option[name='MUP']").removeClass('hidden');
      
    }
    // Да добавя и още градове
  });

  function hideTableFinal(){
    hideTable(tableTUS1Id);
      hideTable(tableTUS2Id);
      hideTable(tableTUS3Id);
      hideTable(tableTUS4Id);
      hideTable(tableTUS5Id);
      hideTable(tableIUVId);
      hideTable(tableTUG1Id);
      hideTable(tableTUG2Id);
      hideTable(tableMUPId);
      hideTable(tableSUFMIId);
  }

//Софйиски Университет
$("select[name='NameUni']").change(function() {
    if ($(this).val() !== "SUFMI") {
      $("select[id='selector'] option[name='SUFMI']").addClass('hidden');
      hideTableFinal();

    } else {
      $("select[id='selector'] option[name='SUFMI']").removeClass('hidden');
      
    }
  });

//Технически Универстет София
$("select[name='NameUni']").change(function() {
    if ($(this).val() !== "TUS") {
      $("select[id='selector'] option[name='TUS']").addClass('hidden');
      hideTableFinal();

    } else {
      $("select[id='selector'] option[name='TUS']").removeClass('hidden');
      
    }
  });

  //Варненски Икономически Университет
  $("select[name='NameUni']").change(function() {
    if ($(this).val() !== "IUV") {
      $("select[id='selector'] option[name='IUV']").addClass('hidden');
      hideTableFinal();

    } else {
      $("select[id='selector'] option[name='IUV']").removeClass('hidden');
      
    }
  });

  //Технически университет Габрово

  $("select[name='NameUni']").change(function() {
    if ($(this).val() !== "TUG") {
      $("select[id='selector'] option[name='TUG']").addClass('hidden');
      hideTableFinal();
    } else {
      $("select[id='selector'] option[name='TUG']").removeClass('hidden');
      
    }
  });
  //Медицински Университет Плевен
  $("select[name='NameUni']").change(function() {
    if ($(this).val() !== "MUP") {
      $("select[id='selector'] option[name='MUP']").addClass('hidden');
      hideTableFinal();
    } else {
      $("select[id='selector'] option[name='MUP']").removeClass('hidden');
      
    }
  });
  //Велико Търновски Университет
  $("select[name='NameUni']").change(function() {
    if ($(this).val() !== "VU") {
      $("select[id='selector'] option[name='VU']").addClass('hidden');
      hideTableFinal();
    } else {
      $("select[id='selector'] option[name='VU']").removeClass('hidden');
      
    }
  });










/*
  $("select[name='selector']").change(function() {
    if ($(this).id() !== "MUP1") {
      $("id='MUPprom'").addClass('hidden');
      hideTableFinal();
    } else {
      $("id='MUPprom'").removeClass('hidden');
      
    }
  });

*/
  const yearSelector = document.getElementById('year');
  const klasiraneSelector = document.getElementById('klasirane');
  const resultBalManElement = document.getElementById('resultBalMan');
  const resultBalWomanElement = document.getElementById('resultBalWoman');
  let alert1 = "Върнете се на предишно класиране";

  let BalMU2022 = [37.00, 35.40, 34.83, 32.88, 32.37, 32.25, 33.72, 31.20, 28.80, 26.74, alert1, alert1];

  klasiraneSelector.addEventListener('change', updateResult);

  function updateResult() {
    const yearValue = yearSelector.value;
    const klasiraneValue = klasiraneSelector.value;

    let resultbalM = 'Мъже = ';
    let resultbalW = 'Жени = ';
    

    if (yearValue === '2022') {
      switch (klasiraneValue) {
        case 'I':
          resultbalM += BalMU2022[6].toString();
          resultbalW += BalMU2022[0].toString();
          break;
        case 'II':
          resultbalM += BalMU2022[7].toString();
          resultbalW += BalMU2022[1].toString();
          break;
        case 'III':
          resultbalM += BalMU2022[8].toString();
          resultbalW += BalMU2022[2].toString();
          break;
        case 'IV':
          resultbalM += BalMU2022[9].toString();
          resultbalW += BalMU2022[3].toString();
          break;
        case 'V':
          resultbalM += BalMU2022[10].toString();
          resultbalW += BalMU2022[4].toString();
          break;
        case 'VI':
          resultbalM += BalMU2022[11].toString();
          resultbalW += BalMU2022[5].toString();
          break;
        default:
          resultbal = '';
      }
    
    } else if (yearValue === '2021') {
      switch (klasiraneValue) {
        case 'I':
          resultbal = '11';
          break;
        case 'II':
          resultbal = '12';
          break;
        case 'III':
          resultbal = '13';
          break;
        case 'IV':
          resultbal = '14';
          break;
        case 'V':
          resultbal = '15';
          break;
        case 'VI':
          resultbal = '16';
          break;
        default:
          resultbal = '';
      }
    
    }
    resultBalManElement.textContent = resultbalM;
    resultBalWomanElement.textContent = resultbalW;
  }

  