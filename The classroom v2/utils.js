function showToast(text){

    const toast = document.getElementById("toast");
  
    toast.innerText = text;
  
    toast.style.display = "block";
  
    setTimeout(() => {
      toast.style.display = "none";
    },3000);
  
  }
  
  function handleInputKey(e){
  
    if(e.key === "Enter" && !e.shiftKey){
  
      e.preventDefault();
  
      sendMessage();
  
    }
  
  }