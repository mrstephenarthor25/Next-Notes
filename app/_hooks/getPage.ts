import type { Element } from "../types/custom";
import { checkOption } from "./image_options";
type prop = {
    slug:string
}



let sample_aside_content = [
    {
        title:"Perequesites",
        slug: "things-you-need-to-learn-nextjs",
        content:`# Main Heading
        Hello there #[image:note-small-bg.jpg~copy&true]#
        ## Subheading
        How are you? #[image:note-small-bg.jpg]# Bye! This is so long men
        ## Another Subheading
        Lets go again`
    }
];

export function getContent({slug}:{slug:string}){


        let regex = /#\[image:(.*?)\]#/g;
        const result:Element[] = [];
        let unparsed_content = sample_aside_content.find(entry=>{
            return entry.slug.toLowerCase() == slug.toLocaleLowerCase() ? true :false
        });

        if(unparsed_content == undefined){
            return ;
        }

        const lines = unparsed_content?.content.split("\n");

        let buffer = "";

        const flushBuffer = ()=>{
            if(buffer.trim()){

                //parse any images inside the buffer
                let lastIndex = 0;
                let match;

                while((match = regex.exec(buffer))  !== null ){

                    //Add text before current
                    if(match.index > lastIndex){
                        result.push({
                            type:"text",
                            content: buffer.slice(lastIndex,match.index).trim()
                        });
                    }
        

                    
                    let image_details = match[1].split("~");
                

                    let image_data = {
                        type:"img",
                        src:image_details[0],
                    }
                    if(image_details.length > 1){

                        //discover the option
                        let result = image_details[1].split("&");

                        image_data = {...image_data,[result[0]]:result[1]};
                        
                    }
                    
                    //Add the image part
                    result.push(image_data);
        
                    //update lastIndex
        
                    lastIndex = regex.lastIndex
                }
                    //Add remaining text after the last match
                    if(lastIndex < buffer.length){
                        result.push({
                            type:"p",
                            content:buffer.slice(lastIndex).trim()
                        });
                    }
                }

                buffer = "";
            };
         
            for(const line of lines){

                const trimmed = line.trim();

                if(trimmed.startsWith("## ")){

                    flushBuffer();
                    result.push({
                        type:"h2",
                        content:trimmed.slice(3).trim()
                    });
                }else if(trimmed.startsWith("# ")){

                    flushBuffer();
                    result.push({
                        type:"h1",
                        content: trimmed.slice(2).trim()
                    });
                }else{
                    buffer += (buffer ? " ": "") + line;
                }
            }   
            flushBuffer(); 
        return result;
        }





