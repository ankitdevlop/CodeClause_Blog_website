console.log("Welcome to articles app. This is index.js");
showarticles();

// If user adds a Article, add it to the localStorage
let addtn = document.getElementById("btn");
addtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let articles = localStorage.getItem("articles");
  if (articles == null) {
    articlesObj = [];
  } else {
    articlesObj = JSON.parse(articles);
  }
  let myObj={
    title:addTitle.value,
    text:addTxt.value

  }
  articlesObj.push(myObj);
  localStorage.setItem("articles", JSON.stringify(articlesObj));
  addTxt.value = "";
  addTitle.value = "";
  //   console.log(articlesObj);
  showarticles();
});

// Function to show elements from localStorage
function showarticles() {
  let articles = localStorage.getItem("articles");
  if (articles == null) {
    articlesObj = [];
  } else {
    articlesObj = JSON.parse(articles);
  }
  let html = "";
  articlesObj.forEach(function (element, index) {
    html+=`
    
    
             <div class="articla">
                     <div class="main">
                     <img src="b.png" alt="" class="i">
                         <h5 class="tit" id="h5">${element.title}</h5>
                         <p class="car"> ${element.text}</p>
                         <button id="${index}"onclick="deleteArticle(this.id)" class="btn btn-primary">Delete Article</button>
                     </div>
                 </div>`;
    });
  
  let articlesElm = document.getElementById("Articles");
  if (articlesObj.length != 0) {
    articlesElm.innerHTML = html;
  } else {
    articlesElm.innerHTML = `Nothing to show! Use "Add a Articles" section above to add Articles.`;
  }
}
// for deleting articles

function deleteArticle(index) {
  console.log("this note is deleted", index)

  let articles = localStorage.getItem("articles");
  if (articles == null) {
    articlesObj = [];
  } else {
    articlesObj = JSON.parse(articles);
  }
  articlesObj.splice(index,1);
  localStorage.setItem("articles", JSON.stringify(articlesObj));
  showarticles();
}
// for search


let search = document.getElementById('ankitsrc');
search.addEventListener("input", function(){

    let inputVal = search.value;
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
