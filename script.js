// Typing
const text="Paid Custom Rooms | Fair Play | Skill-Based Earning | CSE Data Science Student";
let i=0;
const t=document.querySelector(".typing");
(function type(){
if(i<text.length){t.innerHTML+=text[i++];setTimeout(type,60);}
})();

// Reveal
document.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100)
el.classList.add("active");
});
document.getElementById("progress").style.width=
(window.scrollY/(document.body.scrollHeight-innerHeight))*100+"%";
});

// Counters
document.querySelectorAll(".counter").forEach(counter=>{
let update=()=>{let target=+counter.dataset.target;
let c=+counter.innerText;
if(c<target){counter.innerText=c+20;setTimeout(update,20);}
else counter.innerText=target;};
update();
});

// Like button (lifetime)
let likes=localStorage.getItem("likes")||0;
document.getElementById("likeCount").innerText=likes;
document.getElementById("likeBtn").onclick=()=>{
likes++;localStorage.setItem("likes",likes);
document.getElementById("likeCount").innerText=likes;
};
// ADMIN PANEL LOGIC
const ADMIN_PASSWORD = "mishraadmin"; // CHANGE THIS PASSWORD

function checkAdmin(){
  const pass = document.getElementById("adminPass").value;
  if(pass === ADMIN_PASSWORD){
    document.getElementById("admin-login").style.display="none";
    document.getElementById("admin-panel").style.display="block";
  } else {
    alert("Wrong password");
  }
}

function updateStats(){
  const subs = document.getElementById("subInput").value;
  const target = document.getElementById("targetInput").value;
  const likes = document.getElementById("likeInput").value;

  if(subs) document.querySelectorAll(".counter")[0].innerText=subs;
  if(target) document.querySelectorAll(".counter")[1].innerText=target;
  if(likes){
    localStorage.setItem("likes",likes);
    document.getElementById("likeCount").innerText=likes;
  }

  alert("Stats updated successfully");
}
// ADMIN PANEL LOGIC
const ADMIN_PASSWORD = "mishraadmin"; // CHANGE THIS PASSWORD

function checkAdmin(){
  const pass = document.getElementById("adminPass").value;
  if(pass === ADMIN_PASSWORD){
    document.getElementById("admin-login").style.display="none";
    document.getElementById("admin-panel").style.display="block";
  } else {
    alert("Wrong password");
  }
}

function updateStats(){
  const subs = document.getElementById("subInput").value;
  const target = document.getElementById("targetInput").value;
  const likes = document.getElementById("likeInput").value;

  if(subs) document.querySelectorAll(".counter")[0].innerText=subs;
  if(target) document.querySelectorAll(".counter")[1].innerText=target;
  if(likes){
    localStorage.setItem("likes",likes);
    document.getElementById("likeCount").innerText=likes;
  }

  alert("Stats updated successfully");
}
// ADMIN PANEL LOGIC
const ADMIN_PASSWORD = "Rishupandey1!"; // CHANGE THIS PASSWORD

function checkAdmin(){
  const pass = document.getElementById("adminPass").value;
  if(pass === ADMIN_PASSWORD){
    document.getElementById("admin-login").style.display="none";
    document.getElementById("admin-panel").style.display="block";
  } else {
    alert("Wrong password");
  }
}

function updateStats(){
  const subs = document.getElementById("subInput").value;
  const target = document.getElementById("targetInput").value;
  const likes = document.getElementById("likeInput").value;

  if(subs) document.querySelectorAll(".counter")[0].innerText=subs;
  if(target) document.querySelectorAll(".counter")[1].innerText=target;
  if(likes){
    localStorage.setItem("likes",likes);
    document.getElementById("likeCount").innerText=likes;
  }

  alert("Stats updated successfully");
}
