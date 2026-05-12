// ==============================
// ENGLISH GRAMMAR TEST — FULL SCRIPT
// by.LSD_616
// ==============================

// --------------------------------------------------------------
// 1. БАЗА ВОПРОСОВ (160 штук) – правильный ответ указан индексом 0..3
// --------------------------------------------------------------
const FULL_BANK = [
    { text: "Can you help me with my homework? _____ course I can; give it _____ me.", options: ["Of / to", "It / at", "Of / for", "For / of"], correct: 0 },
    { text: "_____ you cook Italian food? No, I _____ but I love eating it.", options: ["Can / can't", "Can't / can", "Could / can't", "Are / am not"], correct: 0 },
    { text: "Everybody _____ drive a car in my family.", options: ["is", "can", "are", "was"], correct: 1 },
    { text: "_____ you _____ any other languages?", options: ["Can / speaking", "Could / use", "Could / know", "Can / speak"], correct: 3 },
    { text: "_____ your friend speak English? No, she _____ .", options: ["Could / could", "Can/can", "Is / isn't", "Can / can't"], correct: 3 },
    { text: "He _____ paint pictures when he was just three.", options: ["is", "can", "could", "are"], correct: 2 },
    { text: "_____ you swim when you were five?", options: ["Do", "Can", "Could", "Are"], correct: 2 },
    { text: "_____ your teacher speak English when he was seven?", options: ["Can", "Does", "Are", "Could"], correct: 3 },
    { text: "My little sister _____ paint pictures alone when she _____ nine, but she _____ now.", options: ["can / was / could", "couldn't / was / can", "could / can / can", "was / can / could"], correct: 1 },
    { text: "Kim _____ ski 4 years ago, but he _____ ski very well now.", options: ["could / can't", "couldn't / can", "can / could", "could / can"], correct: 0 },
    { text: "Tim _____ run very well, but I _____ run like him, because I was bad at running.", options: ["can / can", "could / couldn't", "could / could", "can / could"], correct: 1 },
    { text: "I _____ play football well, but I _____ play ice-hockey very well.", options: ["can / could", "can't / can", "could / can't", "could / can"], correct: 1 },
    { text: "She _____ understand English, _____ she can't speak it.", options: ["could / and", "can / and", "can't / but", "can / but"], correct: 3 },
    { text: "A: _____ you _____ the piano? B: Yes, _____ .", options: ["Can / play / I", "Can / use / I can", "Can / play / I can", "Can / use / *"], correct: 2 },
    { text: "A: _____ of food _____ our cook cook? B: Italian & French food.", options: ["What kind / can", "What / can", "Which / can", "What of / can"], correct: 0 },
    { text: "A: _____ can she _____ the guitar? B: Very well.", options: ["What / play", "Why / play", "How / play", "When / play"], correct: 2 },
    { text: "A: _____ can they _____ a computer? B: In the office.", options: ["Where / use", "Where / using", "When / use", "What time / use"], correct: 0 },
    { text: "A: _____ languages can her aunt _____ ? B: 2 languages.", options: ["What / use", "How much / speak", "What / speak", "How many / speak"], correct: 3 },
    { text: "A: _____ languages can Mrs. Brown speak? B: English & Irish.", options: ["What", "Where", "How", "Why"], correct: 0 },
    { text: "A: _____ can you cook Italian food for us? B: On Friday evening.", options: ["What time", "Why", "When", "What"], correct: 2 },
    { text: "A: _____ can my students come? B: At 3 in the afternoon.", options: ["Where", "How", "What", "What time"], correct: 3 },
    { text: "A: _____ can Alison go skiing? B: On her winter holiday.", options: ["When", "Where", "Why", "What"], correct: 0 },
    { text: "A: _____ Paul play rugby? B: No, he can't. But he can _____ baseball.", options: ["Does / play", "Does / play", "Can / plays", "Can / play"], correct: 3 },
    { text: "A: _____ can't you come to the party? B: Because I have an exam tomorrow.", options: ["Why", "When", "*", "What"], correct: 0 },
    { text: "Adam _____ ride a motorbike and he _____ drive a car.", options: ["can / can", "can / is", "can't / can", "can / can't"], correct: 0 },
    { text: "Adam _____ use a computer, but he _____ program a computer.", options: ["can / can't", "can / can", "is / isn't", "can't / can't"], correct: 0 },
    { text: "Flora _____ drive a car but she _____ ride a motorbike.", options: ["can / can't", "is / can", "is / can't", "can't / can't"], correct: 0 },
    { text: "We _____ watching a good documentary _____ BBC World now.", options: ["is / in", "are / in", "am / on", "are / on"], correct: 3 },
    { text: "I always _____ _____ credit card.", options: ["pay / with", "pay / by", "'m paying", "am paying / with"], correct: 1 },
    { text: "_____ is reading a letter _____ bed now.", options: ["He / at", "I / in", "She / in", "You / on"], correct: 2 },
    { text: "A: What _____ you _____? B: I'm a lecturer.", options: ["is / do", "are / do", "do / doing", "do / do"], correct: 3 },
    { text: "She's _____ jeans.", options: ["wore", "wearing", "to wear", "wear"], correct: 1 },
    { text: "I am _____ tennis this afternoon.", options: ["to play", "play", "played", "playing"], correct: 3 },
    { text: "We are not _____ outside.", options: ["went", "go", "to go", "going"], correct: 3 },
    { text: "Where are you _____?", options: ["went", "go", "to go", "going"], correct: 3 },
    { text: "Are you ____ a good time? Yes, we ____.", options: ["having / are", "have / aren't", "have / is", "having / do"], correct: 0 },
    { text: "I _____ from Switzerland.", options: ["came", "to come", "coming", "come"], correct: 3 },
    { text: "Is my English _____ better?", options: ["to get", "get", "getting", "gets"], correct: 2 },
    { text: "Jane is _____ her friend tonight.", options: ["seeing", "see", "saw", "sees"], correct: 0 },
    { text: "She ___ her homework every day.", options: ["do", "doed", "does", "doing"], correct: 2 },
    { text: "Which sentence has the correct two plurals? (dogs chase cats)", options: ["The dog chases the cat.", "The dog chases the cats.", "The dog chase the cats.", "The dogs chase the cats."], correct: 3 },
    { text: "He ___ his best to finish the project on time.", options: ["do", "doing", "does", "did"], correct: 2 },
    { text: "The child plays with his toy ___ in the sandbox.", options: ["cares", "car", "cars", "car`s"], correct: 2 },
    { text: "My sister ___ the dishes after dinner.", options: ["does", "doing", "did", "do"], correct: 0 },
    { text: "The company hired two ___ last month.", options: ["manager", "manager`s", "manageres", "managers"], correct: 3 },
    { text: "Which sentence has correct plural? (birds sing)", options: ["The birds sing beautifully.", "The bird sings beautifully.", "The birds sing beautifullys.", "The bird sings beautifullys."], correct: 0 },
    { text: "An effective learning plan ..... the key to confidence, but lot of students ..... not know how.", options: ["is-does-does", "is-does-doing", "is-do-do", "are-does-does"], correct: 2 },
    { text: "I see two ___ in the garden.", options: ["mices", "mouses", "mouse", "mice"], correct: 3 },
    { text: "They......pencils, but they.....rulers.", options: ["don't have/have", "have/doesn't have", "don't have/has", "has/don't have"], correct: 0 },
    { text: "This book belongs to the ___ on the top shelf.", options: ["librarian", "librarian`s", "librarianes", "librarians"], correct: 0 },
    { text: "....your sister study at Harvard? No, she........ not. This university ..... In England.", options: ["Do-do-is-is", "Does-does-are-are", "Does-does-is-is", "Does-do-are-are"], correct: 2 },
    { text: "He always ___ his homework carefully.", options: ["did", "do", "doing", "does"], correct: 3 },
    { text: "The child played with his toy ___ in the playground.", options: ["balles", "balls", "balls`", "ball`s"], correct: 1 },
    { text: "What ______ you do every weekend?", options: ["do", "does", "are", "is"], correct: 0 },
    { text: "Do you take your bike? – Yes, ___", options: ["he does", "I do", "I does", "No, they don't"], correct: 1 },
    { text: "Leena usually _________ TV at night.", options: ["watches", "watched", "watching", "watch"], correct: 0 },
    { text: "I buy _______ new TV set.", options: ["a", "the", "–", "an"], correct: 0 },
    { text: "She is _____ nice girl.", options: ["the", "an", "–", "a"], correct: 3 },
    { text: "He is _____ engineer.", options: ["a", "–", "an", "the"], correct: 2 },
    { text: "He goes to __________ beautiful place every year.", options: ["–", "an", "a", "the"], correct: 2 },
    { text: "I want to be an astronaut and travel to _______ moon.", options: ["–", "the", "an", "a"], correct: 1 },
    { text: "My grandmother plays ______ tennis.", options: ["a", "–", "an", "the"], correct: 1 },
    { text: "The teacher is from ____ USA.", options: ["the", "–", "an", "a"], correct: 0 },
    { text: "We wait ____ hour for the bus.", options: ["–", "an", "the", "a"], correct: 1 },
    { text: "What is ... capital city of Australia?", options: ["the", "an", "–", "a"], correct: 0 },
    { text: "I....an eraser, but I....a glue stick.", options: ["have/have", "have/don't have", "has/don't have", "have/doesn't have"], correct: 1 },
    { text: "We visit two ___ during our vacation.", options: ["island", "island`s", "islandes", "islands"], correct: 3 },
    { text: "Plural of leaf?", options: ["leave", "Leaves", "leaf", "leafs"], correct: 1 },
    { text: "The team ___ a great job in the competition.", options: ["do", "does", "doing", "did"], correct: 1 },
    { text: "There are three ___ in the garage.", options: ["bicycle`s", "bicycle", "bicycles`", "bicycles"], correct: 3 },
    { text: "She ... a book, but she ...... a notebook.", options: ["don't have/have", "don't have/has", "doesn't have/has", "has/don't have"], correct: 2 },
    { text: "The company hires new ___ for the project.", options: ["employee", "employers", "employee`s", "employees"], correct: 3 },
    { text: "Which sentence has correct plural? (children like sand)", options: ["The childs likes to play with sands.", "The children like to play with sands.", "The childs likes to play with sand.", "The child like to play with sands."], correct: 1 },
    { text: "She ___ a fantastic job on the presentation.", options: ["did", "does", "doing", "do"], correct: 1 },
    { text: "The cat caught two ___ in the backyard.", options: ["mouse's", "mouses", "mice", "mouse"], correct: 2 },
    { text: "The professor discussed various ___ during the lecture.", options: ["conceptes", "concept's", "concepts", "concept"], correct: 2 },
    { text: "Which sentence has correct plural? (flowers bloom)", options: ["The flowers bloom in spring.", "The floweres bloom in spring.", "The flowers bloomes in spring.", "The flower bloom in spring."], correct: 0 },
    { text: "My friend ___ a fantastic job organizing the event.", options: ["did", "does", "do", "doing"], correct: 1 },
    { text: "I saw five ___ in the zoo.", options: ["elephantes", "elephants", "elephant", "elephant's"], correct: 1 },
    { text: "She always ___ her part in group projects.", options: ["do", "doing", "did", "does"], correct: 3 },
    { text: "How many children _____ they _____?", options: ["has / got", "does / got", "have / got", "have / get"], correct: 2 },
    { text: "London _____ got a lot of parks.", options: ["have", "do", "has", "does"], correct: 2 },
    { text: "Our school ____ a library, but it doesn't ____ any computers.", options: ["have / have", "have / has", "has / has", "has / have"], correct: 3 },
    { text: "My parents _____ a new stereo.", options: ["have got", "has get", "has", "has got"], correct: 0 },
    { text: "Does your sister _____ a fiancé?", options: ["have", "has get", "has got", "have / has"], correct: 0 },
    { text: "The Plaza _____ a swimming pool.", options: ["do has", "have got", "has got", "does have"], correct: 2 },
    { text: "He _____ got any sisters.", options: ["hasn't", "doesn't", "don't", "haven't"], correct: 0 },
    { text: "Do you _____ any bread?", options: ["had", "has", "have", "got"], correct: 2 },
    { text: "Have you _____ any rice?", options: ["got", "had", "have", "have got"], correct: 0 },
    { text: "Bill _____ got any friends.", options: ["hasn't", "doesn't", "not", "has no"], correct: 0 },
    { text: "A: _____ she _____ a new job? B: Yes, she does.", options: ["Has / got", "Does / have", "Does / *", "Does / got"], correct: 1 },
    { text: "A: _____ they got any problems? B: No, they _____ .", options: ["Do / does", "Does / has", "Do / have", "Have / haven't"], correct: 3 },
    { text: "Maya _____ got a camera. And she _____ have a car either.", options: ["hasn't / doesn't", "haven't / don't", "haven't / doesn't", "doesn't / hasn't"], correct: 0 },
    { text: "I _____ a bicycle.", options: ["am having", "has got", "have", "had"], correct: 2 },
    { text: "He_____ a shower in the morning.", options: ["have got", "have", "am having", "has"], correct: 3 },
    { text: "How much are _____ glasses?", options: ["they", "that", "this", "these"], correct: 3 },
    { text: "Is _____ book John's? Yes, _____ is.", options: ["that / its", "these / it", "it / it's", "this / it"], correct: 3 },
    { text: "Take _____ bags into the kitchen.", options: ["this", "these", "that", "it"], correct: 1 },
    { text: "I don't like _____ music.", options: ["they", "it", "this", "these"], correct: 2 },
    { text: "Bob, _____ is my mother.", options: ["these", "this", "they", "it"], correct: 1 },
    { text: "Is _____ exercise very easy? No, _____ isn't.", options: ["this / it", "these / it", "that / they", "these / this"], correct: 0 },
    { text: "Look at … birds up there on the tree.", options: ["this", "those", "these", "that"], correct: 1 },
    { text: "Could you please look at … cut on my finger?", options: ["these", "those", "that", "this"], correct: 3 },
    { text: "Are ….… your books over there on the table?", options: ["these", "those", "that", "this"], correct: 1 },
    { text: "My umbrella is right here. …is my umbrella.", options: ["these", "this", "that", "those"], correct: 1 },
    { text: "Those apples are red, but … apples over here are green.", options: ["that", "these", "those", "this"], correct: 1 },
    { text: "Please come here and look at … picture.", options: ["that", "those", "this", "these"], correct: 2 },
    { text: "Can you see … fishing boats on the lake?", options: ["these", "this", "those", "that"], correct: 2 },
    { text: "Maybe we can ask … policeman for directions.", options: ["that", "these", "this", "those"], correct: 0 },
    { text: "… was a difficult test we had last week.", options: ["this", "those", "that", "these"], correct: 2 },
    { text: "How many of … cookies would you like? Two? Okay, here you are.", options: ["that", "those", "these", "this"], correct: 2 },
    { text: "Look! There is a beautiful chandlier _______ us.", options: ["next to", "on", "above", "under"], correct: 2 },
    { text: "My books are _______ my bag in the car.", options: ["in", "opposite", "near", "in front of"], correct: 0 },
    { text: "My university is ___________ the museum.", options: ["in", "opposite", "on", "under"], correct: 1 },
    { text: "I have two ___ and a ___ in my bag.", options: ["keys / wallets", "key / wallets", "keys / wallet", "key / wallet"], correct: 2 },
    { text: "There are some ___ and a ___ in this picture.", options: ["wolves / bears", "wolf / bear", "wolf / bears", "wolves / bear"], correct: 3 },
    { text: "In the play, four ____ see some ____ on the stage.", options: ["actress / mice", "actresses / mouse", "actresses / mice", "actress / mouse"], correct: 2 },
    { text: "Two ____ are swimming with some ____ in the sea.", options: ["people / dolphins", "person / dolphins", "people / dolphin", "persons/ dolphin"], correct: 0 },
    { text: "I buy two ___ of cheese and three ____ of bread every Friday.", options: ["bottles / cans", "tubes / glasses", "pieces / cartons", "kilos / loaves"], correct: 3 },
    { text: "A: I have some ____ for you. B: Oh, great. Where are they? A: They are in the ____. It is the kitchen table.", options: ["cookie / jars", "cookies / jars", "cookie / jar", "cookies / jar"], correct: 3 },
    { text: "Take ____ toothpaste and ____ toothbrush with you.", options: ["a / some", "a tube of / a", "a bowl of / some", "some / some"], correct: 1 },
    { text: "We need ____ advice before we build ____ studio.", options: ["a / some", "an / —", "some / a", "— / an"], correct: 2 },
    { text: "A: I think health is ____ happiness. B: Yes, and health is ____ beauty, too.", options: ["a / —", "a / a", "— / —", "— / a"], correct: 2 },
    { text: "The ____ on the ____ in the streets are all red because it is autumn.", options: ["leaf / tree", "leaf / trees", "leaves / trees", "leaves / tree"], correct: 2 },
    { text: "Some ____ in our apartment block have young ____.", options: ["families / child", "family / children", "family / child", "families / children"], correct: 3 },
    { text: "There is ____ cereal and a ____ on the table.", options: ["a slice of / knives", "a / geese", "a bowl of / toy", "some / milk"], correct: 2 },
    { text: "A: I have ____news for you. B: Oh, what is that? A: I have three ____ in my study room. B: Oh, let's go there. I want to see them.", options: ["some / kitten", "an / kitten", "some / kittens", "a / kittens"], correct: 2 },
    { text: "I wash my ____ with ____ cold water because it is healthy.", options: ["foot / a", "foot / an", "feet / a", "feet / —"], correct: 3 },
    { text: "____ armchair is a piece of ____.", options: ["A / advice", "An / furniture", "Some / chimney", "— / duty"], correct: 1 },
    { text: "____ and deer are ____ and they eat plants.", options: ["Oxen / animals", "Oxen / animal", "Ox / animal", "Ox / animals"], correct: 0 },
    { text: "For me, ____ music is food for the soul and I spend a lot of money on ____ every month.", options: ["a / CDs", "an / CD", "-- / CDs", "a / CD"], correct: 2 },
    { text: "_____ her name Eliza? No, _____ .", options: ["What / it isn't", "Is / it isn't", "Is / he isn't/can", "Is / she isn't"], correct: 1 },
    { text: "She loves painting and drawing. She wants to be an ___.", options: ["arter", "artist", "art", "artor"], correct: 1 },
    { text: "He works in a school and helps students learn. He is a ___.", options: ["teaching", "teacher", "teachist", "teachor"], correct: 1 },
    { text: "A person who plays music is a ___.", options: ["musicer", "musical", "musiker", "musician"], correct: 3 },
    { text: "I have a new ___ in my kitchen for boiling water.", options: ["heat", "heatist", "heating", "heater"], correct: 3 },
    { text: "She writes articles for a famous newspaper. She is a ___.", options: ["writing", "write", "writer", "writor"], correct: 2 },
    { text: "If you want to fix your hair, you should go to a hair___.", options: ["dressor", "dressing", "dressist", "dresser"], correct: 3 },
    { text: "He works at the docks and helps move ships. He is a ___.", options: ["sailor", "sailist", "sailing", "sailer"], correct: 0 },
    { text: "A person who manages a company is a ___.", options: ["managor", "manage", "manager", "managist"], correct: 2 },
    { text: "Someone who works in a shop and serves customers is a shop ___.", options: ["workor", "working", "worker", "workist"], correct: 2 },
    { text: "My uncle works with wood and builds furniture. He is a ___.", options: ["buildor", "carpenter", "carpentist", "builder"], correct: 1 },
    { text: "She is a very fast ___. She can run 10 kilometers easily.", options: ["runnist", "runor", "running", "runner"], correct: 3 },
    { text: "We need a ___ to help us find the right hotel.", options: ["guiding", "guide", "guidist", "guider"], correct: 1 },
    { text: "The ___ of this book is very famous in my country.", options: ["author", "authing", "authist", "auther"], correct: 0 },
    { text: "I need a new ___ for my computer to print these documents.", options: ["printing", "printist", "printer", "printor"], correct: 2 },
    { text: "My sister lives ___ London, near the city center.", options: ["at", "of", "in", "on"], correct: 2 },
    { text: "I usually wake up ___ 7:00 every morning.", options: ["in", "of", "at", "on"], correct: 2 },
    { text: "There is a beautiful picture ___ the wall in the living room.", options: ["in", "of", "at", "on"], correct: 3 },
    { text: "This is a photo ___ my family during our summer holiday.", options: ["of", "at", "in", "on"], correct: 0 },
    { text: "We always have a big dinner ___ Sundays.", options: ["in", "of", "on", "at"], correct: 2 },
    { text: "There is a sofa and two chairs in the living room. _______ sofa is very comfortable.", options: ["–", "a", "an", "the"], correct: 3 },
    { text: "Is there _______ supermarket near your house?", options: ["–", "a", "an", "the"], correct: 1 },
    { text: "My father is _______ doctor. He works in the hospital in our town.", options: ["an", "–", "a", "the"], correct: 2 },
    { text: "Look! There is _______ orange on the kitchen table.", options: ["an", "the", "–", "a"], correct: 0 },
    { text: "I usually go to work by _______ bus every morning.", options: ["an", "a", "the", "–"], correct: 3 },
    { text: "London is _______ capital of the UK.", options: ["a", "–", "an", "the"], correct: 3 },
    { text: "Do you like _______ Turkish food?", options: ["the", "an", "–", "a"], correct: 2 },
    { text: "There is _______ university in my town.", options: ["the", "a", "–", "an"], correct: 1 },
    { text: "We always listen to music _______ the way to school.", options: ["by", "in", "of", "on"], correct: 3 }
];

