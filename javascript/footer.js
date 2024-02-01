
let likeCount = document.querySelector('.like_count');

function getLikeCount (){
    const favouriteCount = localStorage.getItem(FAVORITE);
    const favouriteCountData = JSON.parse(favouriteCount).length || 0;
    likeCount.textContent = favouriteCountData;
}

setTimeout(() => {
    getLikeCount ()
}, 100) 