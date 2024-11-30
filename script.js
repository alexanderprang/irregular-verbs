// Liste der unregelmäßigen Verben
const verbs = [
    { infinitive: "be", simple_past: "was/were", past_participle: "been" },
    { infinitive: "bite", simple_past: "bit", past_participle: "bitten" },
    { infinitive: "bring", simple_past: "brought", past_participle: "brought" },
    { infinitive: "buy", simple_past: "bought", past_participle: "bought" },
    { infinitive: "come", simple_past: "came", past_participle: "come" },
    { infinitive: "cut", simple_past: "cut", past_participle: "cut" },
    { infinitive: "do", simple_past: "did", past_participle: "done" },
    { infinitive: "drink", simple_past: "drank", past_participle: "drunk" },
    { infinitive: "drive", simple_past: "drove", past_participle: "driven" },
    { infinitive: "eat", simple_past: "ate", past_participle: "eaten" },
    { infinitive: "fall", simple_past: "fell", past_participle: "fallen" },
    { infinitive: "feed", simple_past: "fed", past_participle: "fed" },
    { infinitive: "feel", simple_past: "felt", past_participle: "felt" },
    { infinitive: "find", simple_past: "found", past_participle: "found" },
    { infinitive: "forget", simple_past: "forgot", past_participle: "forgotten" },
    { infinitive: "get", simple_past: "got", past_participle: "gotten" },
    { infinitive: "give", simple_past: "gave", past_participle: "given" },
    { infinitive: "go", simple_past: "went", past_participle: "gone" },
    { infinitive: "grow", simple_past: "grew", past_participle: "grown" },
    { infinitive: "have", simple_past: "had", past_participle: "had" },
    { infinitive: "hear", simple_past: "heard", past_participle: "heard" },
    { infinitive: "hide", simple_past: "hid", past_participle: "hidden" },
    { infinitive: "hurt", simple_past: "hurt", past_participle: "hurt" },
    { infinitive: "know", simple_past: "knew", past_participle: "known" },
    { infinitive: "leave", simple_past: "left", past_participle: "left" },
    { infinitive: "lose", simple_past: "lost", past_participle: "lost" },
    { infinitive: "make", simple_past: "made", past_participle: "made" },
    { infinitive: "meet", simple_past: "met", past_participle: "met" },
    { infinitive: "put", simple_past: "put", past_participle: "put" },
    { infinitive: "read", simple_past: "read", past_participle: "read" },
    { infinitive: "ride", simple_past: "rode", past_participle: "ridden" },
    { infinitive: "ring", simple_past: "rang", past_participle: "rung" },
    { infinitive: "run", simple_past: "ran", past_participle: "run" },
    { infinitive: "say", simple_past: "said", past_participle: "said" },
    { infinitive: "see", simple_past: "saw", past_participle: "seen" },
    { infinitive: "send", simple_past: "sent", past_participle: "sent" },
    { infinitive: "set", simple_past: "set", past_participle: "set" },
    { infinitive: "show", simple_past: "showed", past_participle: "shown" },
    { infinitive: "shut", simple_past: "shut", past_participle: "shut" },
    { infinitive: "sing", simple_past: "sang", past_participle: "sung" },
    { infinitive: "sit", simple_past: "sat", past_participle: "sat" },
    { infinitive: "sleep", simple_past: "slept", past_participle: "slept" },
    { infinitive: "speak", simple_past: "spoke", past_participle: "spoken" },
    { infinitive: "spend", simple_past: "spent", past_participle: "spent" },
    { infinitive: "swim", simple_past: "swam", past_participle: "swum" },
    { infinitive: "take", simple_past: "took", past_participle: "taken" },
    { infinitive: "tell", simple_past: "told", past_participle: "told" },
    { infinitive: "think", simple_past: "thought", past_participle: "thought" },
    { infinitive: "understand", simple_past: "understood", past_participle: "understood" },
    { infinitive: "wake", simple_past: "woke", past_participle: "woken" },
    { infinitive: "wear", simple_past: "wore", past_participle: "worn" },
    { infinitive: "win", simple_past: "won", past_participle: "won" },
    { infinitive: "write", simple_past: "wrote", past_participle: "written" }
];

// Hier bleibt der restliche Code aus der vorherigen Version unverändert

let currentVerbIndex = 0;
let correctAnswers = 0;
let totalAttempts = 0;
const incorrectWords = [];

const verbElement = document.getElementById("verb");
const pastInput = document.getElementById("past");
const participleInput = document.getElementById("participle");
const feedbackElement = document.getElementById("feedback");
const statsElement = document.getElementById("stats");
const submitButton = document.getElementById("submit");

function loadVerb() {
    const currentVerb = verbs[currentVerbIndex];
    verbElement.textContent = currentVerb.infinitive;
    pastInput.value = "";
    participleInput.value = "";
    feedbackElement.textContent = "";
}

submitButton.addEventListener("click", () => {
    const userPast = pastInput.value.trim().toLowerCase();
    const userParticiple = participleInput.value.trim().toLowerCase();
    const correctPast = verbs[currentVerbIndex].simple_past.toLowerCase();
    const correctParticiple = verbs[currentVerbIndex].past_participle.toLowerCase();

    totalAttempts++;

    if (userPast === correctPast && userParticiple === correctParticiple) {
        correctAnswers++;
        feedbackElement.textContent = "Richtig!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = `Falsch! Simple Past: "${correctPast}", Past Participle: "${correctParticiple}".`;
        feedbackElement.style.color = "red";

        incorrectWords.push({
            infinitive: verbs[currentVerbIndex].infinitive,
            correctPast,
            correctParticiple,
            userPast,
            userParticiple,
        });
    }

    updateStats();
    currentVerbIndex = (currentVerbIndex + 1) % verbs.length;
    setTimeout(loadVerb, 2000);
});

function updateStats() {
    statsElement.textContent = `Statistik: ${correctAnswers} von ${totalAttempts} korrekt (${(
        (correctAnswers / totalAttempts) *
        100
    ).toFixed(2)}% richtig)`;
}

loadVerb();
