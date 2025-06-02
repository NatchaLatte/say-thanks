const natchaTheme = document.body
const buttonToggle = document.getElementById("button-toggle")
const toggleTheme = () => {
    if(natchaTheme.getAttribute("data-natcha-theme") === "dark"){
        natchaTheme.setAttribute("data-natcha-theme", "light")
        buttonToggle.textContent = "ไปยังโหมดมืด"
    }else{
        natchaTheme.setAttribute("data-natcha-theme", "dark")
        buttonToggle.textContent = "ไปยังโหมดสว่าง"
    }
}