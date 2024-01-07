const capture = () => {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (screenshotUrl) => {
        const screenshotImg = document.getElementById("screenshot-img");
        screenshotImg.src = screenshotUrl;
    });
};

document.getElementById('capture-button').addEventListener('click', capture);