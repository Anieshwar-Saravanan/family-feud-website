// Default 10 Family Feud Question Sets (7 questions each, 70 total from excel_responses/, randomly shuffled)
// Answer slots 1-3 are Left Column (Top to Bottom), Slots 4-6 are Right Column (Top to Bottom)

const DEFAULT_QUESTION_SETS = [
  {
    id: 1,
    title: "Set 1",
    questions: [
      {
        question: "Name a food disliked by many",
        answers: [
          { id: 1, text: "UPMA", points: 50 },
          { id: 2, text: "IDLI", points: 18 },
          { id: 3, text: "SPINACH RICE", points: 10 },
          { id: 4, text: "CURD RICE", points: 9 },
          { id: 5, text: "VEGETABLE BIRYANI", points: 8 },
          { id: 6, text: "RASAM RICE", points: 5 }
        ]
      },
      {
        question: "Name an Indian sweet that many people love",
        answers: [
          { id: 1, text: "GULAB JAMUN", points: 58 },
          { id: 2, text: "RASGULLA", points: 12 },
          { id: 3, text: "KAJU KATLI", points: 9 },
          { id: 4, text: "MYSORE PAK", points: 8 },
          { id: 5, text: "LADDU", points: 7 },
          { id: 6, text: "JALEBI", points: 6 }
        ]
      },
      {
        question: "Name a Popular AI",
        answers: [
          { id: 1, text: "CHATGPT", points: 49 },
          { id: 2, text: "CLAUDE", points: 21 },
          { id: 3, text: "GEMINI", points: 10 },
          { id: 4, text: "GROK", points: 8 },
          { id: 5, text: "PERPLEXITY", points: 7 },
          { id: 6, text: "META AI", points: 5 }
        ]
      },
      {
        question: "Name something every student has done during an exam.",
        answers: [
          { id: 1, text: "WROTE BIG TO FILL PAGES", points: 31 },
          { id: 2, text: "CHECKED THE CLOCK", points: 24 },
          { id: 3, text: "WROTE THE ANSWER AND THEN ERASED IT", points: 22 },
          { id: 4, text: "DREW DOODLES ON THE QUESTION PAPER", points: 10 },
          { id: 5, text: "ASKED FOR EXTRA SHEETS", points: 7 },
          { id: 6, text: "STARED AT THE CEILING", points: 6 }
        ]
      },
      {
        question: "Name something you would do if you met your favourite celebrity",
        answers: [
          { id: 1, text: "ASK FOR A SELFIE", points: 36 },
          { id: 2, text: "TELL THEM YOU ARE A HUGE FAN", points: 17 },
          { id: 3, text: "SHAKE THEIR HAND", points: 16 },
          { id: 4, text: "FREEZE AND FORGET WHAT TO SAY", points: 12 },
          { id: 5, text: "ASK FOR AN AUTOGRAPH", points: 10 },
          { id: 6, text: "ASK THEM A QUESTION", points: 9 }
        ]
      },
      {
        question: "Name something you don't like people asking you for",
        answers: [
          { id: 1, text: "MONEY", points: 26 },
          { id: 2, text: "FAVOURS", points: 21 },
          { id: 3, text: "HOMEWORK/ASSIGNMENT ANSWERS", points: 18 },
          { id: 4, text: "AGE", points: 13 },
          { id: 5, text: "PHONE", points: 12 },
          { id: 6, text: "ADVICE", points: 10 }
        ]
      },
      {
        question: "Name a fictional world you would love to live in",
        answers: [
          { id: 1, text: "HOGWARTS", points: 43 },
          { id: 2, text: "AVATAR WORLD", points: 18 },
          { id: 3, text: "WAKANDA", points: 15 },
          { id: 4, text: "ASGARD", points: 10 },
          { id: 5, text: "STAR WARS GALAXY", points: 9 },
          { id: 6, text: "WILLY WONKA'S CHOCOLATE FACTORY", points: 5 }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Set 2",
    questions: [
      {
        question: "Name something students do during a boring class",
        answers: [
          { id: 1, text: "TALKING WITH FRIENDS", points: 37 },
          { id: 2, text: "DRAWING IN BOOKS", points: 24 },
          { id: 3, text: "SLEEPING", points: 15 },
          { id: 4, text: "LOOKING OUT THROUGH WINDOW", points: 12 },
          { id: 5, text: "PLAYING GAMES", points: 7 },
          { id: 6, text: "EATING SNACKS", points: 5 }
        ]
      },
      {
        question: "Name an excuse students give for not doing homework.",
        answers: [
          { id: 1, text: "FORGOT THE NOTEBOOK", points: 40 },
          { id: 2, text: "WAS SICK", points: 23 },
          { id: 3, text: "THE DOG ATE IT", points: 15 },
          { id: 4, text: "DIDN'T KNOW THERE WAS HOMEWORK", points: 13 },
          { id: 5, text: "POWER CUT", points: 5 },
          { id: 6, text: "WENT TO A FUNCTION", points: 4 }
        ]
      },
      {
        question: "Name a blockbuster Indian movie that has a sequel.",
        answers: [
          { id: 1, text: "BAAHUBALI", points: 39 },
          { id: 2, text: "PONNIYIN SELVAN", points: 22 },
          { id: 3, text: "KGF", points: 16 },
          { id: 4, text: "SINGAM", points: 12 },
          { id: 5, text: "PUSHPA", points: 6 },
          { id: 6, text: "ENTHIRAN", points: 5 }
        ]
      },
      {
        question: "Name a foreign country where people would like to immigrate",
        answers: [
          { id: 1, text: "USA", points: 44 },
          { id: 2, text: "UNITED KINGDOM", points: 15 },
          { id: 3, text: "AUSTRALIA", points: 14 },
          { id: 4, text: "CANADA", points: 12 },
          { id: 5, text: "UNITED ARAB EMIRATES", points: 9 },
          { id: 6, text: "GERMANY", points: 6 }
        ]
      },
      {
        question: "Name a Popular Birthday Gift",
        answers: [
          { id: 1, text: "PEN", points: 31 },
          { id: 2, text: "WATCH", points: 28 },
          { id: 3, text: "DRESSES", points: 16 },
          { id: 4, text: "FLOWER", points: 10 },
          { id: 5, text: "GADGETS", points: 9 },
          { id: 6, text: "JEWELS", points: 6 }
        ]
      },
      {
        question: "Name a snack that disappears fastest at a party",
        answers: [
          { id: 1, text: "FRENCH FRIES", points: 25 },
          { id: 2, text: "NUGGETS", points: 20 },
          { id: 3, text: "SODA/SOFT DRINK", points: 18 },
          { id: 4, text: "CHIPS", points: 17 },
          { id: 5, text: "CAKE/BROWNIES", points: 12 },
          { id: 6, text: "NACHOS", points: 8 }
        ]
      },
      {
        question: "Name something people do when they see someone they know in public but don't want to talk to them",
        answers: [
          { id: 1, text: "PRETEND NOT TO NOTICE THEM", points: 37 },
          { id: 2, text: "LOOK AT THEIR PHONE", points: 28 },
          { id: 3, text: "AVOID EYE CONTACT", points: 12 },
          { id: 4, text: "CHANGE DIRECTION", points: 9 },
          { id: 5, text: "PRETEND TO BE ON A PHONE CALL", points: 8 },
          { id: 6, text: "PRETEND TO BE BUSY", points: 6 }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Set 3",
    questions: [
      {
        question: "Name something people complain about during summer",
        answers: [
          { id: 1, text: "SWEATING / HUMIDITY", points: 49 },
          { id: 2, text: "FREQUENT POWER CUTS", points: 17 },
          { id: 3, text: "SUN", points: 12 },
          { id: 4, text: "WATER SCARCITY", points: 10 },
          { id: 5, text: "MOSQUITOES", points: 7 },
          { id: 6, text: "AC BREAKING DOWN", points: 5 }
        ]
      },
      {
        question: "Name a reason someone might be late to school/work",
        answers: [
          { id: 1, text: "TRAFFIC", points: 35 },
          { id: 2, text: "WOKE UP LATE", points: 29 },
          { id: 3, text: "TOOK TOO LONG TO GET READY", points: 17 },
          { id: 4, text: "MISSED THE BUS", points: 10 },
          { id: 5, text: "COULD NOT FIND SOMETHING", points: 5 },
          { id: 6, text: "WEATHER", points: 4 }
        ]
      },
      {
        question: "Name a cricketer's famous nickname.",
        answers: [
          { id: 1, text: "THALA (DHONI)", points: 54 },
          { id: 2, text: "KING (KOHLI)", points: 20 },
          { id: 3, text: "BOOM BOOM (BUMRAH)", points: 10 },
          { id: 4, text: "HITMAN (ROHIT)", points: 7 },
          { id: 5, text: "SKY (SURYAKUMAR)", points: 5 },
          { id: 6, text: "GABBAR (DHAWAN)", points: 4 }
        ]
      },
      {
        question: "Name a popular spiderman villain",
        answers: [
          { id: 1, text: "GREEN GOBLIN", points: 31 },
          { id: 2, text: "VENOM", points: 29 },
          { id: 3, text: "SANDMAN", points: 15 },
          { id: 4, text: "DR OCTOPUS", points: 12 },
          { id: 5, text: "ELECTRO", points: 8 },
          { id: 6, text: "MYSTERIO", points: 5 }
        ]
      },
      {
        question: "Name a popular English cricketer who played for CSK",
        answers: [
          { id: 1, text: "SAM CURRAN", points: 43 },
          { id: 2, text: "BEN STOKES", points: 23 },
          { id: 3, text: "MOEEN ALI", points: 13 },
          { id: 4, text: "JAMIE OVERTON", points: 8 },
          { id: 5, text: "SAM BILLINGS", points: 7 },
          { id: 6, text: "ANDREW FLINTOFF", points: 6 }
        ]
      },
      {
        question: "What would a student do if school suddenly announced an unexpected holiday?",
        answers: [
          { id: 1, text: "SLEEP IN", points: 39 },
          { id: 2, text: "WATCH MOVIES OR SERIES", points: 20 },
          { id: 3, text: "PLAY VIDEO GAMES", points: 17 },
          { id: 4, text: "FINISH PENDING HOMEWORK", points: 12 },
          { id: 5, text: "GO ON AN OUTING", points: 7 },
          { id: 6, text: "MEET FRIENDS", points: 5 }
        ]
      },
      {
        question: "Name a favourite Film by Lokesh Kanagaraj",
        answers: [
          { id: 1, text: "VIKRAM", points: 34 },
          { id: 2, text: "KAITHI", points: 22 },
          { id: 3, text: "MASTER", points: 21 },
          { id: 4, text: "LEO", points: 9 },
          { id: 5, text: "MAANAGARAM", points: 8 },
          { id: 6, text: "COOLIE", points: 6 }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Set 4",
    questions: [
      {
        question: "Name something you'd do if you were the principal for one day.",
        answers: [
          { id: 1, text: "CANCEL EXAMS", points: 27 },
          { id: 2, text: "DECLARE A HOLIDAY", points: 21 },
          { id: 3, text: "FREE FOOD IN THE CANTEEN", points: 20 },
          { id: 4, text: "EXTRA PT PERIOD", points: 13 },
          { id: 5, text: "NO HOMEWORK", points: 10 },
          { id: 6, text: "ALLOW PHONES IN CLASS", points: 9 }
        ]
      },
      {
        question: "Name something students are most likely to forget at home before coming to school",
        answers: [
          { id: 1, text: "HOMEWORKS/ASSIGNMENT", points: 39 },
          { id: 2, text: "ID CARD", points: 25 },
          { id: 3, text: "WATER BOTTLE", points: 12 },
          { id: 4, text: "TEXTBOOK", points: 10 },
          { id: 5, text: "STATIONERY/POUCH", points: 9 },
          { id: 6, text: "LUNCH", points: 5 }
        ]
      },
      {
        question: "Name something a student might do five minutes before an exam begins",
        answers: [
          { id: 1, text: "PRAY", points: 28 },
          { id: 2, text: "ASK FRIENDS WHAT THEY STUDIED", points: 19 },
          { id: 3, text: "BORROW STATIONERY ITEMS", points: 18 },
          { id: 4, text: "REVISE IMPORTANT POINTS", points: 17 },
          { id: 5, text: "PANIC", points: 12 },
          { id: 6, text: "READ THE TEXTBOOK", points: 6 }
        ]
      },
      {
        question: "Name a Tamil movie villain everyone remembers.",
        answers: [
          { id: 1, text: "ROLEX (VIKRAM)", points: 37 },
          { id: 2, text: "MUTHUPANDI (GHILLI)", points: 29 },
          { id: 3, text: "NEELAMBARI (PADAYAPPA)", points: 22 },
          { id: 4, text: "BHAVANI (MASTER)", points: 5 },
          { id: 5, text: "VARMAN (JAILER)", points: 4 },
          { id: 6, text: "ANTONY DAS (LEO)", points: 3 }
        ]
      },
      {
        question: "Which Football Club would you never support",
        answers: [
          { id: 1, text: "CHELSEA", points: 30 },
          { id: 2, text: "FC BARCELONA", points: 22 },
          { id: 3, text: "REAL MADRID", points: 15 },
          { id: 4, text: "MANCHESTER CITY", points: 12 },
          { id: 5, text: "MANCHESTER UNITED", points: 11 },
          { id: 6, text: "ARSENAL", points: 10 }
        ]
      },
      {
        question: "Name something you would eat every day if calories didn't matter",
        answers: [
          { id: 1, text: "ICE CREAM", points: 33 },
          { id: 2, text: "BIRYANI", points: 22 },
          { id: 3, text: "CHOCOLATE", points: 18 },
          { id: 4, text: "PIZZA", points: 10 },
          { id: 5, text: "SHAWARMA", points: 9 },
          { id: 6, text: "BURGER", points: 8 }
        ]
      },
      {
        question: "Name an app people check as soon as they wake up",
        answers: [
          { id: 1, text: "INSTAGRAM", points: 41 },
          { id: 2, text: "WHATSAPP", points: 35 },
          { id: 3, text: "CLOCK", points: 12 },
          { id: 4, text: "YOUTUBE", points: 5 },
          { id: 5, text: "SNAPCHAT", points: 4 },
          { id: 6, text: "MAIL", points: 3 }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Set 5",
    questions: [
      {
        question: "Name something that you'd never lend to a friend",
        answers: [
          { id: 1, text: "PERSONAL DIARY", points: 45 },
          { id: 2, text: "PASSWORD", points: 20 },
          { id: 3, text: "PHONE", points: 15 },
          { id: 4, text: "HOUSE KEYS", points: 8 },
          { id: 5, text: "MONEY", points: 7 },
          { id: 6, text: "FOOD", points: 5 }
        ]
      },
      {
        question: "Name a Tamil movie where the hero plays a police officer.",
        answers: [
          { id: 1, text: "SINGAM", points: 45 },
          { id: 2, text: "THERI", points: 20 },
          { id: 3, text: "SAAMY", points: 12 },
          { id: 4, text: "THANI ORUVAN", points: 11 },
          { id: 5, text: "THEERAN ADHIGAARAM ONDRU", points: 7 },
          { id: 6, text: "VETTAIYAN", points: 5 }
        ]
      },
      {
        question: "Name a vegetable hated by many",
        answers: [
          { id: 1, text: "BITTER GOURD", points: 58 },
          { id: 2, text: "SPINACH", points: 12 },
          { id: 3, text: "CABBAGE", points: 9 },
          { id: 4, text: "RADISH", points: 8 },
          { id: 5, text: "BRINJAL", points: 7 },
          { id: 6, text: "CAPSICUM", points: 6 }
        ]
      },
      {
        question: "Name a popular movie snack",
        answers: [
          { id: 1, text: "POPCORN", points: 60 },
          { id: 2, text: "SOFT DRINKS", points: 14 },
          { id: 3, text: "FRENCH FRIES", points: 8 },
          { id: 4, text: "SANDWICH/BURGER", points: 7 },
          { id: 5, text: "DONUTS", points: 6 },
          { id: 6, text: "NACHOS", points: 5 }
        ]
      },
      {
        question: "If you could enter one video game, which one would you choose?",
        answers: [
          { id: 1, text: "MINECRAFT", points: 30 },
          { id: 2, text: "GTA", points: 25 },
          { id: 3, text: "ROBLOX", points: 15 },
          { id: 4, text: "FC 27", points: 12 },
          { id: 5, text: "FORTNITE", points: 10 },
          { id: 6, text: "CALL OF DUTY", points: 8 }
        ]
      },
      {
        question: "Name something people are afraid of",
        answers: [
          { id: 1, text: "EXAMS", points: 30 },
          { id: 2, text: "GHOSTS", points: 18 },
          { id: 3, text: "HEIGHT", points: 17 },
          { id: 4, text: "DARKNESS", points: 13 },
          { id: 5, text: "COCKROACHES", points: 12 },
          { id: 6, text: "SNAKES", points: 10 }
        ]
      },
      {
        question: "Name a fruit/Vegetable that is yellow",
        answers: [
          { id: 1, text: "BANANA", points: 34 },
          { id: 2, text: "MANGO", points: 32 },
          { id: 3, text: "PINEAPPLE", points: 15 },
          { id: 4, text: "CORN", points: 10 },
          { id: 5, text: "LEMON", points: 5 },
          { id: 6, text: "PUMPKIN", points: 4 }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Set 6",
    questions: [
      {
        question: "Name an excuse students give for taking leave",
        answers: [
          { id: 1, text: "FEVER", points: 60 },
          { id: 2, text: "MISSED THE BUS", points: 13 },
          { id: 3, text: "OVERSLEPT", points: 9 },
          { id: 4, text: "FAMILY FUNCTION", points: 7 },
          { id: 5, text: "WENT TO TEMPLE", points: 6 },
          { id: 6, text: "RAIN/BAD WEATHER", points: 5 }
        ]
      },
      {
        question: "Name a favorite character from the Naruto series",
        answers: [
          { id: 1, text: "NARUTO UZUMAKI", points: 28 },
          { id: 2, text: "ITACHI UCHIHA", points: 23 },
          { id: 3, text: "KAKASHI HATAKE", points: 18 },
          { id: 4, text: "MADARA UCHIHA", points: 13 },
          { id: 5, text: "PAIN / NAGATO", points: 10 },
          { id: 6, text: "SASUKE UCHIHA", points: 8 }
        ]
      },
      {
        question: "Name a Tamil music director whose songs you instantly recognise.",
        answers: [
          { id: 1, text: "ANIRUDH", points: 40 },
          { id: 2, text: "A.R. RAHMAN", points: 18 },
          { id: 3, text: "SAI ABHYANKKAR", points: 15 },
          { id: 4, text: "YUVAN SHANKAR RAJA", points: 10 },
          { id: 5, text: "HARRIS JAYARAJ", points: 9 },
          { id: 6, text: "G.V. PRAKASH", points: 8 }
        ]
      },
      {
        question: "Name a cartoon you grew up watching.",
        answers: [
          { id: 1, text: "DORAEMON", points: 30 },
          { id: 2, text: "SHINCHAN", points: 27 },
          { id: 3, text: "CHHOTA BHEEM", points: 17 },
          { id: 4, text: "TOM & JERRY", points: 10 },
          { id: 5, text: "POKÉMON", points: 9 },
          { id: 6, text: "MOTU PATLU", points: 7 }
        ]
      },
      {
        question: "Name a reason someone might delete a message immediately after sending it",
        answers: [
          { id: 1, text: "SENT IT TO THE WRONG PERSON", points: 32 },
          { id: 2, text: "IT WAS EMBARRASSING", points: 17 },
          { id: 3, text: "REGRETTED WHAT THEY SAID", points: 15 },
          { id: 4, text: "CHANGED THEIR MIND", points: 14 },
          { id: 5, text: "REVEALED TOO MUCH INFORMATION", points: 12 },
          { id: 6, text: "SPELLING MISTAKE", points: 10 }
        ]
      },
      {
        question: "Name a superhero you would want as your best friend",
        answers: [
          { id: 1, text: "SPIDERMAN", points: 33 },
          { id: 2, text: "IRON MAN", points: 22 },
          { id: 3, text: "THOR", points: 15 },
          { id: 4, text: "BATMAN", points: 12 },
          { id: 5, text: "DEADPOOL", points: 10 },
          { id: 6, text: "HULK", points: 8 }
        ]
      },
      {
        question: "Name a superhero with the most aura",
        answers: [
          { id: 1, text: "IRON MAN", points: 34 },
          { id: 2, text: "BATMAN", points: 25 },
          { id: 3, text: "THOR", points: 12 },
          { id: 4, text: "CAPTAIN AMERICA", points: 11 },
          { id: 5, text: "SUPERMAN", points: 10 },
          { id: 6, text: "WOLVERINE", points: 8 }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Set 7",
    questions: [
      {
        question: "Name something a batter does after hitting a century.",
        answers: [
          { id: 1, text: "RAISES THE BAT", points: 60 },
          { id: 2, text: "JUMPS IN CELEBRATION", points: 12 },
          { id: 3, text: "LOOKS UP AT THE SKY", points: 10 },
          { id: 4, text: "KISSES HELMET / BADGE", points: 7 },
          { id: 5, text: "POINTS TO DRESSING ROOM", points: 6 },
          { id: 6, text: "HUGS PARTNER", points: 5 }
        ]
      },
      {
        question: "Name something people lie about to their friends",
        answers: [
          { id: 1, text: "STUDIES", points: 43 },
          { id: 2, text: "CRUSH", points: 23 },
          { id: 3, text: "OTHER FRIENDS", points: 15 },
          { id: 4, text: "STAYING UP LATE", points: 10 },
          { id: 5, text: "MONEY", points: 5 },
          { id: 6, text: "SCREEN TIME", points: 4 }
        ]
      },
      {
        question: "Name a famous Tamil comedian.",
        answers: [
          { id: 1, text: "VADIVELU", points: 46 },
          { id: 2, text: "VIVEK", points: 16 },
          { id: 3, text: "SANTHANAM", points: 15 },
          { id: 4, text: "GOUNDAMANI", points: 12 },
          { id: 5, text: "SENTHIL", points: 6 },
          { id: 6, text: "YOGI BABU", points: 5 }
        ]
      },
      {
        question: "Name something kids fight over with their siblings.",
        answers: [
          { id: 1, text: "TV REMOTE", points: 28 },
          { id: 2, text: "PHONE", points: 22 },
          { id: 3, text: "LAST PIECE OF FOOD", points: 19 },
          { id: 4, text: "BATHROOM", points: 16 },
          { id: 5, text: "WINDOW SEAT", points: 9 },
          { id: 6, text: "ROOM", points: 6 }
        ]
      },
      {
        question: "Name a sportsperson with more Aura",
        answers: [
          { id: 1, text: "MS DHONI", points: 50 },
          { id: 2, text: "CRISTIANO RONALDO", points: 18 },
          { id: 3, text: "LIONEL MESSI", points: 15 },
          { id: 4, text: "VIRAT KOHLI", points: 8 },
          { id: 5, text: "KYLIAN MBAPPE", points: 5 },
          { id: 6, text: "MICHAEL JORDAN", points: 4 }
        ]
      },
      {
        question: "Name something which you would pick for a beach vacation",
        answers: [
          { id: 1, text: "SUNSCREEN", points: 25 },
          { id: 2, text: "SUNGLASSES", points: 22 },
          { id: 3, text: "TOWEL", points: 20 },
          { id: 4, text: "SWIMSUIT", points: 15 },
          { id: 5, text: "HAT/CAP", points: 10 },
          { id: 6, text: "SWIMMING GLASSES/GEAR", points: 8 }
        ]
      },
      {
        question: "Name a Tamil hero with the biggest fan following.",
        answers: [
          { id: 1, text: "VIJAY", points: 59 },
          { id: 2, text: "RAJINIKANTH", points: 12 },
          { id: 3, text: "SURIYA", points: 11 },
          { id: 4, text: "AJITH", points: 7 },
          { id: 5, text: "SIVAKARTHIKEYAN", points: 6 },
          { id: 6, text: "DHANUSH", points: 5 }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Set 8",
    questions: [
      {
        question: "Name a food items that starts with the letter \"S\"",
        answers: [
          { id: 1, text: "SAMBAR", points: 35 },
          { id: 2, text: "SHAWARMA", points: 29 },
          { id: 3, text: "SANDWICH", points: 12 },
          { id: 4, text: "SOUP", points: 10 },
          { id: 5, text: "SAMOSA", points: 9 },
          { id: 6, text: "SALAD", points: 5 }
        ]
      },
      {
        question: "Name a popular pixar movie",
        answers: [
          { id: 1, text: "TOY STORY", points: 29 },
          { id: 2, text: "CARS", points: 22 },
          { id: 3, text: "FINDING NEMO", points: 15 },
          { id: 4, text: "THE INCREDIBLES", points: 14 },
          { id: 5, text: "INSIDE OUT", points: 12 },
          { id: 6, text: "MONSTER INC", points: 8 }
        ]
      },
      {
        question: "Name something that you'd buy if you're extremely rich",
        answers: [
          { id: 1, text: "HOUSE/MANSION", points: 40 },
          { id: 2, text: "ISLAND/RESORT", points: 18 },
          { id: 3, text: "EXPENSIVE GADGETS", points: 15 },
          { id: 4, text: "CAR", points: 12 },
          { id: 5, text: "PRIVATE JET", points: 10 },
          { id: 6, text: "DESIGNER CLOTHES", points: 5 }
        ]
      },
      {
        question: "Name something people do on their phone during a boring movie.",
        answers: [
          { id: 1, text: "SCROLL INSTAGRAM", points: 39 },
          { id: 2, text: "CHECK THE TIME", points: 22 },
          { id: 3, text: "CHECK WHATSAPP", points: 19 },
          { id: 4, text: "PLAY A GAME", points: 9 },
          { id: 5, text: "CHECK REVIEWS / SPOILERS", points: 6 },
          { id: 6, text: "TAKE SELFIES", points: 5 }
        ]
      },
      {
        question: "Name a game students play with friends inside the classroom during a break",
        answers: [
          { id: 1, text: "XO / TIC-TAC-TOE", points: 31 },
          { id: 2, text: "HAND CRICKET", points: 26 },
          { id: 3, text: "ROCK-PAPER-SCISSORS", points: 15 },
          { id: 4, text: "ZOOM", points: 13 },
          { id: 5, text: "TRUTH OR DARE", points: 10 },
          { id: 6, text: "BINGO", points: 5 }
        ]
      },
      {
        question: "Name a slang word kids use that parents need Google to understand",
        answers: [
          { id: 1, text: "RIZZ", points: 38 },
          { id: 2, text: "AURA", points: 22 },
          { id: 3, text: "NO CAP", points: 12 },
          { id: 4, text: "GOAT", points: 11 },
          { id: 5, text: "SUS", points: 9 },
          { id: 6, text: "COOKED", points: 8 }
        ]
      },
      {
        question: "Name something students do during online classes",
        answers: [
          { id: 1, text: "TURN OFF THE CAMERA", points: 27 },
          { id: 2, text: "CHAT WITH FRIENDS", points: 20 },
          { id: 3, text: "PRETEND THE INTERNET WAS NOT WORKING", points: 19 },
          { id: 4, text: "PLAY GAMES IN ANOTHER TAB", points: 17 },
          { id: 5, text: "SLEEP DURING CLASS", points: 10 },
          { id: 6, text: "EAT SNACKS", points: 7 }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Set 9",
    questions: [
      {
        question: "Name a job that can make you rich quickly",
        answers: [
          { id: 1, text: "POLITICIAN", points: 47 },
          { id: 2, text: "ACTOR", points: 22 },
          { id: 3, text: "ENGINEER", points: 10 },
          { id: 4, text: "DOCTOR", points: 9 },
          { id: 5, text: "SINGER", points: 7 },
          { id: 6, text: "TEACHER", points: 5 }
        ]
      },
      {
        question: "Name a famous Indian athlete who is not a cricketer.",
        answers: [
          { id: 1, text: "P.V. SINDHU", points: 34 },
          { id: 2, text: "SUNIL CHHETRI", points: 19 },
          { id: 3, text: "NEERAJ CHOPRA", points: 18 },
          { id: 4, text: "MARY KOM", points: 12 },
          { id: 5, text: "GUKESH", points: 11 },
          { id: 6, text: "MANU BHAKER", points: 6 }
        ]
      },
      {
        question: "Name a Bollywood actor everyone tries to imitate.",
        answers: [
          { id: 1, text: "SHAH RUKH KHAN", points: 60 },
          { id: 2, text: "AMITABH BACHCHAN", points: 13 },
          { id: 3, text: "AKSHAY KUMAR", points: 9 },
          { id: 4, text: "SALMAN KHAN", points: 7 },
          { id: 5, text: "RANVEER SINGH", points: 6 },
          { id: 6, text: "RANBIR KAPOOR", points: 5 }
        ]
      },
      {
        question: "Name something which comes to mind on hearing diwali",
        answers: [
          { id: 1, text: "FIREWORKS", points: 52 },
          { id: 2, text: "SWEETS", points: 15 },
          { id: 3, text: "HOLIDAY", points: 14 },
          { id: 4, text: "LAMP/DIYA", points: 10 },
          { id: 5, text: "FAMILY TIME", points: 5 },
          { id: 6, text: "NEW CLOTHES", points: 4 }
        ]
      },
      {
        question: "Name something people do when their phone battery reaches 5%",
        answers: [
          { id: 1, text: "LOOK FOR A CHARGER", points: 31 },
          { id: 2, text: "SWITCH ON BATTERY SAVER/LOW POWER MODE", points: 24 },
          { id: 3, text: "RUSH TO FIND A CHARGING POINT", points: 20 },
          { id: 4, text: "REDUCE SCREEN BRIGHTNESS", points: 12 },
          { id: 5, text: "STOP USING THE PHONE", points: 7 },
          { id: 6, text: "SEARCH FOR A POWER BANK", points: 6 }
        ]
      },
      {
        question: "Name a superpower people would love to have",
        answers: [
          { id: 1, text: "TIME TRAVEL", points: 37 },
          { id: 2, text: "READING MINDS", points: 21 },
          { id: 3, text: "INVISIBILITY", points: 18 },
          { id: 4, text: "TELEPORTATION", points: 10 },
          { id: 5, text: "FLYING", points: 9 },
          { id: 6, text: "SUPER STRENGTH", points: 5 }
        ]
      },
      {
        question: "Name something you do when you're bored",
        answers: [
          { id: 1, text: "SCROLL THE PHONE / SOCIAL MEDIA", points: 26 },
          { id: 2, text: "SLEEP", points: 23 },
          { id: 3, text: "LISTEN TO MUSIC", points: 18 },
          { id: 4, text: "PLAY GAMES", points: 13 },
          { id: 5, text: "WATCH TV", points: 12 },
          { id: 6, text: "EAT", points: 8 }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Set 10",
    questions: [
      {
        question: "Name something that always happens in a mass hero intro scene.",
        answers: [
          { id: 1, text: "SLOW-MOTION WALK", points: 41 },
          { id: 2, text: "INTRO SONG", points: 18 },
          { id: 3, text: "VILLAINS FLY IN THE AIR", points: 15 },
          { id: 4, text: "FIRE / SMOKE BEHIND HIM", points: 13 },
          { id: 5, text: "PUNCH DIALOGUE", points: 8 },
          { id: 6, text: "SOMETHING WITH SUNGLASSES", points: 5 }
        ]
      },
      {
        question: "Name something people do when their favourite song starts playing",
        answers: [
          { id: 1, text: "SING ALONG", points: 38 },
          { id: 2, text: "TURN UP THE VOLUME", points: 35 },
          { id: 3, text: "REPLAY THE SONG", points: 10 },
          { id: 4, text: "SHARE THE SONG WITH A FRIEND", points: 8 },
          { id: 5, text: "DANCE", points: 5 },
          { id: 6, text: "USE IT AS THEIR STATUS/STORY", points: 4 }
        ]
      },
      {
        question: "Name a place in India where families like to go for summer vacation",
        answers: [
          { id: 1, text: "OOTY", points: 37 },
          { id: 2, text: "KODAIKANAL", points: 23 },
          { id: 3, text: "SHIMLA", points: 13 },
          { id: 4, text: "MANALI", points: 10 },
          { id: 5, text: "GOA", points: 9 },
          { id: 6, text: "MUNNAR", points: 8 }
        ]
      },
      {
        question: "Name something that makes a group project difficult",
        answers: [
          { id: 1, text: "MEMBERS NOT RESPONDING TO MESSAGES", points: 36 },
          { id: 2, text: "UNEQUAL DIVISION OF WORK", points: 21 },
          { id: 3, text: "ONE PERSON DOING ALL THE WORK", points: 18 },
          { id: 4, text: "DISAGREEMENTS OVER IDEAS", points: 10 },
          { id: 5, text: "SOMEONE MISSING DEADLINES", points: 8 },
          { id: 6, text: "SCHEDULING A TIME TO MEET", points: 7 }
        ]
      },
      {
        question: "Name something that can ruin a good movie",
        answers: [
          { id: 1, text: "BAD ACTING", points: 29 },
          { id: 2, text: "SPOILERS", points: 22 },
          { id: 3, text: "WATCHING IT WITH THE WRONG PEOPLE", points: 18 },
          { id: 4, text: "VERY LENGTHY", points: 12 },
          { id: 5, text: "BAD MUSIC", points: 10 },
          { id: 6, text: "BAD GRAPHICS", points: 9 }
        ]
      },
      {
        question: "Name a chaat item people love eating as a snack",
        answers: [
          { id: 1, text: "PANI PURI", points: 57 },
          { id: 2, text: "BHEL PURI", points: 12 },
          { id: 3, text: "PAV BHAJI", points: 10 },
          { id: 4, text: "SAMOSA CHAAT", points: 9 },
          { id: 5, text: "DAHI PURI", points: 7 },
          { id: 6, text: "VADA PAV", points: 5 }
        ]
      },
      {
        question: "Name something people do during a long car journey",
        answers: [
          { id: 1, text: "LISTEN TO MUSIC", points: 53 },
          { id: 2, text: "SLEEP", points: 23 },
          { id: 3, text: "SNACKING", points: 8 },
          { id: 4, text: "CHATTING", points: 7 },
          { id: 5, text: "CAR GAMES", points: 5 },
          { id: 6, text: "ON THEIR PHONE", points: 4 }
        ]
      }
    ]
  }
];

// Helper to manage storage
const STORAGE_KEY = 'family_feud_question_sets_v3';

function loadQuestionSets() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load saved questions, using defaults', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_QUESTION_SETS));
}

function saveQuestionSets(sets) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sets));
  } catch (e) {
    console.error('Failed to save questions to localStorage', e);
  }
}

function resetToDefaultQuestions() {
  saveQuestionSets(DEFAULT_QUESTION_SETS);
  return JSON.parse(JSON.stringify(DEFAULT_QUESTION_SETS));
}
