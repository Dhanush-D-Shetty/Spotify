
//console.log("welcome to spotify");

let songindex=0;
 let audioelement=new Audio('songs/1.mp3');
let myProgressBar = document.getElementById("myProgressBar");
let masterplay = document.getElementById("masterplay");
let gif = document.getElementById("gif");
let songitem= Array.from(document.getElementsByClassName("songItem"));
let timestamp=document.getElementsByClassName("timestamp");
let mainsongname  =  document.getElementById("mainsongname");

let songs=[
    {  songname:"Ram siya Ram" , coverpath:"images/cover1.jpg" , songpath:`songs/1.mp3` },
    {  songname:"OMG2 - Uchi Uchi Vadhiyo " , coverpath:"images/cover2.jpg" , songpath:`songs/2.mp3` },
    {  songname:"Dil ka Telephone ring ring..." , coverpath:"images/cover3.jpg" , songpath:`songs/3.mp3` },
    {  songname:"Jaya shree ram ram" , coverpath:"images/cover4.jpg" , songpath:`songs/4.mp3` },
    {  songname:"Dil ara ara" , coverpath:"images/cover5.jpg" , songpath:`songs/6.mp3` },
    {  songname:"Sawan Agaya" , coverpath:"images/cover6.jpg" , songpath:`songs/5.mp3` },
    {  songname:"Jailer -Kavalaya kavalaya " , coverpath:"images/cover7.jpg" , songpath:`songs/7.mp3` },
    {  songname:"MY Dl goes zoom" , coverpath:"images/cover8.jpg" , songpath:`songs/4.mp3` }
];

songitem.forEach((element ,i)=> {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songname;
});





// handle play/pause click with playing gif
masterplay.addEventListener('click', ()=>{
    if(  audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    //    timestamp.style.innerText = masterplay.duration;
    }
    else{
            audioelement.pause();
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            gif.style.opacity=0;
        
    }
})

// progresssbar and play button connectiob=n for playing audio
audioelement.addEventListener('timeupdate',()=>{
   progress =  parseInt((audioelement.currentTime/audioelement.duration)* 100);  // convertng song time to percentage
  myProgressBar.value =progress;                                    // setting above percentage value to progress bar value
})

myProgressBar.addEventListener('change', ()=>{
    audioelement.currentTime = myProgressBar.value * audioelement.duration/100 ;
})

const makeAllplay  = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');

    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`songs/${songindex+1}.mp3`;
              mainsongname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
       audioelement.play();
         masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        // timestamp.style.innerHTML = audioelement.currentTime;  
    })
})


document.getElementById("previous").addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }else{
        songindex -= 1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
              mainsongname.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})
document.getElementById("next").addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }else{
        songindex += 1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
           mainsongname.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})