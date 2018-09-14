$("#add-btn").on("click", function (event) {
    event.preventDefault();

    var profilePhoto = document.getElementById('userPhoto').files[0];
    let file = new File([profilePhoto], profilePhoto, { "type": "image/jpg" });
    let reader = new FileReader();


    var newProfile = {
        profilePhoto: null,
        firstName: $("#userFName").val().trim(),
        lastName: $("#userLName").val().trim(),
        email: $("#userEmail").val().trim(),
        age: $("#userAge").val().trim(),
        password: $("#userPassword").val().trim(),
        gender: $("#userGender").val().trim(),
        occupation: $("#userOccupation").val().trim(),
        location: $("#userLocation").val().trim(),
        summary: $("#userSummary").val().trim(),
        interests: $("#userInterests").val().trim()
    };

    reader.onload = function () {
        newProfile.profilePhoto = reader.result;
        $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/new",
            data: JSON.stringify(newProfile)

        }).then(function () {

            window.location.href = "/world.html";
        });
    }
    reader.readAsDataURL(file);
});