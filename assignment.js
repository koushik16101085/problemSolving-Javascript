//https://github.com/koushik16101085/problemSolving-Javascript


//1.kilometerToMeter

function kilometerToMeter(kilometerValue) {
    var negativeValue = "This Message Is Error";
     if (kilometerValue < 0) {
        return negativeValue;
          }
     else{
         var meter =0;
         meter = kilometerValue * 1000;           //1 kilometer = 1000meter;
         
     }
     return meter;
     
 }
 var result = kilometerToMeter(5);                       //any kilometer positive or nagative;
 console.log(result);

 //2.budgetCalculator
function budgetCalculator(watch,phone,laptop) {
    var nagativeValue = "This Message Is Error";
    if (watch,phone,laptop<0) {
        return nagativeValue;                              //input nagative output "this message is error";
        
    }
    else{
        var totalPrice = watch*50 + phone*100 + laptop *500; // totalPrice added
    
    }
    return totalPrice;
    
}
var result = budgetCalculator(2,2,2);
console.log(result);


//3.hotelCost
function hotelCost(roomStayDays) {
    var nagativeValue = "This Message Is Error";
    if (roomStayDays < 0) {
        return nagativeValue;                            //input nagatvie: output "this message is error";
        
    }
    else {
        var stayDays = 0;
        if (roomStayDays <= 10) {
            stayDays = roomStayDays * 100;              //1st tenDays StayDays calculate
        }
        else if (roomStayDays <= 20) {
            var firstTenDays = 10 * 100;
            var remainingDays = roomStayDays - 10;
            var secondTenDays = remainingDays * 80;              //2nd ten days calculate
            stayDays = firstTenDays + secondTenDays;             //stayDays secondTenDays calculate

        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remainingDays = roomStayDays - 20;
            var moreTwentyDays = remainingDays * 50;                        //moreTwendays calculate
            stayDays = firstTenDays + secondTenDays + moreTwentyDays;         //stayDays moreTwentyDays Calculate    
        }
        return stayDays;


    }

}
var daysCount = hotelCost(21);
console.log(daysCount);



//4.megaFriend
function megaFriend(friendsName) {
    var emptyStringArray = "This Message Is Error";
    if (friendsName.length == 0) {               
        return emptyStringArray;                                         //input empty string and output "this message is error";

    }
    else {
        var maxFriendName = "";
        for (var i = 0; i < friendsName.length; i++) {
            if (maxFriendName.length < friendsName[i].length) {

                maxFriendName = friendsName[i];

            }

        }
        return maxFriendName;
    }
}
var result = megaFriend([ 'Koushik', 'Nehon', 'Shuvo', 'Rony', 'Nayeem', 'Tanvir','Bangladesh']);
console.log(result);