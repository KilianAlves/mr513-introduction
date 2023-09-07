import { readdir, lstat } from 'node:fs/promises';

console.log("listDirWithSizes PROMISE ---------------------------------------------------");
            
async function listDirWithSizes(path: string): Promise<void> {
    console.log("PATH");

    try {
        const files = await readdir(path);
        for (const file of files)
            //il manque la partie pour size
            console.log(file+" size: ");
      } catch (err) {
        console.error(err);
      } 

}

listDirWithSizes(".");
        
console.log("-----------------------------------------------------------------------------");