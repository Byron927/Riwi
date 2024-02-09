const btnLogOut = document.querySelector("#btnLogOut");

btnLogOut.addEventListener("click", () => {
  localStorage.removeItem("isAuthorizated");
  window.location.href = "index.html";
});
