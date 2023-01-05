document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            document.getElementById("Output").innerHTML=input;
            console.log(input);
        }
    });
})