//console.log("Working")

//creating an object
var video = {
    filename: "Harry Potter",
    format: ".mp4",
    duration: "1:59",
    owner: "J.K Rowling",
    getVideoName: function () {
        return this.getVideoName;
    },
    getfileFormat: function () {
        return this.format;
    },
    getduration: function () {
        return this.duration;
    },
    getOwner: function () {
        return this.owner;
    }
}

//How to access these data 
console.log(video.getVideoName()); //access through function
console.log(video.getOwner);
console.log(video.getduration);
console.log(video.getfileFormat);
//______________________________
console.log(video.duration); //access directly
console.log(video.filename);
console.log(video.format);
console.log(video.owner);
