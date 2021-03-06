
    //business logic
    function Wellnessupdate(name, grateful, challenge) {
      this.name = name;
      this.grateful = grateful;
      this.challenge = challenge;
      this.wellnessActivitiesToTrack=[];
    }

    function Wellnessactivitytotrack(wellnessactivity, time) {
      this.wellnessactivity = wellnessactivity;
      this.time = time;
    }

    Wellnessupdate.prototype.fullSummary = function() {
      return this.name +"'s wellness update";
    }

    Wellnessactivitytotrack.prototype.fullDetails = function() {
      return "Wellness activity: "+ this.wellnessactivity + ". Number of days done: " + this.time;
    }

    function resetFields() {
        $("input#new-name").val("");
        $("input#new-grateful").val("");
        $("input#new-challenge").val("");
        $("input.new-wellnessactivity").val("");
        $("input.new-time").val("");
    }

    // user interface logic

    //for viewing menu
    jQuery(document).ready(function(){
  $(".clickable").click(function(){
    $("#activitiesshowing").slideToggle(4000);
    $("#activitieshidden").slideToggle();
  });
});

//alert button for pick-me-up
jQuery(document).ready(function(){
$("button#view").click(function() {
    alert ("This too shall change.");
    alert ("Breathe In. Breathe Out. There, that is your only obligation in life, and you have fulfilled it.");
    prompt ("Please write an affirmation to yourself eg. 'I love me','I am grateful', 'I am hopeful'");
    alert("Here is the altar of my body becoming fluent in the closing of wounds. Look at healing, how it belongs here.- Tryphena Yeboah");
    });
  });

  //alert button for food for thought
  jQuery(document).ready(function(){
  $("button#thought").click(function() {
    alert ("O keep squeezing drops of the Sun || From your prayers and work and music || And from your companions' beautiful laughter|| And from the most insignificant movements || Of your own holy body. || Now, sweet one, || Be wise. || Cast all your votes for Dancing!");
      });
    });

  //for favourite color
  $(document).ready(function() {
         $("button#green").click(function() {
           $("body").removeClass();
           $("body").addClass("green-background");
         });

         $("button#yellow").click(function() {
           $("body").removeClass();
           $("body").addClass("yellow-background");
         });

         $("button#red").click(function() {
           $("body").removeClass();
           $("body").addClass("red-background");
         });
       });

//for displaying choices selected
    $(document).ready(function() {

      $("#add-wellnessActivityToTrack").click(function() {
        $("#new-wellnessActivityToTrack").append('<div class=new-wellnessActivityToTrack>'+

                                                    '<div class="form-group">'+
                                                      '<label for="new-wellnessactivity">Wellness Activity</label>'+
                                                      '<input type="text" class="form-control" id="new-wellnessactivity">'+
                                                    '</div>'+

                                                    '<div class="form-group">'+
                                                      '<label for="new-time">In the past week, how many days did you practise this activity?</label>'+
                                                      '<input type="text" class="form-control" id="new-time">'+
                                                    '</div>'+

                                                  '</div>');
      });

      $("form#new-wellnessTrackerForm").submit(function(event) {
        event.preventDefault();

        var inputtedName = $("input#new-name").val();
        var inputtedGrateful = $("input#new-grateful").val();
        var inputtedChallenge = $("input#new-challenge").val();
        var newWellnessupdate = new Wellnessupdate(inputtedName, inputtedGrateful, inputtedChallenge);

        $(".new-wellnessActivityToTrack").each(function() {
          var inputtedWellnessActivity = $(this).find("input.new-wellnessactivity").val();
          var inputtedTime = $(this).find("input.new-time").val();
          var newWellnessactivitytotrack = new Wellnessactivitytotrack(inputtedWellnessActivity, inputtedTime)
          newWellnessupdate.wellnessActivitiesToTrack.push(newWellnessactivitytotrack)
        });

        $("ol#wellnessDetails").append("<li><span class='wellnessupdate'>" + newWellnessupdate.fullSummary() + "</span></li>");

        $(".wellnessupdate").last().click(function() {
          $("#show-listofwellnessactivities").show();
          $("#show-listofwellnessactivities h4").text(newWellnessupdate.fullSummary());
          $(".nameResponse").text(newWellnessupdate.name);
          $(".gratefulResponse").text(newWellnessupdate.grateful);
          $(".challengeResponse").text(newWellnessupdate.challenge);
          $("ol#wellnessActivitiesToTrack").text("");
          newWellnessupdate.wellnessActivitiesToTrack.forEach(function(wellnessActivityToTrack) {
            $("ol#wellnessActivitiesToTrack").append("<li>" + wellnessActivityToTrack.fullDetails() + "</li>");
          });
        });

        resetFields();

      });
    });
