function readImage(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    $.ajax({
      url: "https://zish-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/1eaa02ab-c49d-4d28-89a6-3ad12b526089/classify/iterations/Iteration1/image",
      data: reader.result,
      processData: false,
      contentType: "application/octet-stream",
      headers: {
        'Prediction-key': '0108800af05c418a9681af7b8b5dd5ab'
      },
      type: 'POST',
      body: file,
      success: function(response) {
        var result = response["Predictions"];
        alert('Detection is successful.');
      },
      error: function(error) {
        alert('Please upload an image file.');
      }
    });
  }
  reader.readAsArrayBuffer(file);
}