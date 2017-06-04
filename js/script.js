var colors = ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#95a5a6", "#7f8c8d" ];
var rand = "";
var quotes = [
  {
    "ID": 1214,
    "title": "William Allin",
    "content": "<p>Education is not the answer to the question. Education is the means to the answer to all questions.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/william-allin\/"
  },
  {
    "ID": 2259,
    "title": "Richard Saul Wurman",
    "content": "<p>Most of what we see that we call information doesn&#8217;t inform, and most questions do not have a quest.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/richard-saul-wurman\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/celebratedesign.org\/inform\/engage\/story-interstitial\/richard-saul-wurman-information\">website<\/a>"
    }
  },
  {
    "ID": 622,
    "title": "Micha Commeren",
    "content": "<p>The function of design is letting design function.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/micha-commeren\/"
  },
  {
    "ID": 1548,
    "title": "Fiona Morrison",
    "content": "<p>When a company gets to certain size, it&#8217;s easy just to let things happen. You have to constantly craft and nurture a brand. You can&#8217;t just let it be or it&#8217;ll fritter away to mediocrity.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/fiona-morrison\/"
  },
  {
    "ID": 200,
    "title": "Jeffrey Zeldman",
    "content": "<p>For web designers, there are four keys to surviving bad economic times: do good work, charge a fair price, lower your overhead, and be sure you are communicating with your client.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/jeffrey-zeldman\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/24ways.org\/2008\/recession-tips-for-web-designers\">website<\/a>"
    }
  },
  {
    "ID": 1454,
    "title": "Jack Kerouac",
    "content": "<p>Great things are not accomplished by those who yield to trends and fads and popular opinion. <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/jack-kerouac\/"
  },
  {
    "ID": 1411,
    "title": "Charlie Chaplin",
    "content": "<p>That\u2019s what all we are: amateurs. We don\u2019t live long enough to be anything else.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/charlie-chaplin\/"
  },
  {
    "ID": 1257,
    "title": "Heather Phillips",
    "content": "<p>Being a graphic designer gets you used to rejection of your brilliance. So it&#8217;s good practice for dating.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/heather-phillips\/"
  },
  {
    "ID": 2285,
    "title": "Josh Collinsworth",
    "content": "<p>You can be misunderstood exactly once. After that, you are not being misunderstood; you are communicating poorly.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/josh-collinsworth-2\/"
  },
  {
    "ID": 1020,
    "title": "Jan Michl",
    "content": "<p>Design is redesign.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/jan-michl\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/www.designaddict.com\/essais\/michl.html\">arcticle<\/a>"
    }
  },
  {
    "ID": 50,
    "title": "Jeffrey Veen",
    "content": "<p>I&#8217;ve been amazed at how often those outside the discipline of design assume that what designers do is decoration. Good design is problem solving.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/jeffrey-veen-2\/"
  },
  {
    "ID": 1270,
    "title": "Greg Hudson",
    "content": "<p>It is important not to let the perfect become the enemy of the good, even when you can agree on what perfect is. Doubly so when you can&#8217;t. As unpleasant as it is to be trapped by past mistakes, you can&#8217;t make any progress by being afraid of your own shadow during design.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/greg-hudson\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/svnbook.red-bean.com\/en\/1.5\/svn-book.html#svn.preface\">documentation<\/a>"
    }
  },
  {
    "ID": 2326,
    "title": "Bruce Ediger",
    "content": "<p>The only &#8220;intuitive&#8221; interface is the nipple. After that it&#8217;s all learned.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/bruce-ediger\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/www.greenend.org.uk\/rjk\/misc\/nipple.html\">website<\/a>"
    }
  },
  {
    "ID": 1233,
    "title": "William Caslon",
    "content": "<p>When in doubt, use Caslon.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/william-caslon\/"
  },
  {
    "ID": 1732,
    "title": "Nicholas Burroughs",
    "content": "<p>Minimalism is not a lack of something. It\u2019s simply the perfect amount of something.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/nicholas-burroughs\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/www.nicholasburroughs.com\/designschooldropout\/?p=683\">article<\/a>"
    }
  },
  {
    "ID": 1437,
    "title": "Salvador Dali",
    "content": "<p>At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since. <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/salvador-dali-3\/"
  },
  {
    "ID": 1385,
    "title": "Gombrowicz",
    "content": "<p>Stop being afraid of your own pictures, stop worshiping art, treat it the Polish way, condescendingly, make it obedient, and then your originality will release itself in you, new roads will open in front of you and you will gain what is most valuable, most fertile: your own reality.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/gombrowicz\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/www.abinarylife.com\/2010\/04\/gombrowicz\/\">website<\/a>"
    }
  },
  {
    "ID": 2161,
    "title": "Steve Krug",
    "content": "<p>Don\u2019t let your design resist your readers. Don\u2019t let it stand in the way of what they want to do: read.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/steve-krug-4\/"
  },
  {
    "ID": 1420,
    "title": "John Maeda",
    "content": "<p>The simplest way to achieve simplicity is through thoughtful reduction.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/john-maeda-3\/"
  },
  {
    "ID": 58,
    "title": "Jesse James Garrett",
    "content": "<p>Problems with visual design can turn users off so quickly that they never discover all the smart choices you made with navigation or interaction design.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/jesse-james-garrett\/"
  },
  {
    "ID": 1085,
    "title": "Charles Willson",
    "content": "<p>The definition of an expert is someone who knows what not to do.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/charles-willson\/"
  },
  {
    "ID": 754,
    "title": "Lorraine Wild",
    "content": "<p>You have to be interested in culture to design for it.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/lorraine-wild\/"
  },
  {
    "ID": 442,
    "title": "Don Norman",
    "content": "<p>Behavioral design is all about feeling in control. Includes: usability, understanding, but also the feel.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/don-norman\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/www.ted.com\/talks\/don_norman_on_design_and_emotion.html\">talk<\/a>"
    }
  },
  {
    "ID": 2240,
    "title": "Samadara Ginige",
    "content": "<p>Design is everywhere. From the dress you\u2019re wearing to the smartphone you\u2019re holding, it&#8217;s design.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/samadara-ginige-2\/"
  },
  {
    "ID": 26,
    "title": "Mike Davidson",
    "content": "<p>I didn&#8217;t get into design to be an artist. To me, an artist creates things to evoke emotion. Being a designer goes a step further than that, not only trying to evoke emotion but trying to make a reaction. It is very objective-driven, and that&#8217;s what makes it interesting.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/mike-davidson\/"
  },
  {
    "ID": 415,
    "title": "Bill Bernback",
    "content": "<p>Never do anything yourself that you can hire someone else to do, especially if they can do it better.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/bill-bernback\/"
  },
  {
    "ID": 427,
    "title": "Winston Churchill",
    "content": "<p>However beautiful the strategy, you should occasionally look at the results.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/winston-churchill\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/www.amazon.com\/gp\/product\/159253127X?ie=UTF8&tag=css-tricks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=159253127X\">book<\/a>"
    }
  },
  {
    "ID": 1721,
    "title": "Stephen Fry",
    "content": "<p>As if a device can function if it has no style. As if a device can be called stylish that does not function superbly&#8230; yes, beauty matters. Boy, does it matter. It is not surface, it is not an extra, it is the thing itself.<\/p>\n",
    "link": "https:\/\/quotesondesign.com\/stephen-fry\/",
    "custom_meta": {
      "Source": "<a href=\"http:\/\/www.guardian.co.uk\/technology\/2007\/oct\/27\/gadgets.digitalmedia\">article<\/a>"
    }
  },
  {
    "ID": 1379,
    "title": "Chuck Green",
    "content": "<p>Good design is partially creativity and innovation, but primarily knowledge and awareness.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/chuck-green\/"
  },
  {
    "ID": 1405,
    "title": "Leonard Bernstein",
    "content": "<p>To achieve great things, two things are needed: a plan, and not quite enough time.  <\/p>\n",
    "link": "https:\/\/quotesondesign.com\/leonard-bernstein\/"
  }
];
 
function changeColors() {
    rand = Math.floor((Math.random() * 18) + 1);
    $("body").css("background", colors[rand]);
    $("#shareTwitter").css("background-color", colors[rand]);
    $("#newQuote").css("background-color", colors[rand]);
    $("blockquote #quote").css("color", colors[rand]);
    $("blockquote small").css("color", colors[rand]);
    $("blockquote").css("color", colors[rand]);
}

function changeQuotes() {
    rand = Math.floor((Math.random() * 29) + 1);
    $("blockquote #quote").html(quotes[rand].content);
    $("blockquote small").html(quotes[rand].title);
    $("#shareTwitter").attr("href", 'https://twitter.com/intent/tweet?text=\"' + $("blockquote #quote").text() + '\" ' + $("blockquote small").text() + ' %23quotes');
}

$(document).ready(function() {
    
    changeColors();
    changeQuotes();
  
    $("#newQuote").on("click", function(){
       changeColors();
       changeQuotes();
    });
    
});