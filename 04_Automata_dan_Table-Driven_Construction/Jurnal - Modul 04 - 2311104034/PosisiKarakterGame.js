class State {
    tekanTombolW(karakter) {}
    tekanTombolS(karakter) {}
    tekanTombolX(karakter) {}
}

// State Berdiri
class Berdiri extends State {
    tekanTombolW(karakter) {
        console.log("Sudah dalam posisi Berdiri.");
    }

    tekanTombolS(karakter) {
        console.log("Beralih ke posisi Jongkok.");
        karakter.setState(new Jongkok());
    }

    tekanTombolX(karakter) {
        console.log("Beralih ke posisi Terbang.");
        karakter.setState(new Terbang());
    }
}

// State Jongkok
class Jongkok extends State {
    tekanTombolW(karakter) {
        console.log("Beralih ke posisi Berdiri.");
        karakter.setState(new Berdiri());
        console.log("Posisi Standby");
    }

    tekanTombolS(karakter) {
        console.log("Beralih ke posisi Tengkurap.");
        karakter.setState(new Tengkurap());
    }

    tekanTombolX(karakter) {
        console.log("Tidak bisa langsung ke posisi Terbang dari Jongkok.");
    }
}

// State Tengkurap
class Tengkurap extends State {
    tekanTombolW(karakter) {
        console.log("Beralih ke posisi Jongkok.");
        karakter.setState(new Jongkok());
    }

    tekanTombolS(karakter) {
        console.log("Sudah dalam posisi Tengkurap.");
    }

    tekanTombolX(karakter) {
        console.log("Tidak bisa langsung ke posisi Terbang dari Tengkurap.");
    }
}

// State Terbang
class Terbang extends State {
    tekanTombolW(karakter) {
        console.log("Sudah dalam posisi Terbang.");
    }

    tekanTombolS(karakter) {
        console.log("Beralih ke posisi Berdiri.");
        karakter.setState(new Berdiri());
        console.log("Posisi Standby");
    }

    tekanTombolX(karakter) {
        console.log("Sudah dalam posisi Terbang.");
    }
}

class PosisiKarakterGame {
    constructor() {
        this.state = new Berdiri();
    }

    setState(newState) {
        this.state = newState;
    }

    tekanTombolW() {
        this.state.tekanTombolW(this);
    }

    tekanTombolS() {
        this.state.tekanTombolS(this);
    }

    tekanTombolX() {
        this.state.tekanTombolX(this);
    }
}

const karakter = new PosisiKarakterGame();

karakter.tekanTombolS();
karakter.tekanTombolS();
console.log("Posisi Istirahat");

karakter.tekanTombolW();
karakter.tekanTombolW();
console.log("Posisi Standby");

karakter.tekanTombolX();
karakter.tekanTombolS();
console.log("Posisi Standby");