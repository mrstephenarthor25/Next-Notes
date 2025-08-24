"use server";


export default async function check_device(){

    
    let currentNodeVersion = process.version;

    currentNodeVersion = currentNodeVersion.replace(/^v/,"");

    const parts = currentNodeVersion.split(".");

    //check if major version is greater or equal to 20
    console.log(Number(parts[0]) );
    if(Number(parts[0]) >= 20 || (Number(parts[0])  >= 18 && Number(parts[1])  >= 17 )){

        return {
            status:true
        };
    }

    return {
        status:false,
        errors:
            ["Current Node versio is v"+ currentNodeVersion]
        
    };

}