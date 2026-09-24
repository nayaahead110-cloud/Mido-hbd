const screens =
    document.querySelectorAll(".screen");

const dialogueText =
    document.getElementById("dialogueText");

const nextBtn =
    document.getElementById("nextBtn");


/* =========================
   تغيير الصفحات
========================= */

function go(id) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    setTimeout(() => {

        document
            .getElementById(id)
            .classList.add("active");

    }, 80);
}


/* =========================
   الحوار
========================= */

const lines = [

    "يبدو أن شيئًا مختلفًا يحدث الليلة...",

    "السماء هادئة، لكن هناك ضوءًا غريبًا بين ظلال القمر.",

    "انتظري... لقد ظهرت مهمة جديدة.",

    "اسم المهمة: يوم ميلاد Mido.",

    "لا توجد معارك هذه المرة، ولا طريق يجب قطعه.",

    "مهمتنا الوحيدة هي أن نجعل هذا اليوم ذكرى جميلة. ✦",

    "والآن... حان وقت استلام المكافأة."

];


let index = 0;


function startDialogue() {

    index = 0;

    dialogueText.textContent =
        lines[index];

    nextBtn.textContent =
        "التالي";

    go("dialogue");
}


function nextDialogue() {

    index++;

    if (index < lines.length) {

        dialogueText.style.opacity = "0";

        setTimeout(() => {

            dialogueText.textContent =
                lines[index];

            dialogueText.style.opacity = "1";

        }, 180);

    }

    else {

        go("gift");

    }
}


/* =========================
   فتح الهدية
========================= */

function openGift() {

    const gift =
        document.querySelector(".gift");

    gift.style.animation =
        "none";

    gift.style.transform =
        "scale(1.2)";

    setTimeout(() => {

        go("letter");

    }, 650);
}
