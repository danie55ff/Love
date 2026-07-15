let currentPage = 1;

const totalPages = 7;

function showPage(number){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById("page"+number)
    .classList.add("active");

    currentPage = number;
}


function nextPage(){

    if(currentPage < totalPages){
        showPage(currentPage + 1);
    }

}


function checkPassword(){

    let pass = document.getElementById("password").value;
    let music = document.getElementById("music");

    if(pass === "1711"){

        music.play().catch(()=>{});

        showPage(2);

    }else{

        document.getElementById("error").innerHTML =
        "Esa no es la contraseña 😭 intenta otra vez ❤️";

    }

}



function mathQuiz(){

    let answers = [
        document.getElementById("q1").value,
        document.getElementById("q2").value,
        document.getElementById("q3").value,
        document.getElementById("q4").value,
        document.getElementById("q5").value
    ];


    let correct = [
        "96",
        "7",
        "25",
        "49",
        "7"
    ];


    let score = 0;


    for(let i=0;i<answers.length;i++){

        if(
        answers[i].trim()
        .toLowerCase()
        ==
        correct[i]
        ){
            score++;
        }

    }


    if(score === 5){

        document.getElementById("mathResult").innerHTML =
        "Perfecto 😎🧠❤️";

        setTimeout(()=>{
            showPage(4);
        },1000);


    }else{

        document.getElementById("mathResult").innerHTML =
        "Tienes "+score+"/5 😭 intenta otra vez";

    }

}



// corazones flotando

function createHeart(){

    let heart=document.createElement("span");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (Math.random()*3+5)+"s";


    document.querySelector(".hearts")
    .appendChild(heart);


    setTimeout(()=>{
        heart.remove();
    },8000);

}


setInterval(createHeart,500);



// activar música cuando toque la pantalla

document.body.addEventListener("click",()=>{

    let music=document.getElementById("music");

    if(music.paused){
        music.play().catch(()=>{});
    }

});