// --------------------------------------------------------------
// 2. КОНФИГУРАЦИЯ ТЕСТА
// --------------------------------------------------------------
const TOTAL_QUESTIONS = 25;
const TIME_PER_QUESTION = 30;

let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let timerInterval = null;
let testStartTime = null;
let currentTimeLeft = TIME_PER_QUESTION;
let isAnswerLocked = false;

// --------------------------------------------------------------
// 3. DOM-ЭЛЕМЕНТЫ
// --------------------------------------------------------------
const welcomeScreen = document.getElementById('welcomeScreen');
const testScreen = document.getElementById('testScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startTestBtn');
const homeBtn = document.getElementById('homeButton');
const retryBtn = document.getElementById('retryTestBtn');
const resultsHomeBtn = document.getElementById('resultsHomeBtn');
const modal = document.getElementById('exitModal');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');
const lastResultPreview = document.getElementById('lastResultPreview');
const questionCounterSpan = document.getElementById('questionCounter');
const timerValueSpan = document.getElementById('timerValue');
const questionTextDiv = document.getElementById('questionText');
const optionsListDiv = document.getElementById('optionsList');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const scoreNumberSpan = document.getElementById('scoreNumber');
const correctCountSpan = document.getElementById('correctCount');
const wrongCountSpan = document.getElementById('wrongCount');
const timeSpentSpan = document.getElementById('timeSpent');
const scoreCommentDiv = document.getElementById('scoreComment');

