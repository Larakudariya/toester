//toaster
let toast = document.querySelector("#toast");
let showToast = document.querySelector("#toast-message");

showmsg=(message,duration = 3000)=>{
    showToast.textContent = message; 
    toast.classList.remove("hidden");
}

setTimeout(()=>{
    toast.classList.add("hidden");
},3000);

showmsg("Congratulations! You have successfully created a toaster notification");