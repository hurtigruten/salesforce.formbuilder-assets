//Retrieve the URL 
jQuery(document).ready(function() {
    setTimeout(function() {
      var parentFrame = window.location;
      var desiredControl = loader.getEngine().getDocument().getControlsList().find(function(control) { 
        return control.id === 2803198; // the desired control id
      });
      desiredControl.setValue({value: parentFrame.href});
      console.log('custom static resource loaded');
    }, 2000);
  });
