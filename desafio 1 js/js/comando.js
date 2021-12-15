window.onload = function(){

    let produtos = [
        {descricao:"Uva italia", preco:8.28},
        {descricao:"laranja pêra", preco:1.87},
        {descricao:"melãncia", preco:1.40},
        {descricao:"jabuticaba", preco:10.50},
        {descricao:"Pessego", preco:4.99},
  
    ]
  
    const listaProdutos = document.querySelector("#listaProdutos");
  
  
    ( ()=>{
          for( let pro of produtos ){
              const filhoLi = document.createElement("li");
  
              for( listaP in pro){
                if ( listaP == "preco" ){
                     listaProdutos.appendChild(filhoLi).setAttribute("data-preco", pro[listaP] );
                  
                } else {
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }
  
              }
          }
          
    } )(produtos)
  
    let cestaDoCliente = [];
      let selecionarItem = document.querySelectorAll("#listaProdutos > li")
      let compraDoCliente = document.querySelector('#cestaDoCliente')
      let valorTotalCompra = document.querySelector("#mostraTotalCompra")
      let total=0;
      selecionarItem.forEach(function(item){
              item.addEventListener('click', function(){
    if(cestaDoCliente.indexOf(item.textContent) != -1){
                      alert("Este item já está na sua lista")
                  }else{
                      total += Number(item.dataset.preco)
                      cestaDoCliente.push(item.textContent);
                      let itemCesta = document.createElement('li');
                      compraDoCliente.appendChild(itemCesta).textContent = item.textContent;
                      valorTotalCompra.value = total.toFixed(2);
  }
   })
   })
  
  
  
  }