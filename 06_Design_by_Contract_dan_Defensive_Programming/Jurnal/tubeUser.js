class SayaTubeVideo {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.playCount = 0;
    }
    increasePlayCount(count) {
        this.playCount += count;
    }
    printVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}
class SayaTubeUser {
    constructor(id, username) {
        this.id = id;
        this.uploadedVideos = [];
        this.username = username;
    }
    getTotalPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }
    addVideo(video) {
        this.uploadedVideos.push(video);
    }
    printAllVideoPlayCount() {
        this.uploadedVideos.forEach(video => {
            video.printVideoDetails();
        });
    }
}
// Contoh penggunaan
const user = new SayaTubeUser(1, 'Maulana Kaka Halin Widyadhana');
const video1 = new SayaTubeVideo(101, 'Review Film How to Train Your Dragon oleh Maulana Kaka Halin Widyadhana');
const video2 = new SayaTubeVideo(102, 'Review Film DanDaDan oleh Maulana Kaka Halin Widyadhana');
video1.increasePlayCount(10);
video2.increasePlayCount(20);
user.addVideo(video1);
user.addVideo(video2);
console.log(`Total Play Count: ${user.getTotalPlayCount()}`);
user.printAllVideoPlayCount();