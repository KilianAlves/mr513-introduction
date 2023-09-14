import { readdir, lstat } from 'node:fs/promises';

console.log("listDirWithSizes PROMISE ---------------------------------------------------");
            
async function listDirWithSizes(path: string): Promise<void> {
    console.log("PATH");
    try {
        const files = await readdir(path);

        for (const file of files) {
            const sizes = await lstat(file);
            console.log(file+" size: "+sizes.size);
          }
      } catch (err) {
        console.error(err);
      } 

}

listDirWithSizes(".");
        
console.log("-----------------------------------------------------------------------------");