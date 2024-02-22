let checkcounter = 0;

function toggleMultiDownload(selectAllBtn, checkboxContainer, assetsContainer) {
    let checkboxes = checkboxContainer.querySelectorAll(".download-checkbox");
    let assetsItems = assetsContainer.querySelectorAll(".assets-item");

    if (selectAllBtn.classList.contains("select-all")) {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].classList.contains("checked")) {
                uncheck(checkboxes[i], assetsItems[i]);
            }
        }
        updateToSelectAll(selectAllBtn);
    } else {
        for (let i = 0; i < checkboxes.length; i++) {
            if (!checkboxes[i].classList.contains("checked")) {
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

    if (checkbox.classList.contains("checked")) {
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
    assetsItem.classList.remove("download-border");
    checkbox.classList.remove("checked");
    checkcounter--;
}

function check(checkbox, assetsItem) {
    checkbox.classList.add("checked");
    assetsItem.classList.add("download-border");
    checkcounter++;
}

function updateToSelectAll(btn) {
    btn.classList.remove("select-all");
    btn.textContent = "Select All";
}

function updateToDeselectAll(btn) {
    btn.classList.add("select-all");
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
        if (checkboxes[0].classList.contains("checked")) {
            storedItems[0] = checkboxes[0];
        }
        uncheck(checkedCheckboxes[0], assetsItemsBorders[0]);
        updateToSelectAll(multiDownBtn[0]);
        checkedItemsIndex = checkcounter;
    }

    updateDownload();
}