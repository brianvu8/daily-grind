myDate = new Date();
myDate = myDate.getDay();

switch(myDate){

	case 0:
    	today = "Sunday";
	break;

   case 2:
    	today = "Tuesday";
	break;



	default:
  	today = "Something went wrong"


}

alert(today);
