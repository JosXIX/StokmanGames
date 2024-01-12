let checkcounter = 0;

function toggleMultiDownload(element, checkbox, item) {
    let checkboxes = checkbox.querySelectorAll(".download-checkbox");
    let assetsItem = item.querySelectorAll(".assets-item");

    if (element.className.includes("select-all")) {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].className.includes("checked")) {
                uncheck(checkboxes[i], assetsItem[i]);
            }
        }
        updateToSelectAll(element);
    } else {
        for (let i = 0; i < checkboxes.length; i++) {
            if (!checkboxes[i].className.includes("checked")) {
                check(checkboxes[i], assetsItem[i]);
            }
        }
        updateToDeselectAll(element);
    }

    updateDownload();
}

function toggleCheckBoxState(element) {
    let container = element.closest('.assets-container');
    let assetsItem = element.closest('.assets-item');
    let itemcontainer = container.getElementsByClassName('download-checkbox');
    let checkboxes = [];
    let downBtn = container.previousElementSibling.querySelector(".multidownload-btn");

    if (element.className.includes("checked")) {
        uncheck(element, assetsItem);
    } else {
        check(element, assetsItem);
    }

    for (let i = 0; i < itemcontainer.length; i++) {
        checkboxes.push(itemcontainer[i].classList.contains("checked"));
    }

    let allSelected = checkboxes.every(item => item);

    if (!allSelected) {
        updateToSelectAll(downBtn);
    } else {
        updateToDeselectAll(downBtn);
    }

    updateDownload();
}

function uncheck(checkboxes, assetsItem) {
    assetsItem.className = assetsItem.className.replace(" download-border", "");
    checkboxes.className = checkboxes.className.replace(" checked", "");
    checkcounter--;
}

function check(checkboxes, assetsItem) {
    checkboxes.className += " checked";
    assetsItem.className += " download-border";
    checkcounter++;
}

function updateToSelectAll(btn) {
    btn.className = btn.className.replace(" select-all", "");
    btn.textContent = "Select All";
}

function updateToDeselectAll(btn) {
    btn.className += " select-all";
    btn.textContent = "Deselect All";
}

function updateDownload() {
    document.getElementById('download-assets').textContent = `DOWNLOAD ${checkcounter}`;
}

function startDownload() {
    let items, checkedCheckBoxes, assetsItemsBorder = [];
    items = document.getElementsByClassName('download-checkbox');
    checkedCheckBoxes = document.getElementsByClassName('checked');
    assetsItemsBorder = document.getElementsByClassName('download-border');
    multiDownBtn = document.getElementsByClassName('multidownload-btn');
    let storedItems = [];
    let storedItemsIndex = 0;
    let checkedItemsIndex = checkcounter;

    while (checkedItemsIndex >= 1) {
        if (items[0].className.includes("checked")) {
            storedItems[0] = items[0];
            storedItemsIndex++;
        }
        uncheck(checkedCheckBoxes[0], assetsItemsBorder[0]);
        updateToSelectAll(multiDownBtn[0]);
        checkedItemsIndex = checkcounter;
    }

    updateDownload();
}