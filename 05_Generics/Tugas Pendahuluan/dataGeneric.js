class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah ${this.data}`);
    }
}

const dataInstance = new DataGeneric(2311104034);
dataInstance.PrintData();
