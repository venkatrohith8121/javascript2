setInterval(() => {
    document.getElementsByTagName('span')[0].innerHTML = new Date().toLocaleTimeString()
}, 1000);