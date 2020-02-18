AJAXRWQ = function(type, url, data, sucess, isasync) {
  if (isasync === undefined) {
    isasync = true;
  }
  $.ajax({
    type: type,
    url: "http://localhost:8081" + url,
    //url: "http://192.168.43.18:8081" + url,
    beforeSend: function() {
      console.log("beforeSend");
    },
    data: data,
    dataType: "json",
    xhrFields: {
      withCredentials: false
    },
    crossDomain: true,
    async: isasync
    //jsonpCallback: "jsonpCallback",//服务端用于接收callback调用的function名的参数
  })
    .done(data => {
      sucess(data);
    })
    .fail(error => {
      console.log("fail");
    });
};
