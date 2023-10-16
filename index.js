const movie = document.getElementById("movie");
const infoPage = document.getElementById("movie-info-container");
const actors = document.getElementById("actors");
const actorList = document.getElementById("actor-list");

document.body.addEventListener("mouseover", function () {
                actorList.style.display = 'none';

});

movie.addEventListener("click", function () {
  if (infoPage.style.transform == "translateX(-50%)") {
    infoPage.style.transform = "translateX(-550%)";
  } else {
    infoPage.style.transform = "translateX(-50%)";
  }
  console.log("clicked");
});

actors.addEventListener("mousemove", function (e) {
  let mousePosX = e.pageX;
  let mousePosY = e.pageY;
  console.log(mousePosX, mousePosY);
  actorList.style.display = "block";
                actorList.style.top = mousePosY + 'px';
                actorList.style.left = mousePosX + 'px';
                actorList.style.display = 'block';

});
