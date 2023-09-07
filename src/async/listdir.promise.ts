import { readdir, lstat } from 'node:fs/promises';

console.log("listDirWithSizes PROMISE ---------------------------------------------------");
            
function listDirWithSizes(path: string): void {
    console.log("PATH");

    readdir(path).then(files => files.forEach(file => {
      lstat(file).then(stats => {
        console.log(file+" size: "+stats.size)
      }).catch(err=>{
        console.log(err);
      })
    })

    ).catch(err=>{
      console.log(err);
    })
}

listDirWithSizes(".");
        
console.log("-----------------------------------------------------------------------------");