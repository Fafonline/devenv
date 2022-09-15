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


baseDate = addDays(Date.now(), 31);
baseDate_plus_one_week = addDays(baseDate, 7);
baseDate_plus_one_month = addDays(baseDate, 31);
baseDate_six_mounth_in_past = addDays(baseDate, -182);
baseDate_six_mounth_in_future = addDays(baseDate, 182);
postman.setGlobalVariable("baseDate", formatDate(baseDate))
postman.setGlobalVariable("baseDate_plus_one_week", formatDate(baseDate_plus_one_week));
postman.setGlobalVariable("baseDate_plus_one_month", formatDate(baseDate_plus_one_month));
postman.setGlobalVariable("baseDate_six_mounth_in_past", formatDate(baseDate_six_mounth_in_past));
postman.setGlobalVariable("baseDate_six_mounth_in_future", formatDate(baseDate_six_mounth_in_future));
var stays = generateStayDate(10);
var sellStartDate = stays[0]['start'];
var sellEndDate = stays[0]['end'];
postman.setGlobalVariable("sellStartDate", sellStartDate);
postman.setGlobalVariable("sellEndDate", sellEndDate);

// Share
var staysForShare = generateOverlappingDays(3);

console.log(staysForShare)

var sellStartDate_0 = staysForShare[0]['start'];
var sellEndDate_0 = staysForShare[0]['end'];

var sellStartDate_1 = staysForShare[1]['start'];
var sellEndDate_1 = staysForShare[1]['end'];

var sellStartDate_2 = staysForShare[2]['start'];
var sellEndDate_2 = staysForShare[2]['end'];

postman.setGlobalVariable("staysForShare", staysForShare);

postman.setGlobalVariable("sellStartDate_0", sellStartDate_0);
postman.setGlobalVariable("sellEndDate_0", sellEndDate_0);

postman.setGlobalVariable("sellStartDate_1", sellStartDate_1);
postman.setGlobalVariable("sellEndDate_1", sellEndDate_1);

postman.setGlobalVariable("sellStartDate_2", sellStartDate_2);
postman.setGlobalVariable("sellEndDate_2", sellEndDate_2);

