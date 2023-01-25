function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}
function addDays(dateIn, days) {
    var dateOut = new Date(dateIn);
    dateOut.setDate(dateOut.getDate() + days);
    return dateOut;
}

function subDays(dateIn, days) {
    var dateOut = new Date(dateIn);
    dateOut.setDate(dateOut.getDate() - days);
    return dateOut;
}

function generateStayDate(numberOfStay = 1, horizonInDay = 31, maxStayLength = 7) {
    var stays = [];
    for (let i = 0; i < numberOfStay; i++) {
        var stay = {};
        stay["start"] = formatDate(addDays(Date.now(), 1 + horizonInDay + ((Math.random() - 0.5) * 2) * horizonInDay));
        stayLength = (Math.random() * maxStayLength) + 1;
        stay["end"] = formatDate(addDays(stay["start"], stayLength));
        stays.push(stay);
    }
    return stays;
}

function generateOverlappingDays(numberOfStay = 2, horizonInDay = 31, maxStayLength = 7) {
    var stays = [];
    var shareStartDay = formatDate(addDays(Date.now(), 1 + horizonInDay + ((Math.random() - 0.5) * 2) * horizonInDay));
    console.log(shareStartDay)
    var lastStayDate = shareStartDay;
    for (let i = 0; i < numberOfStay; i++) {
        var stay = {};
        stay["start"] = lastStayDate;
        stayLength = (Math.random() * maxStayLength) + 1;
        stay["end"] = formatDate(addDays(stay["start"], stayLength));
        stays.push(stay);
        lastStayDate = formatDate(subDays(stay["end"], 1))
    }
    return stays
}

function generateContinuousDays(numberOfStay = 2, horizonInDay = 31, maxStayLength = 7) {
    var stays = [];
    var continuousStayStartDay = formatDate(addDays(Date.now(), 1 + horizonInDay + ((Math.random() - 0.5) * 2) * horizonInDay));
    console.log(continuousStayStartDay)
    var lastStayDate = continuousStayStartDay;
    for (let i = 0; i < numberOfStay; i++) {
        var stay = {};
        stay["start"] = lastStayDate;
        stayLength = (Math.random() * maxStayLength) + 1;
        stay["end"] = formatDate(addDays(stay["start"], stayLength));
        stays.push(stay);
        lastStayDate = stay["end"]
    }
    return stays
}

baseDate = addDays(Date.now(), 31);
baseDate_plus_one_week = addDays(baseDate, 7);
baseDate_plus_one_month = addDays(baseDate, 31);
baseDate_six_mounth_in_past = addDays(baseDate, -182);
baseDate_six_mounth_in_future = addDays(baseDate, 182);
var stays = generateStayDate(10);
var sellStartDate = stays[0]['start'];
var sellEndDate = stays[0]['end'];

// Share
var staysForShare = generateOverlappingDays(3);
var staysForContinuousStay = generateContinuousDays(3);

console.log(staysForContinuousStay)

// console.log(staysForShare)