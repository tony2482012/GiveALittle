// the maximum number of questions and options per question
const MAX_QUESTIONS = 25;
const MAX_OPTIONS = 10;
// holds the number of questions in the poll
var questionCount = 0;

$("#fr").click(function () {
    questionCount++;
    if (questionCount > MAX_QUESTIONS) {
        alert("Sorry, you may only add up to " + MAX_QUESTIONS + " per poll.");
        questionCount--;
    } else {
        var newQuestion = new FreeResponse();
        $("#qBlock").append(newQuestion.qTextHTML());
    }
    initBtnRem("FreeResponse", questionCount);
});

function FreeResponse() {
    this.qTextHTML = function () {
        return '<div class="form-group" id="q' + questionCount + '">' +
            '<label>Question ' + questionCount + ': Free Response' +
            '<input type="text" class="form-control" name="questions[][FreeResponse]">' +
            btnRem(questionCount) +
            '</label>' +
            '</div>';
    };
}


$("#ss").click(function () {
    questionCount++;
    if (questionCount > MAX_QUESTIONS) {
        alert("Sorry, you may only add up to " + MAX_QUESTIONS + " per poll.");
        questionCount--;
    } else {
        var newQuestion = new MultipleChoice("Single Selection");
        $("#qBlock").append(newQuestion.qTextHTML());
    }
    initBtnRem('SingleSelection', questionCount);
    initBtnOAdd(questionCount);
});

$("#ms").click(function () {
    questionCount++;
    if (questionCount > MAX_QUESTIONS) {
        alert("Sorry, you may only add up to " + MAX_QUESTIONS + " per poll.");
        questionCount--;
    } else {
        var newQuestion = new MultipleChoice("Multiple Selection");
        $("#qBlock").append(newQuestion.qTextHTML());
    }
    initBtnRem('MultipleSelection', questionCount);
    initBtnOAdd(questionCount);
});

function MultipleChoice(qType) {
    // the question type without whitespace; for the option array
    noWSType = qType.replace(' ', '');
    this.qTextHTML = function () {
        return '<div class="form-group" id="q' + questionCount + '">' +
            '<label> Question ' + questionCount + ': ' + qType +
            '<input type="text" class="form-control qText" name="questions[][' + noWSType + ']">' +
            btnRem(questionCount) +
            '<div class="form-group input-field option-block">' +
            '<label class="option">Option' +
            '<input type=text class="form-control" name="options[' + questionCount + '][]">' +
            '</label>' +
            '<label class="option">Option' +
            '<input type=text class="form-control" name="options[' + questionCount + '][]">' +
            '</label>' +
            '</div>' +
            btnOAdd(questionCount) +
            '</label>' +
            '</div>';
    };
}

// button to remove a question
function btnRem(qNum) {
    return '<button type="button" class="btn btn-default" id="btn-rem' + qNum + '">Remove Question</button>'
}

// event hander for the btn-rem
function initBtnRem(noWSType, qNum) {
    $("#btn-rem" + qNum).click(function () {
        $(this).parent().parent().remove();
        // remove and reID the following questions
        for (i = qNum; i < questionCount; i++) {
            // reID the following question's div
            $("#q" + (i + 1)).attr('id', "q" + i);
            // save the text in the question textbox (relabeling the question removes it)
            var savedText = $("#q" + i + " .qText").val();
            // relabel the question
            $("#q" + i).html($("#q" + i).html().replace(/Question [0-9][0-9]*/, "Question " + i));
            // replace the question text
            $("#q" + i + " .qText").val(savedText);
            // reID the following question's remove button
            $("#btn-rem" + (i + 1)).attr('id', "btn-rem" + i);
            // reset the event listener on the reID'd remove button
            $("#btn-rem" + i).unbind();
            initBtnRem(noWSType, i);
            //reID the add following question's add option button if MS or SS
            $("#btn-oAdd" + (i + 1)).attr('id', "btn-oAdd" + i);
            //reset the event listener on the reID'd add button
            $("#btn-oAdd" + i).unbind()
            initBtnOAdd(i);
        }
        questionCount--;
    });
}

// creates the HTML button to add option
function btnOAdd(qNum) {
    return '<button type="button" class="btn btn-default" id="btn-oAdd' + qNum + '">Add Option</button>';
}

// gives each add option button the ability to add an option field to the question
function initBtnOAdd(qNum) {
    $("#btn-oAdd" + qNum).click(function () {
        if (($(this).prev().children().length) >= MAX_OPTIONS) {
            alert("Sorry, you may only have " + MAX_OPTIONS + " options per question.")
        } else {
            $(this).prev().append(addOption(qNum));
        }
    });
}

// creates the HTML input box
function addOption(qNum) {
    return '<label class="option">Option' +
        '<input type=text class="form-control" name="options[' + qNum + '][]">' +
        '</label>';
}

$('input[name="theme"]').click(function () {
    themeSelector();
});

function themeSelector() {
    var selectedTheme = $('input[name=theme]:checked').val();
    var body = document.querySelector("body");
    switch (selectedTheme) {
        case "Light":
            body.style.backgroundColor = "#dadada";
            body.style.color = "black";
            break;
        case "Dark":
            body.style.backgroundColor = "#232323";
            body.style.color = "#777777";
            break;
        case "Forest":
            body.style.backgroundColor = "#498645";
            body.style.color = "#222222";
            break;
        case "Seaside":
            body.style.backgroundColor = "#2A82ED";
            body.style.color = "#222222";
            break;
        default:
            body.style.backgroundColor = "#46C6C6";
            body.style.color = "white;"
    }
}