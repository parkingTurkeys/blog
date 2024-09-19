//coming soon
const articles = [
    "testing,testing,one,two,three! <h1>hi</h1>"
]

const titles = [
    "A test of your abilities"
]
function replaceArticle(indexOfArticle) {
    document.getElementById("article").innerHTML = articles[indexOfArticle]
    document.getElementById("title").innerHTML = titles[indexOfArticle]
}

//Dark Mode I got from a tutorial, but the styling is all me :)

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
  }