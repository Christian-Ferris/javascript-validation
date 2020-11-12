$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName: {
                required: true
            },

            grade: {
                required: true,
                min: 5,
                max: 8,
                digits: true
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName: {
                required: "Please enter a name"
            },

            grade: {
                required: "Please enter a grade level",
                min: "Enter a grade between 5 and 8",
                max: "Enter a grade between 5 and 8",
                digits: "Only whole numbers"
            }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var firstName = $("#firstName").val();
        var grade = $("#grade").val();
        grade = parseInt(grade);
        $("#message").text("You have registered " + firstName + " for grade " + grade + " camp!");
    }



});