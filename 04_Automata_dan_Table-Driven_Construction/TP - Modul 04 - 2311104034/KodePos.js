class KodePos {
    constructor() {
        this.table = new Map([
            ["Batununggal", 40266],
            ["Kujangsari", 40287],
            ["Mengger", 40267],
            ["Wates", 40256],
            ["Cijaura", 40287],
            ["Jatisari", 40286],
            ["Margasari", 40286],
            ["Sekejati", 40286],
            ["Kebonwaru", 40272],
            ["Maleer", 40274],
            ["Samoja", 40273]
        ]);
    }
    
    getKodePos(kelurahan) {
        return this.table.get(kelurahan) || "Kode pos tidak ditemukan";
    }
}

class Main {
    static run() {
        const kodePos = new KodePos();
        console.log(kodePos.getKodePos("Wates")); 
        console.log(kodePos.getKodePos("Maleer")); 
        console.log(kodePos.getKodePos("Bancarkembar")); 
        console.log(kodePos.getKodePos("Margasari"));
    }
}

Main.run();