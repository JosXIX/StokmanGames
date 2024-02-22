let checkcounter = 0;

function toggleMultiDownload(selectAllBtn, checkboxContainer, assetsContainer) {
    let checkboxes = checkboxContainer.querySelectorAll(".download-checkbox");
    let assetsItems = assetsContainer.querySelectorAll(".assets-item");

    if (selectAllBtn.className.includes("select-all")) {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].className.includes("checked")) {
                uncheck(checkboxes[i], assetsItems[i]);
            }
        }
        updateToSelectAll(selectAllBtn);
    } else {
        for (let i = 0; i < checkboxes.length; i++) {
            if (!checkboxes[i].className.includes("checked")) {
                check(checkboxes[i], assetsItems[i]);
            }
        }
        updateToDeselectAll(selectAllBtn);
    }

    updateDownload();
}

function toggleCheckBoxState(checkbox) {
    let container = checkbox.closest('.assets-container');
    let assetsItem = checkbox.closest('.assets-item');
    let checkboxList = container.getElementsByClassName('download-checkbox');
    let checkboxes = [];
    let downloadBtn = container.previousElementSibling.querySelector(".multidownload-btn");

    if (checkbox.className.includes("checked")) {
        uncheck(checkbox, assetsItem);
    } else {
        check(checkbox, assetsItem);
    }

    for (let i = 0; i < checkboxList.length; i++) {
        checkboxes.push(checkboxList[i].classList.contains("checked"));
    }

    let allSelected = checkboxes.every(item => item);

    if (!allSelected) {
        updateToSelectAll(downloadBtn);
    } else {
        updateToDeselectAll(downloadBtn);
    }

    updateDownload();
}

function uncheck(checkbox, assetsItem) {
    assetsItem.className = assetsItem.className.replace(" download-border", "");
    checkbox.className = checkbox.className.replace(" checked", "");
    checkcounter--;
}

function check(checkbox, assetsItem) {
    checkbox.className += " checked";
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
    document.getElementById('download-btn-text').textContent = `DOWNLOAD ${checkcounter}`;
}

function startDownload() {
    let checkboxes, checkedCheckboxes, assetsItemsBorders, multiDownBtn = [];
    checkboxes = document.getElementsByClassName('download-checkbox');
    checkedCheckboxes = document.getElementsByClassName('checked');
    assetsItemsBorders = document.getElementsByClassName('download-border');
    multiDownBtn = document.getElementsByClassName('multidownload-btn');
    let storedItems = [];
    let checkedItemsIndex = checkcounter;

    while (checkedItemsIndex >= 1) {
        if (checkboxes[0].className.includes("checked")) {
            storedItems[0] = checkboxes[0];
        }
        uncheck(checkedCheckboxes[0], assetsItemsBorders[0]);
        updateToSelectAll(multiDownBtn[0]);
        checkedItemsIndex = checkcounter;
    }

    updateDownload();
}