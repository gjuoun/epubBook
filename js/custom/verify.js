let expireDate = localStorage.getItem("expireDate")
let today = new Date()
let todayTime = today.getTime()


// verify the cookie expire date
if (!expireDate || todayTime > expireDate){

var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox1ee2d=["\x6F\x76\x65\x72\x63\x6F\x6D\x65\x72\x73","\x48\x69\x6E\x74\x3A\x20\x47\x6F\x64\x20\x4E\x65\x65\x64\x73\x20\x74\x68\x65\x20\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x5F\x20\x28\x31\x30\x20\x6C\x65\x74\x74\x65\x72\x73\x2C\x20\x61\x6C\x6C\x20\x6C\x6F\x77\x65\x72\x20\x63\x61\x73\x65\x29\x0D\x0A\x20\x20"];
let password=__Ox1ee2d[0];let input=prompt(__Ox1ee2d[1])
  // let input = prompt(`Hint: God Needs the _________ (10 letters, all lower case)
  // `);
  if (password !== input) {
    alert('May be you need a hymn book for this question');
    window.location.href = "./"
  }
  else {
    //set expire date to 7 days later
    today.setDate(today.getDate() + 7)
    localStorage.setItem("expireDate", today.getTime())
  }
}



