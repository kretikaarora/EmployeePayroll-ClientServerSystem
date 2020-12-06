//utility is used so that functions common to both the pages are not repeated twice
const stringifyDate=(date)=>{
    const options={day:'numeric', month: 'short',year:'numeric'};
    const newDate= date===undefined?"undefined":new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
    return newDate;
}
const checkName= (name)=>{
    let nameRegex= RegExp('^[A-Z]{1}[a-zA-Z ]{2,}$');
        if(!nameRegex.test(name))
         throw "Name is Incorrect";
}
const checkStartDate=(startDate)=>{
    let currentDate= new Date();
    if(currentDate- startDate<0)
        throw "Invalid Start Date";
}