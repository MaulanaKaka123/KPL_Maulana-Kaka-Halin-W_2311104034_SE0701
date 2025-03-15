class LockedState {
    lock(door) {
        console.log("Pintu sudah terkunci.");
    }

    unlock(door) {
        console.log("Pintu tidak terkunci.");
        door.setState(new UnlockedState());
    }
}

class UnlockedState {
    lock(door) {
        console.log("Pintu terkunci.");
        door.setState(new LockedState());
    }

    unlock(door) {
        console.log("Pintu sudah terbuka.");
    }
}

class DoorMachine {
    constructor() {
        this.state = new LockedState();
        console.log("Pintu terkunci.");
    }

    setState(state) {
        this.state = state;
    }

    lock() {
        this.state.lock(this);
    }

    unlock() {
        this.state.unlock(this);
    }
}

const door = new DoorMachine();
door.unlock();
door.lock();  
door.unlock();