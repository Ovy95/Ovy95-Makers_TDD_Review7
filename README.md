# Ovy95-Makers_TDD_Review7

Makers Process review to help grow a better TDD process.
Friday 16th April.


Achool reports

0-49 = red 
50-74 = amber 
75-100 = green

string of , values 
 
0-100 

"1,10,45,60,80,100" --> "Green: 2\nAmber: 1\nRed: 3

Input || Output 
<!-- First tests  -->
"10"       "Red: 1"
"52"      "Amber: 1"
"75"      "Green: 1"

<!-- 2nd tests -->
"4,57"  || "Amber: 1\nRed: 1"

<!-- 3rd tests  -->
"9, 60, 80"  || Green: 1\nAmber: 1\nRed: 1



"1,10,45,60,80,100" --> "Green: 2\nAmber: 1\nRed: 3


Edge cases 
If wrong data type int for example 
ArgumentError "Input must be a comma-separated string"