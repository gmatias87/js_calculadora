var tecla = document.querySelectorAll('.tecla');
var firstval = 0;
var  resVal = 0;
var op1 = "";

for (var i = 0; i < tecla.length; i++) {
          tecla[i].addEventListener('mousedown', function() {
            this.style.transform="scale(0.9)"
          })
          tecla[i].addEventListener("mouseup",function(){
                  this.style.transform="scale(1,1)"
          })
        }

function showNumber(id){
  if(IsDecimal() && id == 'punto') {
    return;
  }
  else {
    if (id == 'punto') {
      document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + '.';
    }
    else {
      if (document.getElementById('display').innerHTML == "0"){
            document.getElementById('display').innerHTML = id;
      }else {
          document.getElementById('display').innerHTML = document.getElementById('display').innerHTML + id;
      }
    }
  }
}

function ClearDisplay(){
  document.getElementById('display').innerHTML = '';
}

function Operation (op){
  if(firstval == 0){
    firstval = document.getElementById('display').innerHTML;
    op1 = op;
  } else{
      Calc();
      op1 = op;
      firstval = resVal;
    }
    ClearDisplay();
}

function Calc() {
  switch (op1) {
    case 'mas':
        resVal = parseFloat(firstval) + parseFloat(document.getElementById('display').innerHTML);
        break;
    case 'menos':
        resVal = parseFloat(firstval) - parseFloat(document.getElementById('display').innerHTML);
        break;
    case 'por':
        resVal = parseFloat(firstval) * parseFloat(document.getElementById('display').innerHTML);
        break;
    case 'dividido':
        resVal = parseFloat(firstval) / parseFloat(document.getElementById('display').innerHTML);
        break;
      }
}

function showResult(){
    Calc();
    document.getElementById('display').innerHTML = resVal;
    firstval =0;
}

function resetCalc(){
  document.getElementById('display').innerHTML = 0;
  firstval =0;
  resVal = 0;
  op1 = "";
}

function IsDecimal(){
alert(document.getElementById('display').innerHTML.indexOf("."));
  if(document.getElementById('display').innerHTML.indexOf(".") > -1) {
    return true;
  }
  return false;
}

function NumNegative(){
  if(parseInt(document.getElementById('display').innerHTML.indexOf("-")) > -1) {
      document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.replace(/-/g, "");
  } else {
      document.getElementById('display').innerHTML = "-" + document.getElementById('display').innerHTML;
  }
}
