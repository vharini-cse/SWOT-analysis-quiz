// =========================================
// SWOT ANALYSIS QUIZ
// =========================================


// =========================================
// QUESTIONS
// =========================================

const questions = [

    {
        question: "How confident are you when learning something new?",

        options: [
            {
                text: "💪 Very confident",
                type: "strength"
            },
            {
                text: "🌱 Somewhat confident",
                type: "opportunity"
            },
            {
                text: "🔧 Not very confident",
                type: "weakness"
            },
            {
                text: "⚡ I usually avoid new things",
                type: "threat"
            }
        ]
    },


    {
        question: "How well do you manage your time?",

        options: [
            {
                text: "💪 I manage my time very well",
                type: "strength"
            },
            {
                text: "🌱 I am trying to improve my time management",
                type: "opportunity"
            },
            {
                text: "🔧 I often struggle to manage my time",
                type: "weakness"
            },
            {
                text: "⚡ Deadlines often make me stressed",
                type: "threat"
            }
        ]
    },


    {
        question: "How do you handle challenges?",

        options: [
            {
                text: "💪 I face challenges confidently",
                type: "strength"
            },
            {
                text: "🌱 I see challenges as learning opportunities",
                type: "opportunity"
            },
            {
                text: "🔧 I sometimes lose confidence",
                type: "weakness"
            },
            {
                text: "⚡ I tend to avoid difficult situations",
                type: "threat"
            }
        ]
    },


    {
        question: "How comfortable are you working with other people?",

        options: [
            {
                text: "💪 I enjoy teamwork",
                type: "strength"
            },
            {
                text: "🌱 I want to improve my communication skills",
                type: "opportunity"
            },
            {
                text: "🔧 I find teamwork difficult sometimes",
                type: "weakness"
            },
            {
                text: "⚡ I prefer avoiding group activities",
                type: "threat"
            }
        ]
    },


    {
        question: "How do you respond to feedback?",

        options: [
            {
                text: "💪 I use feedback to improve myself",
                type: "strength"
            },
            {
                text: "🌱 I see feedback as a chance to learn",
                type: "opportunity"
            },
            {
                text: "🔧 I sometimes take feedback personally",
                type: "weakness"
            },
            {
                text: "⚡ I avoid situations where I may receive criticism",
                type: "threat"
            }
        ]
    }

];


// =========================================
// VARIABLES
// =========================================

let currentQuestion = 0;

let selectedAnswer = null;

let scores = {
    strength: 0,
    weakness: 0,
    opportunity: 0,
    threat: 0
};


// =========================================
// HTML ELEMENTS
// =========================================

const startBtn =
    document.getElementById("startBtn");

const nextBtn =
    document.getElementById("nextBtn");

const restartBtn =
    document.getElementById("restartBtn");


const introSection =
    document.getElementById("introSection");

const quizSection =
    document.getElementById("quizSection");

const resultSection =
    document.getElementById("resultSection");


const questionNumber =
    document.getElementById("questionNumber");

const progressText =
    document.getElementById("progressText");

const progressBar =
    document.getElementById("progressBar");


const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");


const strengthScore =
    document.getElementById("strengthScore");

const weaknessScore =
    document.getElementById("weaknessScore");

const opportunityScore =
    document.getElementById("opportunityScore");

const threatScore =
    document.getElementById("threatScore");


const strengthBar =
    document.getElementById("strengthBar");

const weaknessBar =
    document.getElementById("weaknessBar");

const opportunityBar =
    document.getElementById("opportunityBar");

const threatBar =
    document.getElementById("threatBar");


const strongestArea =
    document.getElementById("strongestArea");

const strongestDescription =
    document.getElementById("strongestDescription");

const resultMessage =
    document.getElementById("resultMessage");


// =========================================
// START QUIZ
// =========================================

startBtn.addEventListener("click", function () {

    introSection.classList.add("hidden");

    quizSection.classList.remove("hidden");

    currentQuestion = 0;

    resetScores();

    showQuestion();

});


// =========================================
// SHOW QUESTION
// =========================================

function showQuestion() {

    selectedAnswer = null;

    nextBtn.disabled = true;

    const question =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    questionText.textContent =
        question.question;


    optionsContainer.innerHTML = "";


    question.options.forEach(function (option) {

        const optionElement =
            document.createElement("div");


        optionElement.classList.add("option");


        optionElement.textContent =
            option.text;


        optionElement.addEventListener(
            "click",
            function () {

                selectOption(
                    optionElement,
                    option.type
                );

            }
        );


        optionsContainer.appendChild(
            optionElement
        );

    });


    updateProgress();

}


