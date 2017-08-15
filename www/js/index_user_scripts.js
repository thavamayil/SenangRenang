/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  Create Account */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#createaccount"); 
         return false;
    });
    
        /* button  .uib_w_26 */
    
    
        /* button  .uib_w_42 */
    $(document).on("click", ".uib_w_42", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Swimming Info */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         /*global activate_page */
         activate_page("#SwimmingInfo"); 
         return false;
    });
    
        /* button  Feedback Form */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_page */
         activate_page("#FeedbackForm"); 
         return false;
    });
    
        /* button  Location Map */
    $(document).on("click", ".uib_w_30", function(evt)
    {
         /*global activate_page */
         activate_page("#LocationMap"); 
         return false;
    });
    
        /* button  Tutorial Videos */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /*global activate_page */
         activate_page("#TutorialVideos"); 
         return false;
    });
    
        /* button  Charts */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#Charts"); 
         return false;
    });
    
        /* button  Others */
    $(document).on("click", ".uib_w_33", function(evt)
    {
         /*global activate_page */
         activate_page("#Others"); 
         return false;
    });
    
        /* button  Logout */
    
    
        /* button  .uib_w_8 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_19 */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_44", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_46", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_48", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_50", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_52", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Login */
    
    
        /* button  Login */
    
    
        /* button  .uib_w_26 */
    
    
        /* button  Login */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
        /* button  Logout */
    $(document).on("click", ".uib_w_26", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_27 */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /*global activate_page */
         activate_page("#dashboard"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
