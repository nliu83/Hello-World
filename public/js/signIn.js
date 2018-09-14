$(document).ready(function () {
    $(document).on("submit", "#signInForm", function (ev) {
        ev.preventDefault();

        //sign in values
        let email = $("#email").val().trim();
        let pass = $("#password").val().trim();

        if (email && pass) {

            $.get("/api/signIn",{email:email, password: pass})
            .then(function(res){
                if(res){
                    console.log(res);
                    //show sweet alrert welcoming user and redirect to world.html
                }
                else{
                    //show sweet alert invalid user
                }

            });

        }
        else {
            console.log("Don't leave blank fields");
            //show sweet alert don't leave blank fields
            
        }
    });
});