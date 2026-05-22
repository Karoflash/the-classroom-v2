let activeStudent = null;

const GEMINI_API_KEY = "YOUR_GEMINI_KEY";

async function sendMessage(){

  const input = document.getElementById("chat-input");

  const text = input.value.trim();

  if(!text || !activeStudent) return;

  appendMessage("user", text);

  input.value = "";

  try{

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body: JSON.stringify({

          contents:[
            {
              parts:[
                {
                  text: `
                  
                  ${activeStudent.systemPrompt}

                  User:
                  ${text}
                  
                  `
                }
              ]
            }
          ]

        })
      }
    );

    const data = await response.json();

    const aiText =
    data.candidates[0].content.parts[0].text;

    appendMessage("ai", aiText);

  }
  catch(error){

    showToast("Något gick fel");

    console.log(error);

  }

}

function appendMessage(role,text){

  const container =
  document.getElementById("chat-messages");

  const bubble = document.createElement("div");

  bubble.className = `bubble ${role}`;

  bubble.innerHTML = `
  
    <div class="bubble-text">
      ${text}
    </div>
  
  `;

  container.appendChild(bubble);

  container.scrollTop = container.scrollHeight;

}