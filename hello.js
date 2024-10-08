//coming soon
const articleNames = [
    "test", "Hey there!"
]

const articleSubtitles = [
    "testing", "its @parking_turkeys"
]

const articles = [
    "testing,testing,one,two,three! <h1>hi</h1> <button onclick = 'alert()'>hi</button>", "hello"
]

const titles = [
    "A test of your abilities", "hey"
]
getArticles()


function replaceArticle(indexOfArticle) {
    document.getElementById("article").innerHTML = articles[indexOfArticle]
    document.getElementById("title").innerHTML = titles[indexOfArticle]
}

function getArticles() {
    list = document.getElementById("article-list")
    x = list.innerHTML
    for (let i = 0; i < articles.length; i++) {
       x = `${x}<span id ='bullet'> ~</span> <a onclick = "replaceArticle(${i})">${articleNames[i]}</a><br>`;
       list.innerHTML = x
    }
}

//Dark Mode I got from a tutorial, but the styling & the emoji is all me :)

function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
    if (document.getElementById("darkmodebutton").innerHTML == "☾" ) {
        document.getElementById("darkmodebutton").innerHTML = "🌞︎︎"
    } else {
        document.getElementById("darkmodebutton").innerHTML = "☾"
    };

  }

