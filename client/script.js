async function getData(){
    const response = await fetch (file);
    const data = await response.json();
    return data;
}

async function init (){
    const data = await getDAta('./data.json');
    console.log(data);


}

init ();