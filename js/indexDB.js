
const indexedDB = window.indexedDB

if(indexedDB){
    let db
    const request = indexedDB.open('listClient',1)

    request.onsuccess = () =>{
        db = request.result
        console.log('OPEN',db)

    }
    request.onupgradeneeded = () =>{
        db = request.result
        console.log('Create',db)

    }
    request.onerror = () =>{
        console.log('Error',error)
    }
}