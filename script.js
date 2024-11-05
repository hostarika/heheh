const box = document.getElementById("box");
const eye = document.getElementById("eye");
const modmeId = document.getElementById("modme-id");
const parol = document.getElementById("parol");
const btn = document.getElementById("btn");
const err = document.getElementById("err");
const malumot =document.getElementById("kirish")
let user = {
    ism: "Amirxon",
    familiya: "Ibaydillayev",
    id: "mars",
    parol: "1234",
    coin: 8000,
    xp: 5000
}
let user2 = {
    ism: "Muhammaddavron",
    familiya: "Doniyorov",
    id: "MarsIt",
    parol: "23057",
    coin: 8000,
    xp: 5000
}

eye.addEventListener("click", () => {
   
    if (parol.type == "password") {
        parol.type = "text";
    } else {
        parol.type = "password";
    }
});

parol.addEventListener("input", () => {
    btn.style.backgroundColor = "orange";
    btn.disabled = false;
});





btn.addEventListener("click", () => {
    if (modmeId.value === user.id && parol.value === user.parol) {
        box.style.display = "none";
        malumot.style.display ="block"

    }
     else {
        err.style.display = "block";
        malumot.style.display="none"
    }
});
