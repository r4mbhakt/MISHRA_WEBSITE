// Typing
const text="Skill Based Paid Custom Rooms | Fair Play | No Hacks | Data Science Student";
let i=0;
const el=document.querySelector(".typing");
(function type(){
if(i<text.length){
el.innerHTML+=text.charAt(i);
i++;setTimeout(type,50);
}
})();

// Scroll reveal + progress
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(e=>{
if(e.getBoundingClientRect().top<window.innerHeight-100)
e.classList.add("active");
});
document.getElementById("scroll-progress").style.width=
(window.scrollY/(document.body.scrollHeight-innerHeight))*100+"%";
});

// Counters
document.querySelectorAll(".counter").forEach(c=>{
let target=+c.dataset.target;
let count=0;
let inc=setInterval(()=>{
count+=20;c.innerText=count;
if(count>=target){c.innerText=target;clearInterval(inc);}
},20);
});

// Likes
let likes=localStorage.getItem("likes")||0;
document.getElementById("likeCount").innerText=likes;
document.getElementById("likeBtn").onclick=()=>{
likes++;localStorage.setItem("likes",likes);
document.getElementById("likeCount").innerText=likes;
};
// Typing
const text="Skill Based Paid Custom Rooms | Fair Play | No Hacks | Data Science Student";
let i=0;
const el=document.querySelector(".typing");
(function type(){
if(i<text.length){
el.innerHTML+=text.charAt(i);
i++;setTimeout(type,50);
}
})();

// Scroll reveal + progress
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(e=>{
if(e.getBoundingClientRect().top<window.innerHeight-100)
e.classList.add("active");
});
document.getElementById("scroll-progress").style.width=
(window.scrollY/(document.body.scrollHeight-innerHeight))*100+"%";
});

// Counters
document.querySelectorAll(".counter").forEach(c=>{
let target=+c.dataset.target;
let count=0;
let inc=setInterval(()=>{
count+=20;c.innerText=count;
if(count>=target){c.innerText=target;clearInterval(inc);}
},20);
});

// Likes
let likes=localStorage.getItem("likes")||0;
document.getElementById("likeCount").innerText=likes;
document.getElementById("likeBtn").onclick=()=>{
likes++;localStorage.setItem("likes",likes);
document.getElementById("likeCount").innerText=likes;
};