// --------------------------------------------------------------
// 4. ИСТОРИЯ (localStorage)
// --------------------------------------------------------------
let testHistory = [];

function loadHistory() {
    const stored = localStorage.getItem('engTestHistory');
    if (stored) testHistory = JSON.parse(stored);
    updateLastResultPreview();
}

function saveHistory(score, totalTimeSec) {
    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString('ru', { month: 'short' })}`;
    const result = {
        date: formattedDate,
        score: score,
        total: TOTAL_QUESTIONS,
        time: totalTimeSec,
        timestamp: now.getTime()
    };
    testHistory.unshift(result);
    if (testHistory.length > 10) testHistory.pop();
    localStorage.setItem('engTestHistory', JSON.stringify(testHistory));
    updateLastResultPreview();
}

function updateLastResultPreview() {
    if (!lastResultPreview) return;
    if (testHistory.length === 0) {
        lastResultPreview.innerHTML = '<i class="fas fa-chart-line"></i> Нет пройденных тестов';
        return;
    }
    const last = testHistory[0];
    const minutes = Math.floor(last.time / 60);
    const seconds = last.time % 60;
    const timeStr = minutes > 0 ? `${minutes}м ${seconds}с` : `${seconds}с`;
    lastResultPreview.innerHTML = `<i class="fas fa-calendar-alt"></i> ${last.date} | ${last.score}/${last.total} | ${timeStr}`;
}

// --------------------------------------------------------------
// 5. ПЕРЕМЕШИВАНИЕ
// --------------------------------------------------------------
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function shuffleQuestionOptions(q) {
    const newOptions = [...q.options];
    const correctAnswerText = newOptions[q.correct];
    const indices = [0, 1, 2, 3];
    shuffleArray(indices);
    const shuffledOptions = indices.map(i => newOptions[i]);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);
    return { ...q, options: shuffledOptions, correct: newCorrectIndex };
}

function selectRandomQuestions() {
    const shuffledBank = shuffleArray([...FULL_BANK]);
    const selected = shuffledBank.slice(0, TOTAL_QUESTIONS);
    return selected.map(q => shuffleQuestionOptions(q));
}

// --------------------------------------------------------------
// 6. ОСНОВНЫЕ ФУНКЦИИ ТЕСТА
// --------------------------------------------------------------
function startTest() {
    currentQuestions = selectRandomQuestions();
    currentIndex = 0;
    userAnswers = [];
    testStartTime = Date.now();
    clearTimer();
    isAnswerLocked = false;
    showScreen('test');
    renderCurrentQuestion();
    updateProgress();
    startTimerForCurrent();
}

function renderCurrentQuestion() {
    const q = currentQuestions[currentIndex];
    questionTextDiv.textContent = q.text;
    optionsListDiv.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.innerHTML = `<span class="option-letter">${letters[idx]}</span><span>${opt}</span>`;
        div.addEventListener('click', () => handleAnswer(idx));
        optionsListDiv.appendChild(div);
    });
    questionCounterSpan.textContent = `Вопрос ${currentIndex+1} / ${TOTAL_QUESTIONS}`;
}

function handleAnswer(selectedIdx) {
    if (isAnswerLocked) return;
    const question = currentQuestions[currentIndex];
    const isCorrect = (selectedIdx === question.correct);
    userAnswers.push({ questionIndex: currentIndex, isCorrect, selectedIdx });
    
    const allOptions = document.querySelectorAll('.option-item');
    allOptions.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === question.correct) opt.classList.add('correct');
        if (idx === selectedIdx && !isCorrect) opt.classList.add('wrong');
    });
    isAnswerLocked = true;
    clearTimer();
    
    setTimeout(() => {
        isAnswerLocked = false;
        currentIndex++;
        if (currentIndex < TOTAL_QUESTIONS) {
            renderCurrentQuestion();
            updateProgress();
            startTimerForCurrent();
        } else {
            finishTest();
        }
    }, 1000);
}

function startTimerForCurrent() {
    currentTimeLeft = TIME_PER_QUESTION;
    timerValueSpan.textContent = currentTimeLeft;
    timerValueSpan.classList.remove('pulse');
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!isAnswerLocked) {
            currentTimeLeft--;
            timerValueSpan.textContent = currentTimeLeft;
            if (currentTimeLeft <= 5) timerValueSpan.classList.add('pulse');
            if (currentTimeLeft <= 0) {
                clearTimer();
                handleAnswer(-1);
            }
        }
    }, 1000);
}

function clearTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateProgress() {
    const percent = ((currentIndex) / TOTAL_QUESTIONS) * 100;
    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${Math.round(percent)}%`;
}

