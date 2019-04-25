
var create_random_string = (random_dom) => {
    for (i = 0; i <=random_dom; i++) {
        (function (i) {
            setTimeout(function () {
                //console.log(random_dom-i);
                if(random_dom-i == 0){
                    document.getElementsByClassName("ssJumpRed")[0].innerHTML = random_dom-i;
                    console.log("跳轉頁面");
                    create_random_string(5);
                }
                else{
                    document.getElementsByClassName("ssJumpRed")[0].innerHTML = random_dom-i;
                }
            }, (i + 1) * 1000);
        })(i);
    }
}

create_random_string(5);