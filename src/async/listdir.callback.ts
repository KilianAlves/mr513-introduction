import { readdir, lstat } from 'node:fs';
console.log("listDirWithSizes CALLBACK ---------------------------------------------------");
        
    function listDirWithSizes(path: string): void {

        readdir(path,(err, files) => {
            console.log("fichiers :");
            if (err) {
                console.log(err);
            } else {
                files.forEach(file => {
                    let size = lstat(file,(err, stats) => {
                        console.log(file + " size: " +stats.size);
                    })
                })
            }
        })
    }
    
    listDirWithSizes(".");
    
    console.log("-----------------------------------------------------------------------------");