// моя проверка deviceID почему-то выдаёт только groupID
  
navigator.mediaDevices.enumerateDevices().then(function (devices) {
  console.log(devices);

}).catch(function (err) {
  console.log(err);
});



if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("Browser doesn't support mediaDevices and/or numerateDevices");
}else{
console.log("Browser supports mediaDevices and numerateDevices")
}

navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
devices.forEach(function(device) {
  console.log(device.kind + ": " + device.label +
              " id = " + device.deviceId);
});
})

// перезагрузка (обновление) страницы (пока со сбросом результата)

function reloadPage(){
  location.reload();
  };

  // поиск по массиву справочника

  function tableSearch() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('my-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    
if (phrase.value == false){
  console.log("yes");

  } 



    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "table-row"; // было "" вместо "table-row"
            
        } else {
            table.rows[i].style.display = "none";
        }

    }
}


