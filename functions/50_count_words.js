function countWords(str){
    // trim removes extra spaces at start/end
    // split(/\s+/) splits on one or more spaces
    return str.trim().split(/\s+/).length;
}

console.log("No. of words "+countWords("hello world this is js"));  // 5
