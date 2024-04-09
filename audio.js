const audiobundle = [
  {
    songname: "the show",
    band: "lenka",
    src: "C:\\Users\\ATAHARUL ISLAM\\Downloads\\lenka-the show.m4a",
    state: false,
    img: "C:\\Users\\ATAHARUL ISLAM\\Downloads\\iron-man-sky-high-adventure-ra.jpg",
    Id: 1,
  },
  {
    songname: "the scientist",
    band: "coldplay",
    src: "C:\\Users\\ATAHARUL ISLAM\\Downloads\\coldplay the scintist.m4a",
    state: false,
    img: "img\\theshow.jpeg",
    Id: 2,
  },
  {
    songname: "yellow",
    band: "coldplay",
    src: "C:\\Users\\ATAHARUL ISLAM\\Downloads\\yellow.mp3",
    state: false,
    img: "img\\theshow.jpeg",
    Id: 3,
  },
  {
    songname: "nightcall-drive",
    band: "navasky",
    src: "C:\\Users\\ATAHARUL ISLAM\\Downloads\\Kavinsky - Nightcall (Without the robot voice) - Short Version (ZM Musics).m4a",
    state: false,
    img: "img\\theshow.jpeg",
    Id: 4,
  },

  {
    songname: "Fields of Gold",
    band: "sting",
    src: "C:\\Users\\ATAHARUL ISLAM\\Downloads\\Sting - Fields Of Gold.mp3",
    state: false,
    img: "img\\theshow.jpeg",
    Id: 5,
  },

  {
    songname: "killiye killiye",
    band: "Dj-shekhar",
    src: "C:\\Users\\ATAHARUL ISLAM\\Downloads\\Kiliye Kiliye _ Guts Come Closer _ Dj Sekhar _ S Janaki _ Full Version.mp3",
    state: false,
    img: "img\\theshow.jpeg",
    Id: 6,
  },
  {
    songname: "buttercup",
    band: "jack-stauber",
    src: "C:\\Users\\ATAHARUL ISLAM\\Downloads\\MV _ Jack Stauber - Buttercup.m4a",
    state: false,
    img: "img\\theshow.jpeg",
    Id: 7,
  },
  {
    songname: "learning to fly",
    band: "pink floyed",
    src: "musics/Pink Floyd - Learning To Fly (Official Music Video HD).m4a",
    state: false,
    img: "img\\theshow.jpeg",
    Id: 8,
  },
  
];

// end of audiobudle which consisted audios
// //////////////////////////////////////////////////
// declaring all of the variables
// ///////////////////////////////////////////////////

const playinggif = document.querySelector(".playinggif");
const songcollection = document.querySelector(".songcollection");

const playbutton = document.querySelector("#playbtn");
const forwardbtn = document.querySelector("#forwardboo");

const backbutton = document.querySelector("#backbtn");

let nowindex = 0;

// starting the display of songs in the sidesong section.
// starting the display of songs in the sidesong section.
/////////////////////////////////////////////////////////

const sidesongs = (songcollection.innerHTML = audiobundle.map(function (
  value,
  index
) {
  return `
    
     <div class="songsonebyone">
    <span class="indexinallsong">${index}</span>
      <img src="${value.img}" alt="" class="images">
      <div class="songdetail-inone">
     <h2 class="songname">${value.songname}</h2>
     <h3 class="band"> ${value.band}</h3>
    
    </div>     
    <i class="fa-solid fa-play" id="inplay"></i>
    </div>`;
}));

// ending the display of songs in the sidesong section.
// ending the display of songs in the sidesong section.

// starting the display of songs in the trending section.
// starting the display of songs in the trending section.





let trendingarray=[];

trendingarray.push(...audiobundle.slice(-20));




const popularsong = document.querySelector(".popularsongs");
popularsong.innerHTML = trendingarray.map(function (value, index) {
  return `

    
    <div class="popsonsec">
    <img src="${value.img}" alt="" class="imgson">
    <div class="info-on-img">
    <h3>${value.songname}</h3>
      <span>${value.band}</span>
      <div class="playonimg">
        <i class="fa-regular fa-circle-play" id="playonimglogo" ></i>
      </div>
    </div>
  
  </div>`;
});

const helltrend=Array.from(document.querySelectorAll('.popsonsec'))

