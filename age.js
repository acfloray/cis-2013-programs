var floatAge, floatDays, intWeeks, floatMonths, intFortnights;  //called variables
    floatAge = parseFloat(prompt("Enter age in years"));
    floatDays = parseFloat(floatAge * 365);
    floatMonths = parseFloat(floatAge * 12);
    intWeeks = parseFloat(floatDays / 12);
    intFortnights = parseFloat(floatDays / 14);
    alert("Age in years=" + floatAge + " " + "Age in days=" + floatDays + " " + "Age in months=" + floatMonths + " " + "Age in weeks=" + intWeeks + " " + "Age in fortnights=" + intFortnights);