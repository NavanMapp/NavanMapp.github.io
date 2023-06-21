// logging out of the site, clearing user id from storage
const logOut = document.getElementById("signOut").addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.removeItem("uid");
    window.location.href = "/NavanMapp.github.io/index.html";
});