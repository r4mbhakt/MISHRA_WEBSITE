// Typing Animation
const text="Paid Custom Rooms • Fair Play • Anti-Hack Support • CSE Data Science Student";
let i=0;
const typing=document.querySelector(".typing");
(function type(){
if(i<text.length){
typing.innerHTML+=text.charAt(i);
i++;setTimeout(type,50);
}
})();

// Scroll reveal + progress
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100)
el.classList.add("active");
});
document.getElementById("scroll-progress").style.width=
(window.scrollY/(document.body.scrollHeight-innerHeight))*100+"%";
});

// Counters
document.querySelectorAll(".counter").forEach(counter=>{
let target=+counter.dataset.target;
let count=0;
let inc=setInterval(()=>{
count+=20;counter.innerText=count;
if(count>=target){counter.innerText=target;clearInterval(inc);}
},20);
});

// Like Button (Lifetime per browser)
let likes=localStorage.getItem("likes")||0;
document.getElementById("likeCount").innerText=likes;
document.getElementById("likeBtn").onclick=()=>{
likes++;localStorage.setItem("likes",likes);
document.getElementById("likeCount").innerText=likes;
};
// Typing Animation
const text="Paid Custom Rooms • Fair Play • Anti-Hack Support • CSE Data Science Student";
let i=0;
const typing=document.querySelector(".typing");
(function type(){
if(i<text.length){
typing.innerHTML+=text.charAt(i);
i++;setTimeout(type,50);
}
})();

// Scroll reveal + progress
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100)
el.classList.add("active");
});
document.getElementById("scroll-progress").style.width=
(window.scrollY/(document.body.scrollHeight-innerHeight))*100+"%";
});

// Counters
document.querySelectorAll(".counter").forEach(counter=>{
let target=+counter.dataset.target;
let count=0;
let inc=setInterval(()=>{
count+=20;counter.innerText=count;
if(count>=target){counter.innerText=target;clearInterval(inc);}
},20);
});

// Like Button (Lifetime per browser)
let likes=localStorage.getItem("likes")||0;
document.getElementById("likeCount").innerText=likes;
document.getElementById("likeBtn").onclick=()=>{
likes++;localStorage.setItem("likes",likes);
document.getElementById("likeCount").innerText=likes;
};
