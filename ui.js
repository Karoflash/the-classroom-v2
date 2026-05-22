function renderDesks(){

    const grid = document.getElementById("desks-grid");
  
    STUDENTS.forEach(student => {
  
      const card = document.createElement("div");
  
      card.className = "desk-card";
  
      card.innerHTML = `
      
        <div class="student-avatar">
          ${student.emoji}
        </div>
  
        <div class="student-name">
          ${student.name}
        </div>
  
        <div class="student-subject">
          ${student.subject}
        </div>
  
      `;
  
      card.onclick = () => openChat(student);
  
      grid.appendChild(card);
  
    });
  
  }
  
  function openChat(student){
  
    activeStudent = student;
  
    document.getElementById("chat-panel")
    .classList.add("open");
  
    document.getElementById("chat-overlay")
    .classList.add("show");
  
    document.getElementById("chat-avatar")
    .innerText = student.emoji;
  
    document.getElementById("chat-name")
    .innerText = student.name;
  
    document.getElementById("chat-subject")
    .innerText = student.subject;
  
  }
  
  function closeChat(){
  
    document.getElementById("chat-panel")
    .classList.remove("open");
  
    document.getElementById("chat-overlay")
    .classList.remove("show");
  
  }