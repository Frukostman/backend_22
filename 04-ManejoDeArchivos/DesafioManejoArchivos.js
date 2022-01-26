class Container {
    
    fs = require('fs')

    constructor() {
        this.route = "products.txt"
    }
// assigns new id a to object and saves it
    async saveObject(object) {
        const data = await this.getAll()
        object.id = data.length + 1;
        data.push(object)
        try {
            await this.fs.promises.writeFile(this.route, JSON.stringify(data, null, "\t"));        
        } catch (error) {
            console.log('file unable to save', error)
        }
    }   
// gets an object by id
    async getById(id) {
        let data = await this.getAll()
        if (data[id-1]==undefined) {
            return {error:"this file does not exist yet"}
          } else {
            return data[id-1]
          } 
    }
// gets all objects
    async getAll(){
        try {
            let data = await this.fs.promises.readFile(this.route, 'utf-8')
            return JSON.parse(data)
        } catch {
            console.log("empty file")
            return []
        }
    }
// deletes an object by the id
    async deleteById(id){ 
        let parsedId=parseInt(id);
        let data = await this.getAll()
        
        data.find((obj,idx)=>{
            if(obj.id==parsedId){
                console.log(obj.id);
                console.log(obj)
                console.log(idx)
                
                // data.splice(idx,1);
                // console.log(data)

            };
        })
        console.log(data)

        // try {
        //     await this.fs.promises.writeFile(this.route, JSON.stringify(data, null, "\t"));
            
        // } catch (error) {
        //     console.log('file unable to save', error)
        // }

    };  
    // deletes all objects
    async deleteAll(){
        try {
            await this.fs.promises.unlink(this.file)
        } catch (error) {
            console.log("no se pudo borrar el archivo", error)
        }
    }
}

module.exports= new Container

