
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");

    if (sidebar) sidebar.classList.toggle("active");
    if (mainContent) mainContent.classList.toggle("active");
}
