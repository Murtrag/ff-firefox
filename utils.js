function getImageIfExists(info) {
    if (info.mediaType=="image"){
        return info.srcUrl
    }    
};
function getTextIfExists(info) {
    if ("selectionText" in info){
        return info.selectionText
    }    
};
function getSoundIfExists(info) {
    if ("selectionText" in info){
        return info.selectionText
    }    
};
