function shout() {
    return "hello".toUpperCase();
}
function whisper() {
    return "hello".toLowerCase();
}
function logShout() {
    console.log(("hello".toUpperCase())) ;
}
function logWhisper() {
    console.log(("hello".toLowerCase())) ;
}

function sayHiToHeadphonedRoommate(string){
    if(string=== string.toLowerCase()){
        return 'I can\'t hear you!';
        }
        else if(string === string.toUpperCase()){
            return "YES INDEED!";
        }
        else if(string === "Let\'s have dinner together!"){
            return "I would love to!";
        }

}



