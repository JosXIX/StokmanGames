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
    checkboxes.className = checkboxes.className.replace(" checked", "");
    assetsItem.className = assetsItem.className.replace(" download-border", "");
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
    let items, checkedItems, assetsItems = [];
    items = document.getElementsByClassName('download-checkbox');
    checkedItems = document.getElementsByClassName('checked');
    assetsItems = document.querySelectorAll('.assets-item .checked');
    multiDownBtn = document.getElementsByClassName('multidownload-btn');
    let storedItems = [];
    let storedItemsIndex = 0;
    let checkedItemsIndex = checkedItems.length;

    for (let i = 0; i < items.length; i++) {
        if (items[i].className.includes("checked")) {
            storedItems[storedItemsIndex] = items[i];
            storedItemsIndex++;
        }
    }

    for (let i = 0; i < checkedItemsIndex; i++) {
        uncheck(checkedItems[i], assetsItems[i]);
    }

    for (let i = 0; i < multiDownBtn.length; i++) {
        updateToSelectAll(multiDownBtn[i]);
    }

    updateDownload();
}

/*function toggleCheckBoxState(element) {
    let container = element.closest('.assets-container');
    let itemcontainer = container.getElementsByClassName('download-checkbox');
    let checkboxes = [];
    let downBtn = container.previousElementSibling.querySelector(".multidownload-btn");
    let allSelected = true;

    if (element.className.includes("checked")) {
        element.className = element.className.replace(" checked", "");
        checkcounter--;
    } else {
        element.className += " checked";
        checkcounter++;
    }

    for (let i = 0; i < itemcontainer.length; i++) {
        checkboxes.push(itemcontainer[i].checked);
    }

    for (let i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i]) {
            allSelected = false;
            break;
        }
    }

    if (!allSelected) {
        downBtn.className = downBtn.className.replace(" select-all", "");
        downBtn.textContent = "Select All";
    } else {
        downBtn.className += " select-all";
        downBtn.textContent = "Deselect All";
    }
}*/