 let input=document.querySelector('input')
 let button=document.querySelector('button')
 let list=document.querySelector( '#list' )
let h2=document.querySelector( 'h2' )

 button.addEventListener("click", ()=>{
      let searchText=input.value;
 fetchData(searchText);
     input.value=' ';
     
 })

 function fetchData( searchText){
 //fetch
 //axios
 axios.get(` https://api.tvmaze.com/search/shows?q=${searchText}`)
 .then(function(response){
    // console.log(response.data)
manipulateDom(response.data)
 })
 }

 function manipulateDom(allthedata){
//remove the already parent movie
    while(list.firstChild){
list.firstChild.remove();
    }
       for(let data of allthedata){
        let figure=document.createElement('figure')
        figure.innerHTML=`
        <img src=${data.show.image.medium} >
<h2>${data.show.name}</h2>
<h5>${data.show.language}</h5>
<a href=${data.show.url}> </a>
`
        list.append(figure)
       }    
 }
