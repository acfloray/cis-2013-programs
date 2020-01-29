var floatMiles, floatGallons, floatMpg;
     floatMiles = parseFloatPrompt("Enter miles driven");
     floatGallons = parseFloatPrompt("Enter gallons of gas used");
     floatMpg = floatMiles/floatGallons;
     alert("Miles per gallon = " + floatMpg);