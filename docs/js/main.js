function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");

    if(sidebar.classList.contains("collapse")) {
        sidebar.classList.remove("collapse");
    }
    else {
        sidebar.classList.add("collapse");
    }
}

window.onload = function(e) {
    var anchors = document.getElementsByClassName("ripple");
    console.log(anchors.length);

    for(let a of anchors) {
        //var a = anchors[i];
        
        a.addEventListener("mousedown", () => {
            console.log("click");
        
            a.classList.add("click");
            setTimeout(()=>{
                a.classList.remove("click");
                a.classList.add("clicking");
                setTimeout(()=>{
                    a.classList.remove("clicking");
                }, 500)
            }, 100);
            this.event.stopPropagation();
        })
    }


    var sidebar = document.querySelector(".sidebar");

    window.addEventListener("mousedown", (event) => {
        if(!sidebar.classList.contains("collapse")) {
            sidebar.classList.add("collapse");
        }
    });

    sidebar.addEventListener("mousedown", (event) => {
        event.stopPropagation();
    }); 
}   
