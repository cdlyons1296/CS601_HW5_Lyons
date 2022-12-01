async function getDegrees(){
fetch("https://low-malleable-router.glitch.me/my_degrees.json").then((response) =>{
    console.log('resolved', response);
    return response.json();
}).then(data =>{
    console.log(data);
    let print = "";
    for(let i = 0; i < data.length; i++){
    print += `I received (or will recieve) a ${data[i].Type} in 
    ${data[i].Program} 
    from ${data[i].School} in 
    ${data[i].Year}. <br>`;
    }
    document.getElementById("data").innerHTML = print;
}).catch((err) => {
    console.log('rejectd', err);
});
}