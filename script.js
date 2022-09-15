//minus button

let minus = document.getElementsByClassName("minus-btn");

for (let x = 0; x < minus.length; x++) {
  let oneminus = minus[x];
  oneminus.addEventListener("click", () => {
    if (oneminus.nextElementSibling.value > 0) {
      oneminus.nextElementSibling.value--;
      totalone();
      totaltwo();
      totalthree();
      Final();
    }
  });
}

//plus button

let plus = document.getElementsByClassName("plus-btn");

for (let x = 0; x < plus.length; x++) {
  let oneplus = plus[x];
  oneplus.addEventListener("click", () => {
    oneplus.previousElementSibling.value++;
    totalone();
    totaltwo();
    totalthree();
    Final();
  });
}
//like button

let like = document.getElementsByClassName("like");
for (let x = 0; x < like.length; x++) {
  let likebtn = like[x];
  likebtn.addEventListener("click", () => {
    if (likebtn.firstElementChild.style.color == "black") {
      likebtn.firstElementChild.style.color = "red";
    } else {
      likebtn.firstElementChild.style.color = "black";
    }
  });
}

let deletes = document.getElementsByClassName("delete");
for (x = 0; x < deletes.length; x++) {
  let del = deletes[x];
  del.addEventListener("click", function deletez() {
    del.parentElement.remove();
    totalone();
    totaltwo();
    totalthree();
    Final();
  });
}

//items price counter
/*  var items = document.getElementsByClassName("Item");
  var final = document.getElementById("finalPrice");
  function total (){
    let s = 0;

    for (let i = 0; i < items.length; i++) {
s=
s+
items[i].querySelector(".price").innertext*items[i].querySelector(".Quant").value

    }
    return (final.value = s);
  }
*/
var val = document.getElementsByClassName("Quant");
var prix = document.getElementsByClassName("price");

/*function oneprice() {
  let s = 0;
  for (let i = 0; i < val.length; i++) {
    s = s + val * prix;
  }
  return s;
}*/

function totalone() {
  var one = document.getElementById("one");
  var p1 = document.getElementById("p1");
  p1.innerHTML = Number(one.value) * 1379;
}

function totaltwo() {
  var two = document.getElementById("two");
  var p2 = document.getElementById("p2");
  p2.innerHTML = Number(two.value) * 176;
}

function totalthree() {
  var three = document.getElementById("three");
  var p3 = document.getElementById("p3");
  p3.innerHTML = Number(three.value) * 500;
}

function Final() {
  var bb = document.getElementById("p1");
  var cc = document.getElementById("p2");
  var dd = document.getElementById("p3");
  var finalprix = document.getElementById("finalPrice");
  finalprix.value =
    parseInt(bb.innerHTML) + parseInt(cc.innerHTML) + parseInt(dd.innerHTML);
}

/* function Final() {
  var finalprix = document.getElementById("finalPrice");
  let s = 0;
  let prices = document.getElementsByClassName("price");
  for (let i = 0; i < prices.length; i++) {
    s = s + Number(prices[i].innerHTML);
  }
  finalprix.value = s;
}
 */