// --------------------------------------------------------------
// 7. ФИНИШ ТЕСТА С ЭФФЕКТОМ GAME OVER (при ≤12)
// --------------------------------------------------------------
function finishTest() {
    clearTimer();
    const totalTimeSec = Math.floor((Date.now() - testStartTime) / 1000);
    const correct = userAnswers.filter(a => a.isCorrect).length;
    const wrong = TOTAL_QUESTIONS - correct;
    const score = correct;
    
    saveHistory(score, totalTimeSec);
    
    scoreNumberSpan.textContent = score;
    correctCountSpan.textContent = correct;
    wrongCountSpan.textContent = wrong;
    const minutes = Math.floor(totalTimeSec / 60);
    const secs = totalTimeSec % 60;
    timeSpentSpan.textContent = minutes > 0 ? `${minutes}м ${secs}с` : `${secs}с`;
    
    // Логика комментария и GAME OVER
    if (score <= 12) {
        // Эффект GAME OVER
        scoreCommentDiv.innerHTML = '<div class="game-over-text">💀 GAME OVER 💀</div><div style="margin-top:10px;">Вы набрали слишком мало баллов. Попробуйте снова!</div>';
        triggerGameOverEffect(); // рассыпание
    } else if (score === 25) {
        scoreCommentDiv.innerHTML = '🎉 Идеально! Ты — гуру английского! 🎉';
        createConfetti();
    } else if (score >= 20) {
        scoreCommentDiv.innerHTML = '🏆 Отлично! Ты очень хорошо знаешь грамматику.';
        createSparkles();
    } else if (score >= 15) {
        scoreCommentDiv.innerHTML = '👍 Хорошо, но есть куда расти.';
    } else {
        scoreCommentDiv.innerHTML = '📚 Неплохо, стоит повторить правила.';
    }
    
    showScreen('results');
}

