//  fetch 

fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
.then(function(response) {
    return response.json();
}) 
.then (function(json){
    data=json;
        console.log(data.data[0].title);
  document.querySelector(".banner").innerHTML=` <div class="row g-0">
  <div class="col-md-4">
      <img src="${data.data[0].album.cover_medium}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
      <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
              <p class="m-0">Album</p>
              <button>NASCONDI ANNUNCI</button>
          </div>
          <h5 class="card-title">${data.data[0].title_short}</h5>
          <p class="card-text"><span>${data.data[0].artist.name}</span></p>
          <p class="card-text"> Ascolta il nuovo singolo dei ${data.data[0].artist.name}</span></p>
          <div class="card-text d-flex align-items-center gap-3">
              <button>Play</button>
              <button>Salva</button>
              <i class="bi bi-three-dots"></i>
          </div>
      </div>
  </div>
</div>`    

for ( let i=0 ; i<=4 ; i++ ){
    let disco = data.data[i].album.title;
    console.log(disco)
    let picture = data.data[i].album.cover_medium;
    let container2 =document.querySelector('#extended-playlist .row')
    let div = document.createElement("div")
    div.classList.add("col-12", "col-xl-2","p-2")
// 1
div.innerHTML=`<div class="container rounded-3 mb-3 extended-playlist-cont">
<div class="row">
    <div class="col-6 col-xl-12 cont-img">
        <img class="img-fluid extended-playlist-cont-img" src="${picture}" alt="">
    </div>
    <div class="col-6 col-xl-12 extended-playlist-cont-txt">
        <p class="m-0 d-xl-none"> ${disco}</p>
        <p class="m-0 extended-playlist-cont-title"></p>
        <p class="m-0 extended-playlist-cont-desc d-none d-xl-block">Descrizione Playlist</p>
    </div>
</div>

<div class="row d-xl-none extended-playlist-cont-icon">
    <div class="col-6 d-flex align-items-center">
        <i class="bi bi-heart col-3"></i>
        <i class="bi bi-three-dots-vertical col-3"></i>
    </div>
    <div class="col-6 d-flex justify-content-end align-items-center">
        <p class="col-6 m-0">
        </p>
        <button type="button" class="bottone"><i class="bi bi-play-fill"></i></button>
    </div>
</div>
</div>`
container2.append(div)

}
})








