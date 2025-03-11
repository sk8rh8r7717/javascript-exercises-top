const getTheTitles = function(bookArr) {
    function getTitleFromElement (Book) {
        return Book.title
    }
    return bookArr.map(getTitleFromElement)
};

// Do not edit below this line
module.exports = getTheTitles;