// --------------------------------------------------------------
// 8. ЭФФЕКТЫ: конфетти, звёздочки, GAME OVER (рассыпание)
// --------------------------------------------------------------
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + '%';
        conf.style.top = '-20px';
        conf.style.position = 'fixed';
        conf.style.width = '8px';
        conf.style.height = '12px';
        conf.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        conf.style.zIndex = 999;
        conf.style.pointerEvents = 'none';
        document.body.appendChild(conf);
        conf.animate([
            { transform: 'translateY(0) rotate(0deg)' },
            { transform: `translateY(100vh) rotate(${Math.random() * 720}deg)` }
        ], { duration: 2000, easing: 'cubic-bezier(0.2,0.9,0.4,1)' });
        setTimeout(() => conf.remove(), 2100);
    }
}

function createSparkles() {
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.textContent = '✨';
        star.style.position = 'fixed';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.fontSize = '1.5rem';
        star.style.pointerEvents = 'none';
        star.style.zIndex = 999;
        document.body.appendChild(star);
        star.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 800 });
        setTimeout(() => star.remove(), 800);
    }
}

function triggerGameOverEffect() {
    // Создаём 60 частиц, разлетающихся из центра экрана
    const rect = document.body.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'shatter-particle';
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 200;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        particle.style.setProperty('--x', dx + 'px');
        particle.style.setProperty('--y', dy + 'px');
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.background = `hsl(${Math.random() * 20 + 340}, 80%, 50%)`; // красные оттенки
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
    // Небольшая тряска экрана результатов
    const resultsCard = document.querySelector('.results-card');
    if (resultsCard) {
        resultsCard.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => resultsCard.style.animation = '', 500);
    }
}

