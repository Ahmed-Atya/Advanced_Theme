//Nav Toggle Menu
// let toggleList = document.querySelector(".toggle-menu");
// let list = document.getElementById("list");
//
// toggleList.addEventListener("click",function(){
//
//  list.classList.toggle("open");
// });
//End Nav Toggle Menu

// // our skills progress section


let ourSkills = document.querySelector(".our-skills");

window.onscroll = function(){


    let skillsOfsetTop = ourSkills.offsetTop;


    let skillsOuterHeight = ourSkills.offsetHeight;


    let windowHeight = this.innerHeight;


    let windowScrollTop = window.pageYOffset;


    if(windowScrollTop > (skillsOfsetTop + skillsOuterHeight - windowHeight)){

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill =>{

            skill.style.width = skill.dataset.progress;
            skill.textContent = skill.dataset.progress;
        });

    }

};
//End our skills progress
// Start Event Timer
function makeCountDownTimer(){
  let daysCount = document.querySelector('.days'),
      hoursCount = document.querySelector('.hours'),
      minutesCount =document.querySelector('.minutes'),
      secondsCount =document.querySelector('.seconds');

   let challengeDate = new Date('jan 01,2024 09:00:00 GMT+02').getTime();
   let  repeat = setInterval(()=>{

    let now = new Date().getTime();
    let difference = challengeDate - now;

    let days = Math.floor(difference / (1000*60*60*24));
    let hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((difference % (1000*60*60)) / (1000*60));
    let seconds =Math.floor((difference % (1000*60)) / (1000));

     daysCount.innerHTML = `${days}`;
     hoursCount.innerHTML = `${hours}`;
     minutesCount.innerHTML = `${minutes}`;
     secondsCount.innerHTML = `${seconds}`;

    if(difference < 0){
     clearInterval(repeat);
    }
   },1000);

}
makeCountDownTimer();
// End Event Timer
// Start Top Video Slider
function videoSlider(){
  let videoSources = [
    "https://cdn.pixabay.com/photo/2023/02/05/17/25/leaves-7770035_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg"
  ];

  let videos = document.querySelectorAll('.top-videos .videos li');
  let currentVideo = document.querySelector('.currentVideo');
  let info = document.querySelector('.preview .info');
  currentVideo.src = "https://cdn.pixabay.com/photo/2023/02/05/17/25/leaves-7770035_960_720.jpg";
  videos.forEach((video, index) => {
    video.addEventListener("click",function(){
      currentVideo.src = videoSources[index];
      info.textContent = this.innerText;
      changeActiveState(videos);
    })
  });
}
videoSlider();
function changeActiveState(list)
{
    list.forEach(function (element){
        element.addEventListener('click',function (){
            list.forEach(function (ele){
                ele.classList.remove('active');
            }) ;
            this.classList.add('active');
        });
    });
}