helltrend.forEach(function(e,i){
  e.addEventListener('click',function(){
    Musicx.src=trendingarray[i].src;
        songdetails.innerHTML = `<div class="songdetails">
        <h2>${trendingarray[i].songname}</h2>
        <span>${trendingarray[i].band}</span> </div>`;
    playpause()
  })
})

// ending the display of songs in the trending section.//////////////////////////

// declaring the playpause functionality///////////////////////////////////////////////////
const songsonebyonecollection = Array.from(
  document.querySelectorAll(".songsonebyone")
);
const popsonsec = Array.from(document.querySelectorAll(".popsonsec"));
const inplay = Array.from(document.querySelectorAll("#inplay"));
// console.log(inplay)
// console.log(songsonebyonecollection)

function playpause() {
  if (Musicx.paused || Musicx.currentTime <= 0) {
    Musicx.play();
    playbutton.classList.add("fa-circle-pause");
    playbutton.classList.remove("fa-circle-play");
    playinggif.style.opacity = 1;
    //    console.log(inplay[nowindex])
    //    inplay[nowindex].classList.add('fa-pause');
    //    inplay[nowindex].classList.remove('fa-play')
    //     songsonebyonecollection[nowindex].style.backgroundColor='white'
  } else {
    Musicx.pause();
    playbutton.classList.add("fa-circle-play");
    playbutton.classList.remove("fa-circle-pause");
    playinggif.style.opacity = 0;
    //     // inplay[nowindex].classList.add('');
    //     songsonebyonecollection[nowindex].style.backgroundColor=''
    //     inplay[nowindex].classList.add('fa-play');
    //    inplay[nowindex].classList.remove('fa-pause')
  }
}

// ending the playpause functionality /////////////////////////////////////

//the masterplay section /////////////////////////////

const Musicx = new Audio(audiobundle[1].src);
const songdetails = document.querySelector(".songdetails");

// popsonsec.forEach(function (e, i) {
//   e.addEventListener("click", function (k) {
//     Musicx.src = audiobundle[i].src;
//     // console.log(Musicx)

//     songdetails.innerHTML = `<div class="songdetails">
//         <h2>${audiobundle[i].songname}</h2>
//         <span>${audiobundle[i].band}</span> </div>`;

//     playpause();
//   });
// });

playbutton.addEventListener("click", function () {
  playpause();
});

//ending of the masterplay section /////////////////////////////

const songsonebyone = Array.from(document.querySelectorAll(".songsonebyone"));
songsonebyone.forEach(function (e, i) {
  e.addEventListener("click", function () {
    nowindex = i;
    Musicx.src = audiobundle[i].src;
    songdetails.innerHTML = `<div class="songdetails">
        <h2>${audiobundle[i].songname}</h2>
        <span>${audiobundle[i].band}</span> </div>`;
    // if(Musicx.paused || Musicx.currentTime<=0){
    //     e.style.backgroundColor="aliceblue"
    // }
    // else{
    //     e.style.backgroundColor='blue'
    // }

    playpause();
  });
});

// back and forward button functionalitty////////////////////////
////////////////////////////////////////////////////////////////

backbutton.addEventListener("click", function () {
  nowindex = nowindex - 1;
  if (nowindex >= 0 && nowindex <= audiobundle.length) {
    // console.log(nowindex)
    Musicx.src = audiobundle[nowindex].src;
    playpause();
    songdetails.innerHTML = `<div class="songdetails">
    <h2>${audiobundle[nowindex].songname}</h2>
    <span>${audiobundle[nowindex].band}</span> </div>`;
  } else {
    nowindex = 0;
  }
});

forwardbtn.addEventListener("click", function () {
  nowindex = nowindex + 1;
  if (nowindex >= 0 && nowindex <= audiobundle.length) {
    //         console.log(audiobundle.length)
    //  console.log(nowindex)
    Musicx.src = audiobundle[nowindex].src;
    playpause();
    songdetails.innerHTML = `<div class="songdetails">
 <h2>${audiobundle[nowindex].songname}</h2>
 <span>${audiobundle[nowindex].band}</span> </div>`;
  } else {
    nowindex = 0;
  }
});

// back and forward button functionalitty////////////////////////
////////////////////////////////////////////////////////////////

// start of // volume//range//sound//-============section..

const ranger = document.querySelector(".rangetime");
// console.log(Musicx);
Musicx.addEventListener("timeupdate", function () {
  let progress = parseInt((Musicx.currentTime / Musicx.duration) * 100);
  ranger.value = progress;
});

ranger.addEventListener("change", function () {
  Musicx.currentTime = (ranger.value * Musicx.duration) / 100;
});

