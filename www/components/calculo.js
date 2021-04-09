// This is a JavaScript file

//variavel do texto do display
var textoDisplay="";

//primeiro valor das operações
var valor1 = 0;

//identificar o operador do calculo
var operador="";

function zerarDisplay(){
textoDisplay="";
$(".display").val("");
})

$(document).on("click",".botao",function(){
  textoDisplay += $(this).val();
$(".display").val("textoDisplay");
})

$(document).on("click",".ope", function(){
operador= $(this).html();
valor1= textoDisplay;
zerarDisplay();
})

$(document).on("click", ".igual", function(){
  var valor2 = textoDisplay;
  zerarDisplay();


  if(operador == "+"){
textoDisplay = parseFloat(valor1) + parseFloat(valor2);
  }

  if(operador == "-"){
textoDisplay = parseFloat(valor1) - parseFloat(valor2);
  }
  
  if(operador == "*"){
textoDisplay = parseFloat(valor1) * parseFloat(valor2);
  }

  if(operador == "/"){
textoDisplay = parseFloat(valor1) / parseFloat(valor2);
  }

  $(".display").val(textoDisplay);
})
© 2021 GitHub, Inc.