/*console.log("abc");
var kc = document.querySelector(".balloon_holder");
kc.style.display = 'none';
*/

setTimeout(function(){
        var setBlockBunny = document.querySelector("#bunny_1").style.display='block';
        var setBlockHolder = document.querySelector(".carrots_holder").style.display='block';
    }, 1000
)
setTimeout(function(){
    var setBlockEntr = document.querySelector(".entrance").style.display = 'block';
    var setFilled = document.querySelectorAll("#start_1a");
    setFilled[0].classList.add('filled');
    var setFilled = document.querySelectorAll("#focus_1a");
    setFilled[0].classList.remove('blank');
    var setFilled = document.querySelectorAll("#focus_2a");
    setFilled[0].classList.add('focused');
    setFilled[0].classList.remove('blank');
    var setNoneBlank = document.querySelectorAll(".blank");
    setNoneBlank.forEach(function(item){
        item.style.display = 'none';
    });
    var setNoneBlank = document.querySelectorAll("#edit_2a");
    setNoneBlank.forEach(function(item){
        item.innerHTML = '<span>&nbsp</span><span>&nbsp</span>';
    }
    )
}, 2000
)

    

    


