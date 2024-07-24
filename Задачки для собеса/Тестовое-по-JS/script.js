function checkPageLoad() {
    if (document.readyState === 'complete') {
        alert('Страница полностью загружена!');
        console.log('Страница полностью загружена!');
    } else {
        setTimeout(checkPageLoad, 100);
    }
}

checkPageLoad();