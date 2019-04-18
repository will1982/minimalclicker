// Licensed under a custom ISC License- See LICENSE.txt attached with this software or visit https://galactose.neocities.org/license.html
//Core functions
function cookieClick(number){
    cookies = cookies + number;
document.getElementById("cookies").innerHTML = cookies;};

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


//Buy Functions
function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
		pps= pps + 0.1;
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
	document.getElementById('pps').innerHTML = prettify(pps);
};

window.setInterval(function(){

cookieClick(cursors);

}, 10000);
