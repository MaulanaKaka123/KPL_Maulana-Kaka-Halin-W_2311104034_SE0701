class HaloGeneric {
    SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

function main() {
    const halo = new HaloGeneric();
    
    halo.SapaUser("Kaka");
}

main();
