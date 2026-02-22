function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

const knowledgeBase = {
  "cultural event": {
    answer: "SHANKHANAD is a three-day Cultural, Technical, Artistic, and Literary event held after Semester 1 at College Ground.",
    department: "Cultural Department",
    email: "priyanshusinghsikarwar12@gmail.com or Chalnabae@gmail.com"
  },
  "sports": {
    answer: "AAVEG is the annual sports fest including indoor and outdoor events.",
    department: "Sports Department",
    email: "tripathiricha300@gmail.com or sabhinay79@gmail.com"
  },
  "internship process": {
    answer: "Internship opportunities are circulated via official emails and notice boards.",
    department: "Internship Department",
    email: "internships@college.edu"
  },
  "placement drive": {
    answer: "Placement drives are conducted throughout the academic year.",
    department: "Placement Cell",
    email: "placements@college.edu"
  },
  "exam schedule": {
    answer: "Odd Sem: Feb–March | Even Sem: July–August.",
    department: "Academic Department",
    email: "academics@college.edu"
  }
};

function sendMessage(){
  let input=document.getElementById("userInput");
  let chat=document.getElementById("chat");
  let text=input.value.trim().toLowerCase();
  if(!text) return;

  chat.innerHTML+=`<div class="message user">${text}</div>`;

  let found=null;
  for(let key in knowledgeBase){
    if(text.includes(key)){
      found=knowledgeBase[key];
      break;
    }
  }

  setTimeout(()=>{
    if(found){
      chat.innerHTML+=`
      <div class="message bot">
      <b>Answer:</b> ${found.answer}<br><br>
      <b>Department:</b> ${found.department}<br>
      <b>Email:</b> ${found.email}
      </div>`;
    }else{
      chat.innerHTML+=`
      <div class="message bot">
      ❌ No token match found.<br>
      Try: cultural event, sports, internship process, placement drive, exam schedule
      </div>`;
    }
    chat.scrollTop=chat.scrollHeight;
  },600);

  input.value="";
}

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("userInput").addEventListener("keypress",function(e){
    if(e.key==="Enter"){
      sendMessage();
    }
  });
});