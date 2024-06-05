const Input = document.querySelectorAll("input");
const iconInvalid = document.querySelectorAll(".iconInvalid");

Input[0].addEventListener("keyup", (e) => {
    if(Input[0].value.length < 3){
        Input[0].classList.add("InputInvalid");
        iconInvalid[0].classList.add("iconInvalidActive");
    }else{
        Input[0].classList.remove("InputInvalid");
        iconInvalid[0].classList.remove("iconInvalidActive");

    }
})
Input[1].addEventListener("keyup", (e) => {
    if(Input[1].value.length < 3){
        Input[1].classList.add("InputInvalid");
        iconInvalid[1].classList.add("iconInvalidActive");
    }else{
        Input[1].classList.remove("InputInvalid");
        iconInvalid[1].classList.remove("iconInvalidActive");

    }
})
Input[2].addEventListener("keyup", (e) => {
    if(Input[2].value.length < 3){
        Input[2].classList.add("InputInvalid");
        iconInvalid[2].classList.add("iconInvalidActive");
    }else{
        Input[2].classList.remove("InputInvalid");
        iconInvalid[2].classList.remove("iconInvalidActive");

    }
})
Input[3].addEventListener("keyup", (e) => {
    if(Input[3].value.length < 3){
        Input[3].classList.add("InputInvalid");
        iconInvalid[3].classList.add("iconInvalidActive");
    }else{
        Input[3].classList.remove("InputInvalid");
        iconInvalid[3].classList.remove("iconInvalidActive");

    }
})
Input[4].addEventListener("keyup", (e) => {
    if(Input[4].value.length < 3){
        Input[4].classList.add("InputInvalid");
        iconInvalid[4].classList.add("iconInvalidActive");
    }else{
        Input[4].classList.remove("InputInvalid");
        iconInvalid[4].classList.remove("iconInvalidActive");

    }
})
Input[5].addEventListener("keyup", (e) => {
    if(Input[5].value.length < 3){
        Input[5].classList.add("InputInvalid");
        iconInvalid[5].classList.add("iconInvalidActive");
    }else{
        Input[5].classList.remove("InputInvalid");
        iconInvalid[5].classList.remove("iconInvalidActive");

    }
})