$( document ).ready(function() {
    console.log( "ready!" );
    var firstName, lastName, birthday;
    var data = [{first: 'Петро', last: 'Петренко', birthday: '1980-04-20', gender: 'male'},
    {first: 'Діма', last: 'Олегів', birthday: '1980-12-10', gender: 'male'}, {first: 'Дмитро', last: 'Дмитрович', birthday: '1980-07-15', gender: 'male'},
    {first: 'Вася', last: 'Петренко', birthday: '1980-01-20', gender: 'male'}, {first: 'Олег', last: 'Тут', birthday: '1988-06-20', gender: 'male'},
    {first: 'Петро', last: 'Кубрат', birthday: '1980-11-10', gender: 'male'}, {first: 'Місько', last: 'ПТарасович', birthday: '1980-01-20', gender: 'male'},
    {first: 'Петро', last: 'Петренко', birthday: '1966-06-11', gender: 'male'}, {first: 'Тарас', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Петро', last: 'Кубрат', birthday: '1980-01-20', gender: 'male'}, {first: 'Петро', last: 'Кубрат', birthday: '1980-01-20', gender: 'male'},
    {first: 'Валентин', last: 'Васько', birthday: '1991-11-06', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'}, {first: 'Валентин', last: 'Петренко', birthday: '1988-06-20', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Test', last: 'Кубрат', birthday: '1991-11-06', gender: 'male'}, {first: 'Петро', last: 'Гладкий', birthday: '1966-06-11', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Петро', last: 'Петренко', birthday: '1980-01-10', gender: 'male'}, {first: 'Петро', last: 'Стас', birthday: '1966-06-11', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Валентин', last: 'Петрович', birthday: '1980-01-20', gender: 'male'}, {first: 'Петро', last: 'Гладкий', birthday: '1980-01-20', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'}, {first: 'Валентин', last: 'Петренко', birthday: '1980-01-20', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Каха', last: 'Васька', birthday: '1991-11-06', gender: 'male'}, {first: 'Петро', last: 'Петрович', birthday: '1980-01-20', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'}, {first: 'Каха', last: 'Петренко', birthday: '1980-01-20', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Валентин', last: 'Петрович', birthday: '1991-11-06', gender: 'male'}, {first: 'Петро', last: 'Кубрат', birthday: '1980-01-20', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Петро', last: 'Гладкий', birthday: '1980-01-20', gender: 'male'}, {first: 'Андрій', last: 'Петренко', birthday: '1966-06-11', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Каха', last: 'Петренко', birthday: '1991-11-06', gender: 'male'}, {first: 'Петро', last: 'Петрович', birthday: '1966-06-11', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Валентин', last: 'Маша', birthday: '1966-06-11', gender: 'male'}, {first: 'Валентин', last: 'Гладкий', birthday: '1988-06-20', gender: 'male'}, {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},    {first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},{first: 'Петро', last: 'Петренко', birthday: '1980-01-20', gender: 'male'},
    {first: 'Петро', last: 'Гладкий', birthday: '1980-01-20', gender: 'male'}, {first: 'Каха', last: 'Петренко', birthday: '1988-06-20', gender: 'male'},
    {first: 'Валентин', last: 'Петренко', birthday: '1966-06-11', gender: 'male'}, {first: 'Петро', last: 'Петрович', birthday: '1988-06-20', gender: 'male'}];

    console.log("data = " + data.length);

    //displaying
    $('#table_id').DataTable( {
    data: data,
    columns: [
            { data: 'first' },
            { data: 'last' },
            { data: 'birthday' }
        ]
    });
    /*$.each( data, function(key, params){
         $('#table_id').append("<tr><td>" + params.first + "</td><td>" + params.last + "</td><td>" + params.birthday + "</td></tr>");
    });*/

    //pagination
    if( data.length < 10){
        $('#table_id').DataTable({
            paging: false
        });
    };


    /*alert
    $("#table_id tbody tr").click(function(){
        //var firstName = $(this).find('.sorting_1').text();
        var firstName = $(this).find('.sorting_1').text();
        var lastName = $(this).find('td + td').html();
        var birthday = $(this).find('td + td + td').html();
        var info = { info : firstName + ', ' + lastName + ', ' + birthday };

        alert(info.info);
    });

    //width
    var width = $(window).width();
    $(window).resize(function(){
       if($(this).width() != width){
          width = $(this).width();
           if(width < 800)
           {
                var lastTr = $('table#table_id tr td:last-child');
                lastTr.css({"dispay" : "none", "width" : "0 !important"});
           }
       }
    });*/

    //init ui popap
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 500
      },
      hide: {
        effect: "explode",
        duration: 300
      },
      beforeClose: function (event, ui) {
            $("#dialog p").empty();
        }
    });
 
    $( document ).on('click touchstart', '#table_id tbody tr', function() {
      $( "#dialog" ).dialog( "open" );
      firstName = $(this).find('.sorting_1').text();
      lastName = $(this).find('td + td').html();
      birthday = $(this).find('td + td + td').html();
      $.each( data, function(key, params){
        if (params.first === firstName && params.last === lastName && params.birthday === birthday){
            gender = params.gender;
            first = params.first;
            last = params.last;
            console.log(gender, first, last);
        }
      });
      $('#dialog p').append(first + ', ' + last + ', ' + birthday + ', ' + gender);
    });

    //init table
    $('#table_id').DataTable();
});