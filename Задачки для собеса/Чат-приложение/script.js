function $(callback) {
    if (document.readyState === 'complete') {
      callback();
    } else {
      window.onload = function () {
        callback();
      };
    }
}