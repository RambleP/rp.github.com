window.onload = function() {

    // 第一部分
    var imgObj = document.getElementsByClassName("u-img");
    var mimgObj = document.getElementsByClassName("m-img")[0];
    var imgsObj = document.querySelectorAll(".g-index_1>div:nth-child(1)")[0];
    var i = 0;
    console.log(imgObj[0].src);
    mimgObj.style.opacity = 0;
    for (let r = 0; r < imgObj.length; r++) {
        imgObj[r].onclick = function(event){
            event.stopPropagation();
            document.getElementsByClassName("u2-img")[0].src = this.src;
            mimgObj.style.display = "block";
            var fadeIn = setInterval(function() {
                i += 0.1;
                mimgObj.style.opacity = i;
                imgsObj.style.filter = "blur(" + i*5 + "px)";
                if (i >= 1) {
                    i = 1;
                    clearInterval(fadeIn);
                }
            }, 100);
        }
    }
    document.getElementsByTagName("body")[0].onclick = function(){
        var fadeOut = setInterval(function() {
            i = i - 0.1;
            mimgObj.style.opacity = i;
            imgsObj.style.filter = "blur(" + i*5 + "px)";
            if (i <= 0) {
                clearInterval(fadeOut);
                imgsObj.style.filter = "blur(0px)";
                mimgObj.style.display = "none";
                i = 0;           
            }
        }, 100);
    }

    // 第二部分
    var img2Obj = document.querySelectorAll(".m-img2 > img");
    var blockObj = document.querySelectorAll(".m-block > span");
    for (let r = 0; r < blockObj.length; r++) {
        blockObj[r].onclick = function(event){
            event.stopPropagation();
            for (let c = 0; c < img2Obj.length; c++) {
                img2Obj[c].style.display = "none";
                blockObj[c].style.background = "#fff";
            }
            console.log();
            document.getElementsByClassName(event.target.className.split(" ")[0])[1].style.display = "block";
            this.style.background = "#c0c0c0";
        }
    }
    document.getElementsByClassName("g-index_2")[0].onclick = function(event){
        event.stopPropagation();
        for (let c = 0; c < img2Obj.length; c++) {
            img2Obj[c].style.display = "none";
            blockObj[c].style.background = "#fff";
        }
    }

    // 第三部分
    var box3Obj = document.getElementsByClassName("g-index_3")[0];
    var newObj = document.getElementsByClassName("m-new");
    var btn2Obj = document.getElementsByClassName("m-button2");
    var addBtnObj = document.getElementsByClassName("m-button")[0];
    console.log(addBtnObj);
    // var lastnewObj = document.querySelectorAll(".g-index_3 .m-new:last")[0];
    var nei = ["内容"];
    addBtnObj.onclick = function(event){
        event.stopPropagation();
        let r = Math.round(Math.random()*3);
        var numTxt = document.createTextNode(newObj.length+1);
        var nameTxt = document.createTextNode(nei);
        var dltTxt = document.createTextNode("Delete");
        var numDiv = document.createElement("div");
        var nameDiv = document.createElement("div");
        var dltDiv = document.createElement("div");
        numDiv.appendChild(numTxt);
        nameDiv.appendChild(nameTxt);
        dltDiv.appendChild(dltTxt);
        dltDiv.className = "m-button2";
        var newdiv = document.createElement("div");
        newdiv.className = "m-new";
        newdiv.appendChild(numDiv);
        newdiv.appendChild(nameDiv);
        newdiv.appendChild(dltDiv);
        box3Obj.insertBefore(newdiv, addBtnObj);
    }
    
    box3Obj.addEventListener('click', function(e){
        event.stopPropagation();
        var item = e.target;
        if (item.innerHTML == "Delete") {
            item.parentNode.parentNode.removeChild(item.parentNode);
            for (let r = 0; r < newObj.length; r++) {
                newObj[r].firstChild.innerHTML = r + 1;
            }
        }

    });

}