// Typing animation
const text="Paid Custom Rooms • Skill Based Earning • Fair Play • Anti-Hack Support • CSE Data Science";
let i=0;
setInterval(()=>{
  document.querySelector(".typing").innerText=text.slice(0,i++);
  if(i>text.length)i=0;
},100);

// Reveal + scroll bar
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
  document.getElementById("scroll-progress").style.width=
  (window.scrollY/(document.body.scrollHeight-innerHeight))*100+"%";
});

// Counters
document.querySelectorAll(".counter").forEach(c=>{
  let t=+c.dataset.target,n=0;
  let int=setInterval(()=>{
    n+=Math.ceil(t/100);
    if(n>=t){n=t;clearInterval(int)}
    c.innerText=n;
  },30);
});

// LIKE SYSTEM (LIFETIME)
let likes=localStorage.getItem("likes")||0;
document.getElementById("likeCountFloating").innerText=likes;
document.getElementById("statsLikeCount").innerText=likes;

document.getElementById("likeBtnFloating").onclick=()=>{
  likes++;
  localStorage.setItem("likes",likes);
  document.getElementById("likeCountFloating").innerText=likes;
  document.getElementById("statsLikeCount").innerText=likes;

  let b=document.createElement("div");
  b.className="like-bubble";
  b.innerText="+1";
  document.querySelector(".like-floating").appendChild(b);
  setTimeout(()=>b.remove(),1000);
};
