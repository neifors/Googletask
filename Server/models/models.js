const searchData = require('../data')

class Result {
    constructor(data) {
        this.keywords = data.keywords;
        this.title = data.title;
        this.description = data.description;
        this.url = data.url;
    }

    static findByKeyword(keyword) {
        const searchWord = searchData.searchList.filter(
            (result) => result.keywords.some(key => key === keyword))
        return searchWord
    }
}

module.exports = Result