// =========================================
// SELECT OPTION
// =========================================

function selectOption(element, type) {

    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(function (option) {

        option.classList.remove("selected");

    });


    element.classList.add("selected");


    selectedAnswer = type;


    nextBtn.disabled = false;

}


// =========================================
// NEXT QUESTION
// =========================================

nextBtn.addEventListener("click", function () {

    if (selectedAnswer === null) {

        return;

    }


    scores[selectedAnswer]++;


    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();

    }

});


// =========================================
// UPDATE PROGRESS
// =========================================

function updateProgress() {

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    progressText.textContent =
        `${Math.round(progress)}%`;

}


// =========================================
// SHOW RESULTS
// =========================================

function showResults() {

    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");


    const total =
        questions.length;


    const strengthPercentage =
        Math.round(
            (scores.strength / total) * 100
        );


    const weaknessPercentage =
        Math.round(
            (scores.weakness / total) * 100
        );


    const opportunityPercentage =
        Math.round(
            (scores.opportunity / total) * 100
        );


    const threatPercentage =
        Math.round(
            (scores.threat / total) * 100
        );


    // Display scores

    strengthScore.textContent =
        `${strengthPercentage}%`;

    weaknessScore.textContent =
        `${weaknessPercentage}%`;

    opportunityScore.textContent =
        `${opportunityPercentage}%`;

    threatScore.textContent =
        `${threatPercentage}%`;


    // Display bars

    setTimeout(function () {

        strengthBar.style.width =
            `${strengthPercentage}%`;

        weaknessBar.style.width =
            `${weaknessPercentage}%`;

        opportunityBar.style.width =
            `${opportunityPercentage}%`;

        threatBar.style.width =
            `${threatPercentage}%`;

    }, 200);


    // Find strongest area

    const strongest =
        getStrongestArea();


    strongestArea.textContent =
        strongest.name;


    strongestDescription.textContent =
        strongest.description;


    resultMessage.textContent =
        generateInsight(strongest.name);

}


// =========================================
// FIND STRONGEST AREA
// =========================================

function getStrongestArea() {

    const areas = [

        {
            name: "Strengths",

            score: scores.strength,

            description:
                "You show strong positive qualities that can help you handle challenges and achieve your goals."
        },


        {
            name: "Weaknesses",

            score: scores.weakness,

            description:
                "Your responses highlight areas where developing new habits and skills could help you grow."
        },


        {
            name: "Opportunities",

            score: scores.opportunity,

            description:
                "You appear open to learning and discovering new possibilities for personal development."
        },


        {
            name: "Threats",

            score: scores.threat,

            description:
                "You may be aware of challenges that can affect your progress. Recognizing them is an important first step."
        }

    ];


    let strongest =
        areas[0];


    areas.forEach(function (area) {

        if (area.score > strongest.score) {

            strongest = area;

        }

    });


    return strongest;

}


// =========================================
// PERSONALIZED INSIGHT
// =========================================

function generateInsight(area) {

    if (area === "Strengths") {

        return "Your responses suggest that confidence and positive personal qualities are currently your strongest areas. Continue building on these strengths while staying open to learning and improvement.";

    }


    if (area === "Weaknesses") {

        return "Your responses highlight some areas that may need attention. Small and consistent improvements can help turn these challenges into strengths over time.";

    }


    if (area === "Opportunities") {

        return "You appear to have a growth-oriented mindset. Look for new experiences, skills, collaborations and learning opportunities that can help you move forward.";

    }


    return "Your responses suggest that identifying and managing challenges could be an important area of growth. Awareness is the first step toward making positive changes.";

}


// =========================================
// RESET SCORES
// =========================================

function resetScores() {

    scores = {

        strength: 0,

        weakness: 0,

        opportunity: 0,

        threat: 0

    };

}


// =========================================
// RESTART QUIZ
// =========================================

restartBtn.addEventListener("click", function () {

    currentQuestion = 0;

    resetScores();


    // Reset bars

    strengthBar.style.width = "0%";

    weaknessBar.style.width = "0%";

    opportunityBar.style.width = "0%";

    threatBar.style.width = "0%";


    resultSection.classList.add("hidden");

    quizSection.classList.remove("hidden");


    showQuestion();

});