const volume = document.querySelector("#volume");
const volrange = document.querySelector(".rangevol");

volrange.addEventListener("click", function () {
  movevol(this.value);
});

function movevol(vol) {
  Musicx.volume = vol;
}

// volume//range//sound//-============section..// end of

// song in hero////////////////////////////////////

const btnplay = document.querySelector(".btnhabib");
btnplay.addEventListener("click", function () {
  Musicx.src = audiobundle[7].src;
  btnplay.innerHTML = "play";
  songdetails.innerHTML = `<div class="songdetails">
 <h2>${audiobundle[7].songname}</h2>
 <span>${audiobundle[7].band}</span> </div>`;

  playpause();
});
/////////////////////////////////////////////////

// duration and currenttime sec
////////////////////////////////////////////////

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds}`;
}

const duracarr = document.querySelector(".duracurr");

Musicx.addEventListener("timeupdate", function () {
  const currtime = formatTime(this.currentTime);
  duratime = formatTime(Musicx.duration);
  duracarr.innerHTML = `${currtime}/${duratime}`;
});

//////////////////////////////////////////////////////////

// soundcontroller button///////////////
////////////////////////////////////////

const rangevol = document.querySelector(".rangevol");
let isRAngevolvisible = false;

volume.addEventListener("click", function () {
  if (!isRAngevolvisible) {
    rangevol.style.opacity = 1;
    isRAngevolvisible = true;
    volume.style.color = "white";
  } else {
    rangevol.style.opacity = 0;
    isRAngevolvisible = false;
    volume.style.color = "lightgreen";
  }
});

const smallnav = document.querySelector(".fa-bars-staggered");
const navelem = document.querySelector(".navelements");

//preventdefault in js
/////////////////////////////
const categorybtn = document.querySelectorAll(".categorybtn");

document.addEventListener("DOMContentLoaded", function () {
  categorybtn.forEach(function (btnca) {
    btnca.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
});

////////////////////////////
const habibsong = document.querySelector(".habibsong");
// let issmallnav = false;
// smallnav.addEventListener("click", function () {
//   if (window.innerWidth <= 600 && !issmallnav) {
//     navelem.style.display = "block";
//     smallnav.style.color = "green";
//     issmallnav = true;
//     habibsong.style.display = "none";
//   } else {
//     smallnav.style.color = "white";
//     issmallnav = false;
//     navelem.style.display = "none";
//     habibsong.style.display = "block";
//   }
// });





/////////////////////////////////////////////////////
// activate the feature later
//////////////////////////////////////////////////////

// const rotatebtn=document.querySelector('.fa-rotate');
// let isrotatekliked=false;
// let no=0;

// rotatebtn.addEventListener('click',function(){
//    if(!isrotatekliked){
//     isrotatekliked=true;
//     rotatebtn.style.color='white';

//   }
//   else{
//     isrotatekliked=false;
//     rotatebtn.style.color='gold';

//   }

// });

//////////////////////////////////////////////
/////////////////////////////////////////////

const playingarea = document.querySelector(".playingarea");
const songsli = document.querySelector(".songsli");
const songslielem = document.querySelector(".songslielem");
const playlistli = document.querySelector(".playlistli");
const playlistelem = document.querySelector(".playlistelem");
const aboutus = document.querySelector(".aboutuss");
const aboutuselem = document.querySelector(".aboutuselem");
const aboveitems = document.querySelector(".aboveitems");
const songsonebyone11 = document.querySelector(".songsonebyone11");
const songdetail11 = document.querySelector(".songdetail-inone11");
const allplaylistname = document.querySelector(".allplaylistname");
const topmostcontainer = document.querySelector(".topmostcontainer");

// songsli page///////////////////
/////////////////////////////////

songsli.addEventListener("click", function () {
  playingarea.style.display = "none";
  songslielem.style.display = "block";
  playlistelem.style.display = "none";
  aboutuselem.style.display = "none";
  const headdiv = document.createElement("div");
  headdiv.classList.add("songslielemheading");
  headdiv.innerHTML = `<h1>all songs</h1>
  <h1>sisme</h1>`;

  let songsinsongs = (aboveitems.innerHTML = audiobundle
    .map(function (value, i) {
      return `
    
    <div class="songsonebyone11">
    <span class="indexinallsong11">${i}</span>
      <img src="${value.img}" alt="" class="images">
      <div class="songdetail-inone11">
     <h2 class="songname">${value.songname}</h2>
     <h3 class="band">${value.band}</h3>
    
    </div>     
    <i class="fa-solid fa-play" id="inplay11" ></i>
    </div>`;
    })
    .join(""));

  const aboveallsong = Array.from(
    document.querySelectorAll(".songsonebyone11")
  );

  aboveallsong.forEach(function (e, i) {
    e.addEventListener("click", function () {
      Musicx.src = audiobundle[i].src;
      songdetails.innerHTML = `<div class="songdetails">
      <h2>${audiobundle[i].songname}</h2>
      <span>${audiobundle[i].band}</span> </div>`;
      playpause();
    });
  });
});

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

///////////////////////////sismelipage/////////////////
/////////////////////////////////////////////////////

const sismeli = document.querySelector(".sisme");
sismeli.addEventListener("click", function () {
  playingarea.style.display = "block";
  songslielem.style.display = "none";
  playlistelem.style.display = "none";
  aboutuselem.style.display = "none";
});
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
///////////////////////////////////////////////////

///////////playlist li page//////////////////////////////
////////////////////////////////////////////////////////

playlistli.addEventListener("click", function () {
  playlistelem.style.display = "block";
  songslielem.style.display = "none";
  playingarea.style.display = "none";
  aboutuselem.style.display = "none";
});

let bandarray = [];

audiobundle.forEach(function (value) {
  bandarray.push(value.band);
});

const bandcounter = function (array) {
  let bands = {};
  array.forEach(function (value) {
    bands[value] = (bands[value] || 0) + 1;
  });

  return bands;
};

x = bandcounter(bandarray);

let htmlcontent = "";
for (let key in x) {
  htmlcontent += `
  <div class="topcontainer">
  <h1>${key}</h1>

  </div>
  `;
}

topmostcontainer.innerHTML = htmlcontent;

const topcontainer = document.querySelectorAll(".topcontainer");
const playitems = document.querySelector(".playitems");
const lowerplaylist = document.querySelector(".lowerplaylist");

const valarray = [];

topcontainer.forEach(function (value) {
  value.addEventListener("click", function (e) {
    valarray.length = 0;
    audiobundle.forEach(function (val, index) {
      if (e.target.innerText === val.band) {
        // console.log(val);
        valarray.push(val);
      }
    });
    lowerplaylist.innerHTML = valarray
      .map(function (ee, ii) {
        return ` <div class="songsclass">
        <span class="indexplayitems">${ii}</span>
        <div class="playiteminfo">
          <h2 class="playsongname">${ee.songname}</h2>
         <h3 class="playbandname">${ee.band}</h3>
       </div>
     </div>`;
      })
      .join("");
    const songsclass = Array.from(document.querySelectorAll(".songsclass"));
    console.log(songsclass);

    songsclass.forEach(function (e, i) {
      e.addEventListener("click", function () {
        Musicx.src = valarray[i].src;
        songdetails.innerHTML = `<div class="songdetails">
        <h2>${valarray[i].songname}</h2>
        <span>${valarray[i].band}</span> </div>`;

        playpause();
      });
    });
  });
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

aboutus.addEventListener("click", function () {
  aboutuselem.style.display = "block";
  // aboutuselem.innerHTML='we are working';
  playlistelem.style.display = "none";
  songslielem.style.display = "none";
  playingarea.style.display = "none";
});

const ulofli = Array.from(document.querySelectorAll(".ulofli"));
const isclicked = false;
ulofli.forEach(function (value, index) {
  value.addEventListener("click", function () {
    console.log(index);
  });
});






// search functionality///////////////
/////////////////////////////////////////

// console.log(playingarea)
// const mainsearch=document.querySelector('.mainsearch, .mainsearch');

// let userarr=[];

// const data=audiobundle.map(function(e){
//   let createli=document.createElement('li');
//  createli=e.songname;

//   // console.log(createli)
//   userarr.push(createli)
// })

// // console.log(userarr)
// const hell=document.querySelector('.hell')

// mainsearch.addEventListener('input',function(e){
//   const val=e.target.value;
//   userarr.map(function(currelem){
//     const elemtext=currelem.toLowerCase()
//     if(elemtext.includes(val.toLowerCase())){
//       console.log(elemtext)
//       hell.innerHTML=elemtext;
//       playingarea.style.display='none'

//     }
//     else{

//     }
//   })
//   console.log(val)

// })

// /////////////////////////
