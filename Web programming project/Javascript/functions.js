function calcDays(currentDate,month,day,year,time)
{
   currentDate = currentDate.getTime();
   var newYear = new Date(month+day+year+time);
   newYear = newYear.getTime();
   var daysLeft = newYear-currentDate;
   daysLeft = (daysLeft/(1000*60*60*24));
   return daysLeft;
}