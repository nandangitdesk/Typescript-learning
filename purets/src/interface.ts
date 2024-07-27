interface takePhoto{
    camera: string
    filter: string
    burst: number
}

interface story{
    createStory(): void
}

class instagram implements takePhoto{
    constructor(
        public camera:string,
        public filter: string,
        public burst: number
    ){}
}

class youtube implements takePhoto,story{
    constructor(
        public camera:string,
        public filter: string,
        public burst: number,
        public short: string    
    ){}

    createStory(): void {
        console.log("story was created");
        
    }
}

