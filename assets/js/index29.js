function triggerLiveStaticReviews () {
    var url = 'https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652';
    var live = document.querySelector('#liveReviews');
    var static = document.querySelector('#staticReviews');

    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        console.log('Ready state changed');
        if (this.status == 200) {
            live.classList.remove('hide');
            static.classList.add('hide');
        }
        else {
            static.classList.remove('hide');
            live.classList.add('hide');
        }
    }
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

var gridJS = document.createElement('script');
gridJS.src = 'https://repuso.com/widgets/grid.js';

gridJS.onload = triggerLiveStaticReviews;

var head = document.querySelector('head');
head.appendChild(gridJS);