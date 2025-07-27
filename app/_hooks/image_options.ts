let imageOptions = [
    
        "copy",
        "link"
    
]
export function ImageOptions(){
    
    return [
        "copy",
        "link"
    ]
}


export function checkOption(option:string){

    let find = imageOptions.find(entry=>{
        return entry==option ? true: false;
    });

    return find;
}