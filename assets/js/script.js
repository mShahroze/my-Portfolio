// Send Email Function

function sendEmail() {
  let name = $("#name");
  let email = $("#email");
  let subject = $("#subject");
  let body = $("#body");

  if (
    isNotEmpty(name) &&
    isNotEmpty(email) &&
    isNotEmpty(subject) &&
    isNotEmpty(body)
  ) {
    $.ajax({
      url: "/sendEmail.php",
      method: "POST",
      dataType: "json",
      data: {
        name: name.val(),
        email: email.val(),
        subject: subject.val(),
        body: body.val(),
      },
      success: function (response) {
        $("#myForm")[0].reset();
        $(".sent-notification").text("Message sent successfully.");
      },
    });
  }
  function isNotEmpty(caller) {
    if (caller.val() == "") {
      caller.success("border", "1px solid red");
      return false;
    } else {
      caller.css("border", "");
      return true;
    }
  }
}
