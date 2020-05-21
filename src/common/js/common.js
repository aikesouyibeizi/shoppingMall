export function byClassName(sClassName){
    if(document.getElementsBYClassName){
        return document.getElementsByClassName(sClassName);
    } else {
        var allTagsName = document.getElementsByTagName('*');
        var result = [];
        for(var i = 0; i<allTagsName.length;i++){
            if(allTagsName[i].className === sClassName){
                result.push(allTagsName[i]);
            }
        }
        return result;
    }
}