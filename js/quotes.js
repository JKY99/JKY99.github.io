const quotes = [
    {
    quote : "승리는 가장 끈기 있는 자에게 돌아간다.",
    author: "나폴레옹 보나파르트",
    },
    {
    quote : "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인",
    },
    {
    quote : "일은 해보면 쉬운 법이다. 그럼에도 시작은 하지 않고 어렵다고만 생각하기에 할 수 있는 일들을 놓친다.",
    author: "맹자",
    },
    {
    quote : "새는 알을 깨고 나온다. 알은 세계이다. 태어나려는 자는 하나의 세계를 파괴해야한다.",
    author: "헤르만헤세",
    },
    {
    quote : "거리낌 없이 한 시간을 낭비하는 삭람은 아직 삶의 가치를 발견하지 못한 사람이다.",
    author: "찰스 다윈",
    },
    {
    quote : "계획 없는 목표는 한낱 꿈에 불과하다.",
    author: "생텍쥐페리",
    },
    {
    quote : "목표에 도달했을 때 돌아서지 마라.",
    author: "퍼블릴리어스 사이러스",
    },
    {
    quote : "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.",
    author: "워싱턴 어빙",
    },
    {
    quote : "나는 폭풍이 두렵지 않다. 나의 배로 항해하는 법을 배우고 있으니까.",
    author: "헬렌 켈러",
    },
    {
    quote : "나는 믿음을 존중하지만 우리를 가르치는 것은 의구심이다.",
    author: "윌슨 미즈너",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = "-"+todaysQuote.author+"-";