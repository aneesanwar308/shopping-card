let show_banner = document.getElementById("banner")
let banner = true
let button = document.getElementById("btn");
function showBanner() {
    if (banner) {
        show_banner.style.display = "inline-block"
        button.innerHTML = "Hide banner"
        banner = false
    }
    else if (!banner) {
        show_banner.style.display = "none"
        button.innerHTML = "Show banner"
        banner = true
    }
}