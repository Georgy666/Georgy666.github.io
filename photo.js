$.fn.instalist = function(params) {
    var userid = "1409655114";
    var access_token = "1409655114.c0397e1.fdc3041447634bdf8b3a88f5eff3c3d0";
    var startUrl = '';
    var prevUrl = '';
    var isFirst = true;

    this.getList = function(page){
        var url = '';
        if( (!startUrl || startUrl == '' || startUrl == undefined) && isFirst == true ){
            url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + access_token;
        } else{ url = startUrl; }
        isFirst = false;
        if(page == 'first'){url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + access_token;}
        if(page == 'prev'){
            if(prevUrl && prevUrl != '' && prevUrl != undefined){ url = prevUrl; }
            else{ url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + access_token; }
        }
        return new Promise(function(resolve, reject) {
            if(url != undefined){
                var list = $.ajax({type: 'GET', url: url, dataType: 'jsonp', cache: false});
                list.done(function(data){ prevUrl = startUrl; startUrl = data.pagination.next_url; resolve(data.data); });
                list.fail(function(data){ reject(data); });
            } else{ reject(false); }
        });
    }
    return this;
}


var instagram = $(document).instalist({
  userid: 'a17209b4be32219f92a5e6ca71257d5e', //впишите ваш user ID
  access_token: '239318235.1799ed3.6ac8632448004727b3ec085ae169eep1', //а сюда access token
});


var instagram = $(document).instalist({
  userid: 'a17209b4be32219f92a5e6ca71257d5e', //впишите ваш user ID
  access_token: '239318235.1799ed3.6ac8632448004727b3ec085ae169eep1', //а сюда access token
});

var list = instagram.getList();
list.then(
  response => printPhoto(response),
  error => showError(error)
);

var list = instagram.getList();
list.then(
  response => printPhoto(response),
  error => showError(error)
);










// jQuery(function($) {
//   var tok = '1409655114.c0397e1.fdc3041447634bdf8b3a88f5eff3c3d0', // я уже давал ссылку чуть выше
//     userid = 1409655114, // ID пользователя, можно выкопать в исходном HTML, можно использовать спец. сервисы либо просто смотрите следующий пример :)
//     kolichestvo = 10; // ну это понятно - сколько фоток хотим вывести
//
//     $.ajax({
//     	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
//     	dataType: 'jsonp',
//     	type: 'GET',
//     	data: {access_token: tok, count: kolichestvo}, // передаем параметры, которые мы указывали выше
//     	success: function(result){
//      		console.log(result);
//     		for( x in result.data ){
//     			$('ul').append('<li><img src="'+result.data[x].images.thumbnail.url+'"></li>');
//      // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
//     			// result.data[x].images.thumbnail.url - URL картинки 150х150
//     			// result.data[x].images.standard_resolution.url - URL картинки 612х612
//     			// result.data[x].link - URL страницы данного поста в Инстаграм
//     		}
//     	},
//     	error: function(result){
//     		console.log(result); // пишем в консоль об ошибках
//     	}
//     });
// });
