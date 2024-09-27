// initializing home score variable to the html element
let homeScore = document.getElementById("homeScoreBoard")
// home score buttons
let addHomeOne = document.getElementById("homeOnePoint")
let addHomeTwo = document.getElementById("homeTwoPoint")
let addHomeThree = document.getElementById("homeThreePoint")

// guest score variable
let guestScore = document.getElementById("guestScoreboard")
// guest score buttons
let addGuestOne = document.getElementById("guestOnePoint")
let addGuestTwo = document.getElementById("guestTwoPoint")
let addGuestThree = document.getElementById("guestThreePoint")

// initializing home and guest points
let homePoints = 0
let guestPoints = 0
// parsing 
function onePoint(points){
    points += 1
    return points
}
function twoPoint(points){
    points += 2
    return points
}

function threePoint(points){
    points += 3
    return points
}

addHomeOne.addEventListener("click", ()=>{
    homePoints = onePoint(homePoints)
    homeScore.textContent = homePoints;
    updateLeadingTeam()
});

addHomeTwo.addEventListener("click", ()=>{
    homePoints = twoPoint(homePoints)
    homeScore.textContent = homePoints;
    updateLeadingTeam()
});

addHomeThree.addEventListener("click", ()=>{
    homePoints = threePoint(homePoints)
    homeScore.textContent = homePoints;
    updateLeadingTeam()
});

addGuestOne.addEventListener("click", ()=>{
    guestPoints = onePoint(guestPoints)
    guestScore.textContent = guestPoints;
    updateLeadingTeam()
});

addGuestTwo.addEventListener("click", ()=>{
    guestPoints = twoPoint(guestPoints)
    guestScore.textContent = guestPoints;
    updateLeadingTeam()
});

addGuestThree.addEventListener("click", ()=>{
    guestPoints = threePoint(guestPoints)
    guestScore.textContent = guestPoints;
    updateLeadingTeam()
});

// The html element for placing the leading team
let leadTeam = document.getElementById("leading");
// logic to return the leading team
function updateLeadingTeam(){
    if (homePoints > guestPoints){
        leadTeam.textContent = `Golden Bulls are winning by ${homePoints - guestPoints} points.`
        return leadTeam.textContent;
    }else if(homePoints < guestPoints){
        leadTeam.textContent = `Visitors are leading by ${guestPoints - homePoints} points.`
        return leadTeam.textContent
    }
    else{
        leadTeam.textContent = `The game is tied`
    }
}
