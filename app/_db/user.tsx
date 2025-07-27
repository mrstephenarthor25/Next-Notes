type userType ={
    name:string,
    age:number,
    hobbie:string[]
}
let users: userType[] = [
    {
        name:"stephen",
        age:24,
        hobbie:["coding"]
    },

    {
        name:"Marian",
        age:24,
        hobbie:["Singing"]
    },
    {
        name:"Johan",
        age:24,
        hobbie:["Dancing"]
    }


];


export function getUser(id:number){

    if(id < 0){
        return users;
    }else{
        return users[id]
    }
}