// --------------------------------------------------------------
// 9. НАВИГАЦИЯ И МОДАЛКА
// --------------------------------------------------------------
function showScreen(screen) {
    welcomeScreen.classList.remove('active');
    testScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    if (screen === 'welcome') welcomeScreen.classList.add('active');
    if (screen === 'test') testScreen.classList.add('active');
    if (screen === 'results') resultsScreen.classList.add('active');
}

function exitTest() {
    clearTimer();
    showScreen('welcome');
    isAnswerLocked = false;
}

// Обработчики событий
startBtn.addEventListener('click', startTest);
homeBtn.addEventListener('click', () => modal.classList.add('active'));
modalCancel.addEventListener('click', () => modal.classList.remove('active'));
modalConfirm.addEventListener('click', () => {
    modal.classList.remove('active');
    exitTest();
});
retryBtn.addEventListener('click', startTest);
resultsHomeBtn.addEventListener('click', () => showScreen('welcome'));

// Добавляем недостающие стили (на случай, если style.css не подключён)
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .confetti { position: fixed; pointer-events: none; z-index: 1001; }
    .option-item.disabled { pointer-events: none; opacity: 0.8; }
    .option-item.correct { background: #10b98130; border-color: #10b981; animation: correctFlash 0.4s; }
    .option-item.wrong { background: #ef444430; border-color: #ef4444; }
    .timer-box .pulse { animation: pulse 0.6s infinite; color: #ffb347; }
    @keyframes correctFlash { 0% { background: rgba(16,185,129,0); } 50% { background: rgba(16,185,129,0.6); transform: scale(1.01); } 100% { background: rgba(16,185,129,0.3); } }
    @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
`;
document.head.appendChild(styleSheet);

// --------------------------------------------------------------
// 10. ИНИЦИАЛИЗАЦИЯ
// --------------------------------------------------------------
loadHistory();
showScreen('welcome');