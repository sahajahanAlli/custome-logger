class logger{
    constructor(name){
        this.name=name
    }
    log(message) { 
           console.log(`[${this.name}] ${message}`);  
        }
    info(message) {  
          this.log(`info: ${message}`); 
         }
    verbose(message) { 
           this.log(`verbose: ${message}`); 
         } 
    error(message){
        this.log(`error: ${message}`); 
    }
}

module.exports=logger