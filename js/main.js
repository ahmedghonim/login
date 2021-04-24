let inputName, inputEmail, inputpass, btn, taggle, arrStor

inputName = document.getElementById("Name")
inputEmail = document.getElementById("Email")
inputpass = document.getElementById("Password")
btn = document.getElementById("btn")
taggle = document.getElementById("taggle")



if (localStorage.getItem("myStorage") == null) {// for avoid eror cuz of null of array wheen is imptey
    arrStor = []
} else {
    arrStor = JSON.parse(localStorage.getItem("myStorage"));
}


const saveData = _ => {
    valName = inputName.value
    valEmail = inputEmail.value
    valpass = inputpass.value


    if (!isEmailExist() && valName != `` && valEmail != `` && valpass != ``) {
        pushArr(valName, valEmail, valpass)
        document.getElementById('exist').innerHTML = `Success`
        document.getElementById('exist').classList.remove("text-danger")
        document.getElementById('exist').classList.add("text-success")

    } else {
        document.getElementById('exist').innerHTML = `email already exists`
    }

    clear()
}

// pushing value to array and localstorage
const pushArr = (val1, val2, val3) => {
    arrStor.push(
        {
            name: valName,
            email: valEmail,
            pass: valpass
        }
    )
    localStorage.setItem("myStorage", JSON.stringify(arrStor))
}

let curantArray;

const isEmailExist = _ => {
    for (const i of arrStor) {
        if (i.email == inputEmail.value) {
            curantArray = i.name
            return true
        }
    }
    return false
}
const isEmailPass = _ => {
    for (const i of arrStor) {
        if (i.pass == inputpass.value) {
            return true
        }
    }
    return false
}

const clear = _ => {
    inputName.value = ``
    inputEmail.value = ``
    inputpass.value = ``
}

const enter = _ => {
    if (isEmailPass() && isEmailExist()) {
        console.log("okay");
        localStorage.setItem("cuarntUser", JSON.stringify(curantArray))
        window.location.href = "user.html"
    } else {
        if (inputEmail.value == `` && inputpass.value == ``) {

            document.getElementById('exist').innerHTML = `please enter email or password`
        } else if (!isEmailExist()) {
            console.log("email ghlat akeed ");
            document.getElementById('exist').innerHTML = `incorrect email`

        } else if (!isEmailPass()) {
            document.getElementById('exist').innerHTML = `incorrect password`

        }
    }
}



let taggleTF = true;
const logInSing = () => {
    if (taggleTF) {

        inputName.style.display = "none"
        btn.textContent = "Login"
        btn.removeEventListener("click", saveData)
        btn.addEventListener("click", enter)
        taggle.innerHTML=`Sign Up`
        document.getElementById("infolog").innerText=`Don’t have an account?`
        taggleTF = false
    } else {
        inputName.style.display = "block"
        btn.textContent = "Signin"
        taggleTF = true;
        btn.removeEventListener("click", enter)
        btn.addEventListener("click", saveData)
        taggle.innerHTML=`Sign In`
        document.getElementById("infolog").innerText=`You have an account?`
    }
}
logInSing()

taggle.addEventListener('click', logInSing)

