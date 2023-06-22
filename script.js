function grid(grids = 16, pixels = 256) {
    for(let i = 0; i < pixels; i++) {
        let alpha = 0.1;
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const cont = document.createElement("div");
        cont.classList.add("content");
        cont.style.cssText = `width: calc(100%/${grids}); height: calc(100%/${grids})`;
        cont.addEventListener("mouseover", function(){
            alpha += 0.1;
            this.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        })
        document.getElementById("container").appendChild(cont);
    }
    return document.getElementById("gridSize").textContent = `${grids} x ${grids}`;
}

size.addEventListener("click", function() {
    while(container.firstChild) {
        document.getElementById("container").firstChild.remove()
    }
    let grids = parseInt(prompt("size"));
    if(grids === null || grids > 50 || grids < 5 || isNaN(grids)) {
        return grid();
    } else {
        let pixels = grids * grids;
        return grid(grids, pixels);
    }
})

grid()