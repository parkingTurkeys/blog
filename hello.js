
const articleNames = [
    "My blog is ready!", "Hey there!"
]

const articleSubtitles = [
    "...finally", "its @parking_turkeys"
]

const articles = [
    "So, my blog is finally ready! I guess you know that though, since you're here. My blog is just all around cool and will have loads of fun stuff, and maybe some stories.", "hello"
]

const titles = [
    "new blog!", "hey"
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
       x = `${x}<span id ='bullet'> ~</span> <a onclick = "replaceArticle(${i})">${articleNames[i]}</a>`;
       x = `${x}<span id = "subtitle">${articleSubtitles[i]}</span><br>`
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

