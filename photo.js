var tok = ' 	c0397e1ad5be4452b3625d8d20e543de', // я уже давал ссылку чуть выше
   username = 'xenia_zefirka', // имя пользователя
   kolichestvo = 4;

$.ajax({ // первый ajax запрос возвратит нам ID пользователя
 url: 'https://api.instagram.com/v1/users/search',
 dataType: 'jsonp',
 type: 'GET',
 data: {access_token: tok, q: username}, // по сути это просто поиск пользователя по его имени
 success: function(result){
   console.log(result);
   $.ajax({
     url: 'https://api.instagram.com/v1/users/' + result.data[0].id + '/media/recent', // указываем ID первого найденного
     dataType: 'jsonp',
     type: 'GET',
     data: {access_token: tok, count: kolichestvo},
     success: function(result2){
       console.log(result2);
       for(x in result2.data){
         $('ul').append('<li><img src="'+result2.data[x].images.thumbnail.url+'"></li>');
       }
         },
     error: function(result2){
       console.log(result2);
     }
   });
 },
 error: function(result){
   console.log(result);
 }
});
