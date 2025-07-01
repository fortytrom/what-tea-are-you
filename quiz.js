// Quiz data
const questions = [
  {
    question: " 茶館老闆邀你試喝新品茶，你一走進門看到熟人也在裡面，這時候你會...？",
    optionA: "熱情打招呼：「也太巧了吧！一起坐一起坐！」",
    optionB: "微笑點頭，默默選一個角落位置坐下來享受",
    type: "EI",
    image: "images/01.png"
  },
  {
    question: "公司下午茶時間，你準備泡一壺好茶，接下來你如何安排?",
    optionA: "張羅幾個同事：「一起來開一壺，邊喝邊聊！」",
    optionB: "安靜泡茶，配 podcast 或靜靜放空",
    type: "EI",
    image: "images/02.png"
  },
  {
    question: "如果被邀請參加這時候「百人茶席大會」，閃過腦子的第一個想法是？",
    optionA: "太好玩了！好多機會認識新茶友！",
    optionB: "有點吵，我比較想去三人小茶聚",
    type: "EI",
    image: "images/03.png"
  },
  {
    question: "你到朋友家作客，朋友端來一杯你從未喝過的茶，接過這杯茶後，你會怎麼做?",
    optionA: "拿起來仔細觀察顏色、聞香氣，再詢問茶種與工法",
    optionB: "心想：「這味道好像森林的雨後，有點詩意耶」",
    type: "SN",
    image: "images/04.png"
  },
  {
    question: "你準備要送人一套茶具，你會怎麼挑？",
    optionA: "選擇實用又好清洗的款式，還查了導熱效率",
    optionB: "選一組看起來超有氣氛的復古茶器，就像電影會出現的",
    type: "SN",
    image: "images/05.png"
  },
  {
    question: "假如你非常喜歡喝茶，天天泡茶來喝，泡茶時你會更傾向？",
    optionA: "精準控溫定時，依照茶種泡法 SOP 來操作",
    optionB: "靠感覺走，覺得這泡茶今天應該慢一點沉",
    type: "SN",
    image: "images/06.png"
  },
  {
    question: "公司茶聚你被分配到負責選茶送給客戶，你會怎麼挑？",
    optionA: "依據客戶平常喝茶習慣、年齡、季節搭配理性挑選",
    optionB: "回想和客戶的互動，選一款最能傳達心意的茶",
    type: "TF",
    image: "images/07.png"
  },
  {
    question: "一天午後，大家聚在一起享用下午茶，同事泡了一壺茶來給大家品茗。沒想到是泡失敗的茶，其他同事喝了一口後都說「好苦啊！」你會？",
    optionA: "淡定地分析：「可能水溫太高或泡太久了，我幫你調整看看」",
    optionB: "大笑說：「很有個性的一壺茶，留下深刻印象欸！」",
    type: "TF",
    image: "images/08.png"
  },
  {
    question: "若朋友給你一盒你不喜歡的茶葉當禮物，你會？",
    optionA: "感謝後私下處理，並記下下次送禮要考慮對方口味",
    optionB: "開心地說：「你記得我愛喝茶太感人了！」並收下珍藏",
    type: "TF",
    image: "images/09.png"
  },
  {
    question: "經過抽簽，你被指派策劃一場公司茶會，你會怎麼開始？",
    optionA: "列出流程表、茶單、主持人稿、每個人茶杯擺放位置",
    optionB: "想個主題氣氣，其他細節就到現場看感覺再說",
    type: "JP",
    image: "images/10.png"
  },
  {
    question: "終於到茶會現場，工作人員突然說：我們原本的主泡師遲到了！你會？",
    optionA: "趕快啟動 Plan B，立即找替代人選應急",
    optionB: "「沒事沒事，我來泡一壺 freestyle 的茶～」",
    type: "JP",
    image: "images/11.png"
  },
  {
    question: "你參加一場野外茶席，沒想到主辦單位崇尚自然，現場沒有準備泡茶的設備，你會？",
    optionA: "有點焦慮：「怎麼沒有熱水計溫器？這樣泡不準啊」",
    optionB: "舒服坐下：「剛剛好，茶本來就該隨自然」",
    type: "JP",
    image: "images/12.png"
  }
];


