(function() {

  $(function () {

    function callAPI1() {
      $.get("http://jservice.io/api/clues?category=42", function(data){

        $('#category1').html((data[0].category.title).toUpperCase());
      })
    }

    function callAPI2() {
      $.get("http://jservice.io/api/clues?category=136", function(data){
        $('#category2').html((data[0].category.title).toUpperCase());
      })
    }

    function callAPI3() {
      $.get("http://jservice.io/api/clues?category=1114", function(data){
        $('#category3').html((data[0].category.title).toUpperCase());
      })
    }



   callAPI1();
   callAPI2();
   callAPI3();
   //

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  let game_points;
  let game_answer;
  let current_score = 0;

   $('#category1-button').click(function () {
     $.get("http://jservice.io/api/clues?category=42", function(data){
       let indexNumber = getRandomInt(0,100);
       console.log(indexNumber);
       $('#question').html(data[indexNumber].question)
       $('#category').html(data[indexNumber].category.title);
       $('#value').html(game_points = data[indexNumber].value);
       game_answer = data[indexNumber].answer;
       console.log(game_answer);

     })

   })

   $('#category2-button').click(function () {
     $.get("http://jservice.io/api/clues?category=136", function(data){
       let indexNumber = getRandomInt(0,100);
       console.log(indexNumber);
       $('#question').html(data[indexNumber].question)
       $('#category').html(data[indexNumber].category.title);
       $('#value').html(game_points = data[indexNumber].value);
       game_answer = data[indexNumber].answer;
       console.log(game_answer);

     })

   })

   $('#category3-button').click(function () {
     $.get("http://jservice.io/api/clues?category=1114", function(data){
       let indexNumber = getRandomInt(0,100);
       console.log(indexNumber);
       $('#question').html(data[indexNumber].question)
       $('#category').html(data[indexNumber].category.title);
       $('#value').html(game_points = data[indexNumber].value);
       game_answer = data[indexNumber].answer;
       console.log(game_answer);

     })

   })

   $('#submit-button').click(function () {

     let user_answer = $('#user-answer').val();
     console.log(user_answer);
     $('#user-answer').val('');
     $('#question').html('');
     $('#category').html('');
     $('#value').html('');

     if (user_answer.toLowerCase() === game_answer.toLowerCase()) {
       current_score += game_points;
       $('#score').html(current_score);
       console.log(current_score);
       $('#correct_answer').html("Correct!")

     } else {
       $('#correct_answer').html("Incorrect! The correct answer is: " + game_answer)
     }


   })







    })



  })()

   //   console.log(user_answer);
   //
   //   user_answer_elem.val('')


    // let answer;
    // let user_answer_elem = $('#user-answer');
    // let score = $('#score')
    // let game_points;
    //
    // function callAPI() {
    //   $.get("http://jservice.io/api/random", function(data){
    //         $('#question').html(data[0].question);
    //         $('#category').html(data[0].category.title);
    //         $('#points').html(game_points = data[0].value);
    //         answer = data[0].answer;
    //         console.log(answer);
    //   })
    // }
    //
    // callAPI();
    //
    // function getText() {
    //   return user_answer_elem.val();
    // }
    //
    //
    // $('#submit-button').click(function () {
    //   user_answer = getText()
    //   console.log(user_answer);
    //
    //   user_answer_elem.val('')
    //
    //   user_answer_case_insensitive = new RegExp(user_answer, 'i')
    //
    //   if (user_answer_case_insensitive.test(answer)) {
    //     score.html(parseInt(score.html()) + parseInt(game_points));
    //   }
    //
    //   callAPI();
    // })
