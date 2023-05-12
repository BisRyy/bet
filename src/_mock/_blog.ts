import { random } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
// _mock
import _mock from './_mock';
import { boolean } from './assets/boolean';

// ----------------------------------------------------------------------

// Made with React Quill
const content = `

<h3> ቅድስት ፌቤን እና ዳግማዊ ቅዱስ ጳውሎስ </h3>

<p> ቅድስት ፌቤን እና የአምስት ዓመት ልጇ ዳግማዊ ጳውሎስ ጨካኙ ገዥ ኔሮን ቄሳር የሮማ ክርስትያኖችን እያሳደደ 
በሚጨፈጭፍበት ወቅት የነበሩ የቤተክርስቲያን ዕንቁዎች ናቸው፡፡ ፌቤን የሮም ተወላጅ ስትሆን በትዳር ምክንያት 
ወደ ክንክራኦስ ተጉዛለች፡፡ ክርስትናንም የተቀበለችው ክንክራኦስ በምትኖርበት ሰዓት ነበር፡፡ ታዋቂው የግሪክ 
ሀብታም የነበረው ባለቤቷ የክርስትናን እምነት ለመቀበል ባለመቻሉ ጨርቄን <u> ማቄን ሳትል የምትወደውን አንድ 
ልጇን ይዛ ከቤት ወጣች፡፡</u>  </p>

<p> ከዛን ቀን ጀምራ የሐዋርያው <em> ቅዱስ ጳውሎስ </em> ቀኝ እጅ ሆነች፡፡ ወደ አውሮፓና እስያ ሲመላለስ ማረፊያው እሷ ነበረች፡፡ መንደገኛ ክርስትያኖች፣ የሐዋርያት መልዕክተኞች እና የተሰደዱ ቅዱሳን ሁሉ ከፌቤን ቤት አይጠፉም ነበር፡፡ ሐዋርያው ጳውሎስ ልጇና ይወደው ስለነበር በሚገባው መንገድ ስለሐዋርያነት አገልግሎት፣ ስለ ክርስትያኖች የመከራ ኑሮና የሰማዕትነት ቆራጥነት ይነግረው ነበር፡፡ ልጇም ከትናንሽ ዐይኖቹ እንባ እየወረዱ <strong> እኔም ለክርስቶስ ሰማዕት መሆን እፈልጋለሁ ፡፡ </strong> ይለው ነበር፡፡ </p>

<p><span style="color: rgb(230, 0, 0);">ታዲያ ፌቤን የቅዱስ ጳውሎስን መልዕክት ተቀብላ ወደ ሮሜ ስታመራ ልጇም አልለይም ስላላት አዝላው አመራች፡፡ </span></p>

<p> ፌቤን ቅርጫት ተሸክማ በሮሜ መንገዶች ላይ ''ቆሻሻ አላችሁ'' እያለች ክርስቲያኖች ወደ ተደበቁበት ቤት ታመራለች። ወደቤት ገብታ በቅርጫት ስር  ያመጣችላቸውን ንፍሮ ትሰጣቸውና የጳውሎስን መልዕክት ታነብላቸዋለች። መልዕክቱን ሲሰሙ ሁሉም በእንባ ይራጫሉ፡፡ እንባቸውንም ጠርገው እንዲህ እያሉ ይዘምራሉ፡፡</span></p>

<hr>

<blockquote>ማን ነው የሚለየን ጌታ ካንተ ፍቅር <br />
መከራና ስቃይ ረሃብ ወይስ ችግር <br />
ሰይፍ ቢዘረጋ ጎራዴ ቢወደር <br />
ባንችል በምድር ላይ እንደ ሰው መኖር <br />
የለም የሚለየን ጌታ ካንተ ፍቅር &nbsp;</blockquote>

<hr>


<p>ብዙዎች የፌቤንን መምጣት ሲሰሙ እጥፍ ድርብ ይሆናሉ፡፡ የክርስትያኖችም ቁጥር ዕለት ዕለት እየጨመረ ይመጣ ነበር፡፡ የፌቤን እና የልጇ ስራ ያበሳጨው ኔሮን አመቺ ጊዜና ሰዓት ጠብቆ ሲሞን በሚሉት ከሐዲ አጋዥነት ሁለቱንም እጁ ውስጥ አገባ፡፡ ኔሮን ክርስቶስን ለማስካድ ብዙ ቢሞክርም ፌቤን ግን የምትሸነፍ አልሆነችም፡፡ እንዲያውም <u> ክርስቶስ ሲፈልጉት የሚያወልቁት ልብስ ሳይሆን በደም ስር የተዋሐደ ነፍስ ነው፡፡ ብሞት እንኳን ነፍሴ አብራው ትኖራለች፡፡ </u> እያለች ይበልጥ ንዴቱን ታባብስበት ነበር፡፡ በመጨረሻም ልጇ ዳግማዊ ተወርውሮ ሙሉ የሰውነት አካሉ ተበታትኖ፣ ፌቤን አንገቷን በሰይፍ ተሰይፋ፣ እናት እና ልጅ በአንድ ቀን የሰማዕትነትን አክሊል ተቀዳጁ፡፡ 
 የክርስትና ክብሩ የጽናቱ ብዛት ነው፡፡  <br /> </p>

 <h6> የቅድስት ፌቤን እና ዳግማዊ ቅዱስ ጳውሎስ ረድኤት በረከት ይደርብን፣ </h6> <br /> <br />
 <hr>
  <h2>ግንቦት 02 ረቡዕ ጉባኤ </h2>

  <h3> እንኳን ለእናታችን ለቅድስት ልደታ ለማርያም ዓመታዊ በዓል በሰላም አደረሳችሁ! </h3> <br />
  
  <p> የተወደዳችሁ የእግዚአብሔር ቤተሰቦች ዛሬ (02/09/2015 ዓ.ም) የአንድነት ጉባኤ በደማቅ ሁኔታ ይካሔዳል።</h3><br/>

  
  <p>
  <img src='/assets/images/covers/cover_25.jpg' height='1000' />
  </p>

<h3>በጉባኤው የሚኖሩ መርሐ ግብራት</p><br/>
${`<ul>
  <li>ጸሎት(ውዳሴ ማርያም በዜማ)</li>
  <li>ትምህርተ ወንጌል</li>
  <li>መዝሙር -  በተጋባዥ ዘማሪ</li>
  <li>በ
    <a href="https://https://t.me/gibigubae" > Telegram </a> 
  </li>
