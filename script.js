const startScreen =
    document.getElementById("startScreen");

const questScreen =
    document.getElementById("questScreen");

const dialogueScreen =
    document.getElementById("dialogueScreen");

const giftScreen =
    document.getElementById("giftScreen");

const messageScreen =
    document.getElementById("messageScreen");


const startButton =
    document.getElementById("startButton");

const questButton =
    document.getElementById("questButton");

const nextDialogue =
    document.getElementById("nextDialogue");

const gift =
    document.getElementById("gift");

const dialogueText =
    document.getElementById("dialogueText");


/* =========================
   تغيير الشاشة
========================= */

function showScreen(screen) {

    document.querySelectorAll(".screen")
        .forEach(item => {
            item.classList.remove("active");
        });

    setTimeout(() => {
        screen.classList.add("active");
    }, 100);

}


/* =========================
   البداية
========================= */

startButton.addEventListener("click", () => {

    showScreen(questScreen);

});


/* =========================
   قبول المهمة
========================= */

questButton.addEventListener("click", () => {

    showScreen(dialogueScreen);

    currentDialogue = 0;

    dialogueText.textContent =
        dialogues[currentDialogue];

});


/* =========================
   الحوار
========================= */

const dialogues = [

    "يبدو أن هناك شيئًا مختلفًا اليوم...",

    "النجوم أكثر لمعانًا من المعتاد، وكأنها تحتفل بشيء ما.",

    "انتظري... وجدتها.",

    "اليوم ليس يومًا عاديًا.",

    "إنه يوم ميلاد Mido. ✦",

    "وهذا يعني أن لدينا مهمة خاصة يجب إكمالها.",

    "لكن هذه المرة... المكافأة ليست Primogems.",

    "إنها شيء صُمم خصيصًا لكِ. ♡"

];

let currentDialogue = 0;


nextDialogue.addEventListener("click", () => {

    currentDialogue++;

    if (currentDialogue < dialogues.length) {

        dialogueText.style.opacity = 0;

        setTimeout(() => {

            dialogueText.textContent =
                dialogues[currentDialogue];

            dialogueText.style.opacity = 1;

        }, 250);

    } else {

        showScreen(giftScreen);

    }

});


/* =========================
   فتح الهدية
========================= */

gift.addEventListener("click", () => {

    gift.style.animation = "none";

    gift.style.transform =
        "scale(1.15)";

    setTimeout(() => {

        showScreen(messageScreen);

    }, 800);

});
