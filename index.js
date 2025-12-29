//toaster
function createtoast(confi){
    return function(str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className = "flex item-center gap-2 bg-gray-800 text-white py-3 px-6 rounded rounded shadow-lg pointer-event-none transition-opacity duration-300";
        document.querySelector(".parent").appendChild(div);
        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div);

        },confi.duration*1000)
    };

}
let toaster = createtoast({
    positionX: "left",
    positionY: "top",
    theme: "dark",
    duration : 3,
});
toaster("done");
setTimeout(()=>{
    toaster("done2");
},2000)
