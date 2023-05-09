import { random } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
// _mock
import _mock from './_mock';

// ----------------------------------------------------------------------

// Made with React Quill
const content = `

<h1>Heading H1</h1><br/>

<h2>Heading H2</h2><br/>

<h3>Heading H3</h3><br/>

<h4>Heading H4</h4><br/>

<h5>Heading H5</h5><br/>

<h6>Heading H6</h6><br/>


<hr>
<h3>Paragraph</h3> 

<p>What is MTAweb Directory?</p>

<p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p>

<p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>
 
<p><strong>This is strong text.</strong></p>

<p><em>This is italic text</em></p>

${`<p><u>This is underline text</u><span class=\"ql-cursor\"></span></p>`}

<hr>
<h3>Unordered list</h3><br/>
${`<ul>
  <li>Implements
    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>
  </li>
  <li>Implements
  <a href="/dashboard/blog">This is an inside link</a>
  </li>
  <li>Renders actual, \"native\" React DOM elements</li>
  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>
  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>
</ul>
`}

<hr>
<h3>Ordered list</h3><br/>
<ol>
  <li>Analysis</li>
  <li>Design</li>
  <li>Implementation</li>
</ol>

<hr>

<h3>Blockquote</h3><br/>

<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>

<hr>

<h3>Block Code</h3><br/>

${`<pre class=\"ql-syntax\" spellcheck=\"false\">cd project-folder\nnpm install\n</pre>`}

${`<pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-keyword\">var</span> React = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'react'</span>);\n<span class=\"hljs-keyword\">var</span> Markdown = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'react-markdown'</span>);\n\nReact.render(\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Markdown1</span> <span class=\"hljs-attr\">source</span>=<span class=\"hljs-string\">\"# Your markdown here\"</span> /&gt;</span>,\n  <span class=\"hljs-built_in\">document</span>.getElementById(<span class=\"hljs-string\">'content'</span>)\n);\n</pre>`}

${`<pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">createStyleObject</span>(<span class=\"hljs-params\">classNames, style</span>) </span>{\n  <span class=\"hljs-keyword\">return</span> classNames.reduce(<span class=\"hljs-function\">(<span class=\"hljs-params\">styleObject, className</span>) =&gt;</span> {\n   <span class=\"hljs-keyword\">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>`}

<p><br></p>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

<p><br></p>

<p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

<p>
<img src='https://res.cloudinary.com/trinhmai/image/upload/v1660897320/_minimal_mock/_Cover/cover_8.jpg'/>
</p>

<p>
It is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.
</p>

<p>
<img src='https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg'/>
</p>

`;

const users = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

const comments = [
  {
    id: uuidv4(),
    name: users[0].name,
    avatarUrl: users[0].avatarUrl,
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
    avatarUrl: users[4].avatarUrl,
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
    avatarUrl: users[8].avatarUrl,
    message: _mock.text.sentence(9),
    postedAt: _mock.time(9),
    users: [],
    replyComment: [],
  },
  {
    id: uuidv4(),
    name: users[9].name,
    avatarUrl: users[9].avatarUrl,
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
    avatarUrl: _mock.image.avatar(index),
  },
  tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
  body: content,
  favoritePerson: [...Array(40)].map((_, index) => ({
    name: _mock.name.fullName(index),
    avatarUrl: _mock.image.avatar(index),
  })),
  comments,
}));
