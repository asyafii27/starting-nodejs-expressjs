// syncronous methode
const getUserSync = (id) => {
    const nama = id === 1 ? 'Ammad' : 'test';
    return {id, nama};
}

const userSatuSync = getUserSync(1);
console.log(userSatuSync);

const userDuaSync = getUserSync(2);
console.log(userDuaSync);

const haloSync = 'hello world';
console.log(haloSync)


//asyncronous method
const getUser = (id, cb) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = id === 1 ? 'Ahmad' : 'Syafii';
        cb({id, nama});
    }, 1000);
}

const  userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil)
})

const halo = 'hello world';
console.log(halo);