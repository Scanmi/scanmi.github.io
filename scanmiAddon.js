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

  // эксель таблица массива справочника

