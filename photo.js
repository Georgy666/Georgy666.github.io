console.log("Hello, JavaScript");
// var tok = 'c0397e1ad5be4452b3625d8d20e543de', // я уже давал ссылку чуть выше
//     userid = 1362124742, // ID пользователя, можно выкопать в исходном HTML, можно использовать спец. сервисы либо просто смотрите следующий пример :)
//     kolichestvo = 4; // ну это понятно - сколько фоток хотим вывести
//
// $.ajax({
// 	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
// 	dataType: 'jsonp',
// 	type: 'GET',
// 	data: {access_token: tok, count: kolichestvo}, // передаем параметры, которые мы указывали выше
// 	success: function(result){
//  		console.log(result);
// 		for( x in result.data ){
// 			$('ul').append('<li><img src="'+result.data[x].images.low_resolution.url+'"></li>'); result.data[x].images.low_resolution.url;
// 			// result.data[x].images.thumbnail.url - URL картинки 150х150
// 			// result.data[x].images.standard_resolution.url - URL картинки 612х612
// 			// result.data[x].link - URL страницы данного поста в Инстаграм
// 		}
// 	},
// 	error: function(result){
// 		console.log(result); // пишем в консоль об ошибках
// 	}
// });