// MBTI result data
const mbtiResults = {
  "ISTJ": {
    title: "鐵觀音守護者",
    description: "你是那種會幫大家先把熱水煮好的類型。你像一壺老鐵觀音，耐泡又穩，話不多，但做事超靠譜，是大家亂成一團時唯一能信的那杯茶。"
  },
  "ISFJ": {
    title: "溫暖紅茶守護者",
    description: "你總是默默為別人著想，像一杯加了蜂蜜的紅茶，溫暖而貼心。你會記住每個人喜歡的茶，並在他們需要時遞上最合適的那一杯。"
  },
  "INFJ": {
    title: "神秘白茶賢者",
    description: "你像珍貴的白茶，內斂而深邃。你能感受到茶湯背後的故事，也能透過一杯茶看見人心，是茶桌上最有智慧的存在。"
  },
  "INTJ": {
    title: "普洱茶策略家",
    description: "你像陳年普洱，越陳越香。你對茶有自己的見解和長遠規劃，總能在茶的世界裡找到最有效率和品質的方式。"
  },
  "ISTP": {
    title: "烏龍茶工匠",
    description: "你是茶界的技術達人，對各種泡茶技巧瞭若指掌。你像變化多端的烏龍茶，每一泡都能展現不同的層次和驚喜。"
  },
  "ISFP": {
    title: "花茶藝術家",
    description: "你像精緻的花茶，美麗而富有創意。你能將泡茶變成一種藝術，每一個動作都充滿美感和個人風格。"
  },
  "INFP": {
    title: "夢幻花草茶",
    description: "你像溫柔的花草茶，充滿想像力和詩意。你能在茶香中找到靈感，也能透過茶與自己的內心對話。"
  },
  "INTP": {
    title: "實驗綠茶學者",
    description: "你是茶界的研究員，總是在探索新的泡茶方法。你像清香的綠茶，思維敏銳，對茶的知識永遠充滿好奇。"
  },
  "ESTP": {
    title: "活力氣泡茶",
    description: "你像充滿活力的氣泡茶，總是能為茶聚帶來歡樂和驚喜。你善於即興發揮，讓每次的茶會都變得生動有趣。"
  },
  "ESFP": {
    title: "繽紛水果茶",
    description: "你像色彩繽紛的水果茶，總是能感染周圍的人。你讓喝茶變成一件快樂的事，是茶桌上最受歡迎的開心果。"
  },
  "ENFP": {
    title: "創意調味茶",
    description: "你像充滿創意的調味茶，總有新奇的想法。你能將傳統茶文化與現代創意結合，創造出獨特的茶體驗。"
  },
  "ENTP": {
    title: "辯論擂茶大師",
    description: "你像豐富的擂茶，總是能激發熱烈的討論。你善於從不同角度看待茶文化，是茶桌上最有趣的辯論家。"
  },
  "ESTJ": {
    title: "傳統功夫茶領袖",
    description: "你像正統的功夫茶，講究傳統和規矩。你是茶聚的天然領導者，能夠組織完美的茶會，讓每個人都賓至如歸。"
  },
  "ESFJ": {
    title: "溫馨奶茶主人",
    description: "你像溫暖的奶茶，總是照顧著每個人的需求。你會確保每個人都有合適的茶喝，是最貼心的茶會主人。"
  },
  "ENFJ": {
    title: "啟發薄荷茶導師",
    description: "你像清新的薄荷茶，總能啟發和鼓勵他人。你善於透過茶來連結人心，是茶桌上最有影響力的精神導師。"
  },
  "ENTJ": {
    title: "霸氣龍井茶執行長",
    description: "你像頂級的龍井茶，有著天然的領導氣質。你能夠統籌茶會的大局，讓每個細節都完美執行，是茶界的CEO。"
  }
};

// Quiz state
let currentQuestion = 0;
let answers = [];

// DOM elements
const welcomePage = document.getElementById('welcome-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');
const startQuizBtn = document.getElementById('start-quiz-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionAText = document.getElementById('option-a-text');
const optionBText = document.getElementById('option-b-text');
const restartBtn = document.getElementById('restart-btn');
const resultType = document.getElementById('result-type');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultImage = document.getElementById('result-image');

// Event listeners
startQuizBtn.addEventListener('click', startQuiz);
optionA.addEventListener('click', () => selectAnswer('A'));
optionB.addEventListener('click', () => selectAnswer('B'));
restartBtn.addEventListener('click', restartQuiz);

// Functions
function startQuiz() {
  welcomePage.classList.add('hidden');
  quizPage.classList.remove('hidden');
  currentQuestion = 0;
  answers = [];
  displayQuestion();
}

function displayQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  optionAText.textContent = question.optionA;
  optionBText.textContent = question.optionB;

  // 顯示圖片
  const questionImage = document.getElementById('question-image');
  if (question.image) {
    questionImage.src = question.image;
    questionImage.alt = `Question ${currentQuestion + 1}`;
  } else {
    questionImage.src = '';
    questionImage.alt = '';
  }

  // Update progress
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;
}


function selectAnswer(answer) {
  // Add visual feedback
  const selectedButton = answer === 'A' ? optionA : optionB;
  selectedButton.classList.add('scale-[.98]');
  
  setTimeout(() => {
    selectedButton.classList.remove('scale-[.98]');
    
    // Record answer
    answers.push({
      type: questions[currentQuestion].type,
      answer: answer
    });
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }, 200);
}

function calculateMBTI() {
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };
  
  answers.forEach(answer => {
    if (answer.type === 'EI') {
      if (answer.answer === 'A') scores.E++;
      else scores.I++;
    } else if (answer.type === 'SN') {
      if (answer.answer === 'A') scores.S++;
      else scores.N++;
    } else if (answer.type === 'TF') {
      if (answer.answer === 'A') scores.T++;
      else scores.F++;
    } else if (answer.type === 'JP') {
      if (answer.answer === 'A') scores.J++;
      else scores.P++;
    }
  });
  
  const mbti = 
    (scores.E > scores.I ? 'E' : 'I') +
    (scores.S > scores.N ? 'S' : 'N') +
    (scores.T > scores.F ? 'T' : 'F') +
    (scores.J > scores.P ? 'J' : 'P');
  
  return mbti;
}

function showResult() {
  const mbti = calculateMBTI();
  const result = mbtiResults[mbti];
  
  quizPage.classList.add('hidden');
  resultPage.classList.remove('hidden');
  
  // resultType.textContent = mbti;
  // resultTitle.textContent = result.title;
  // resultDescription.textContent = result.description;
  resultImage.src = `images/${mbti}.jpg`;
  resultImage.alt = `${mbti} Character`;
}

function restartQuiz() {
  resultPage.classList.add('hidden');
  welcomePage.classList.remove('hidden');
  currentQuestion = 0;
  answers = [];
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Ensure welcome page is shown initially
  welcomePage.classList.remove('hidden');
  quizPage.classList.add('hidden');
  resultPage.classList.add('hidden');
});