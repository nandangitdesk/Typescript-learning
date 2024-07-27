class takePhotos{
    constructor(
        cameraMode: string,
        filter: string
    ){}

    getSepia(): void{

    }

    getReelTime(): number{
        return 8
    }
}

class snapchat extends takePhotos{
   constructor(
    public camerMode: string,
    public filter: string,
    public burst: number
   ){
    super(camerMode,filter)
   }

   getSepia(): void {
       console.log("sepia");
       
   }
}

const np = new snapchat("test","test",3)