$('#adminUsuarios').click(function(){
    $('#pnPrincipal').load('../vistas/usuarios.html');
});

getData();

function getData(){
    var url = 'https://localhost:44375/api/values';
    fetch(url).then(function(response){
        return response.json();
    }).then(function(Data){
        console.log(Data);
    })
}