</ul>
`}

<hr>
<h3>ወደ ጉዞ ስንመጣ መርሳት የሌለብን ነገሮች:</h3><br/>
<ol>
  <li>ነጠላ፣አንሶላ እና የሌሊት ልብስ(ፎጣ) መያዝ</li>
  <li>የግቢ መታወቂያ መያዝ</li>
  <li>የጉዞ ቲኬት መያዝ: በሞባይል ባንኪንግ የቆረጣችሁ ደግሞ የደረሰኝ እስክሪንሹት እና የትኬት ቁጥር መናገር ።</li>
  <li>አንዳንድ በገዳሙ የሚሸጡ ለበረከት የሚሆኑ ነገሮችን ለመግዛት ከፈለገን ገንዘብ</li>
  <li>ሻርፕ 12:00 ሰዓት ላይ ቱሉዲምቱ በር ላይ መገኘት።</li>
</ol>

<hr>

<blockquote>ለእግዚአብሔር ምስጋና ይሁን እኛንም በከበሩ ቅዱሳኑ ጸሎት ይማረን በረከታቸውም ከእኛ ጋር ለዘለዓለሙ ይሁን አሜን፡፡ &nbsp;</blockquote>

<hr>

`;

const users = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  photoURL : _mock.image.avatar(index),
}));

