const tab = document.getElementsByClassName('tab');
let currentIndex = 0;

showTab();

function changeTab(index) {
    currentIndex = index;
    showTab();
}

function showTab() {
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }

    tab[currentIndex].style.display = "block";
}

function changeChecked(checkbox) {
    checkbox.classList.toggle('checked');
}

function changeAssetContainer(button) {
    const assetsContainer = button.parentElement.nextElementSibling;

    if (assetsContainer.style.display === "none") {
        showAssetContainer(assetsContainer);
    } else {
        hideAssetContainer(assetsContainer);
    }
}

function hideAssetContainer(container) {
    container.style.display = "none";
    container.previousElementSibling.querySelector('.span-element').classList.remove('rotate');
}

function showAssetContainer(container) {
    container.style.display = "grid";
    container.previousElementSibling.querySelector('.span-element').classList.add('rotate');
}