const comments = [
  {
    id: uuidv4(),
    name: users[0].name,
    photoURL : users[0].photoURL ,
    message: _mock.text.sentence(1),
    postedAt: _mock.time(1),
    users: [users[0], users[1], users[2]],
    replyComment: [
      {
        id: uuidv4(),
        userId: users[1].id,
        message: _mock.text.sentence(2),
        postedAt: _mock.time(2),
      },
      {
        id: uuidv4(),
        userId: users[0].id,
        message: _mock.text.sentence(3),
        tagUser: users[1].name,
        postedAt: _mock.time(3),
      },
      {
        id: uuidv4(),
        userId: users[2].id,
        message: _mock.text.sentence(4),
        postedAt: _mock.time(4),
      },
    ],
  },
  {
    id: uuidv4(),
    name: users[4].name,
    photoURL : users[4].photoURL ,
    message: _mock.text.sentence(5),
    postedAt: _mock.time(5),
    users: [users[5], users[6], users[7]],
    replyComment: [
      {
        id: uuidv4(),
        userId: users[5].id,
        message: _mock.text.sentence(6),
        postedAt: _mock.time(6),
      },
      {
        id: uuidv4(),
        userId: users[6].id,
        message: _mock.text.sentence(7),
        postedAt: _mock.time(7),
      },
      {
        id: uuidv4(),
        userId: users[7].id,
        message: _mock.text.sentence(8),
        postedAt: _mock.time(8),
      },
    ],
  },
  {
    id: uuidv4(),
    name: users[8].name,
    photoURL : users[8].photoURL ,
    message: _mock.text.sentence(9),
    postedAt: _mock.time(9),
    users: [],
    replyComment: [],
  },
  {
    id: uuidv4(),
    name: users[9].name,
    photoURL : users[9].photoURL ,
    message: _mock.text.sentence(10),
    postedAt: _mock.time(10),
    users: [],
    replyComment: [],
  },
];

export const posts = [...Array(23)].map((_, index) => ({
  id: _mock.id(index),
  cover: _mock.image.cover(index),
  title: _mock.text.title(index),
  description: _mock.text.sentence(index),
  createdAt: _mock.time(index),
  view: random(9999),
  comment: random(9999),
  share: random(9999),
  favorite: random(9999),
  author: {
    name: _mock.name.fullName(index),
    photoURL : _mock.image.avatar(index),
  },
  tags: ["Orthodox",  "Theology",  "Spirituality",  "Worship",  "Church History"],
  content,
  favoritePerson: [...Array(40)].map((_, index) => ({
    name: _mock.name.fullName(index),
    photoURL : _mock.image.avatar(index),
  })),
  comments,
  commentsOn: index % 2 === 0,
}));

export const TAGS_OPTION = [  "Orthodox", "Education",  "Theology",  "Spirituality",  "Worship",  "Church History",  "Church Tradition",  "Feasts and Fasts",  "Iconography",  "Prayer",  "Liturgy",  "Sacraments",  "Missions",  "Evangelism",  "Monasticism",  "Christian Unity",  "Bible Study",  "Christian Living",  "Family Life",  "Marriage",  "Parenting",  "Youth Ministry",  "Community Outreach",  "Charitable Works",  "Philanthropy",  "Social Justice",  "Ecumenism",  "Church Music",  "Byzantine Chant",  "Church Architecture",  "Spiritual Formation",  "Church Leadership",  "Catechism",  "Christian Education",  "Theosis",  "Asceticism",  "Martyrdom",  "Saints and Holy Men and Women",  "Theotokos",  "Biblical Studies",  "Biblical Languages",  "Pastoral Care",  "Missionary Work",  "Church Planting",  "Ecclesiology",  "Eastern Christianity",  "The Bible",  "Church Fathers",  "Religious Art",  "Divine Liturgy",  "Orthodox Ethics",  "Church and State",  "Soteriology",  "Orthodox Spirituality",  "Christian Mysticism",  "Christian Ethics",  "Christian Morality"]
