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
function generate_stay_dates() {
    console.log("Generate stay date");
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

    //Continuous Stay
    var staysForContinuousStay = generateContinuousDays(3);

    console.log("Continuous Stay dates")
    console.log(staysForContinuousStay)

    console.log("Share dates")
    console.log(staysForShare)

    var sellStartDate_0 = staysForShare[0]['start'];
    var sellEndDate_0 = staysForShare[0]['end'];

    var sellStartDate_1 = staysForShare[1]['start'];
    var sellEndDate_1 = staysForShare[1]['end'];

    var sellStartDate_2 = staysForShare[2]['start'];
    var sellEndDate_2 = staysForShare[2]['end'];

    var cs_sellStartDate_cf1 = staysForContinuousStay[0]['start'];
    var cs_sellEndDate_cf1 = staysForContinuousStay[0]['end'];
    var cs_sellStartDate_cf1_extended = formatDate(addDays(cs_sellStartDate_cf1, -1))
    var cs_sellEndDate_cf1_extended = formatDate(addDays(cs_sellEndDate_cf1, 1))



    var cs_sellStartDate_cf2 = staysForContinuousStay[1]['start'];
    var cs_sellEndDate_cf2 = staysForContinuousStay[1]['end'];
    var cs_sellEndDate_cf2_extended = formatDate(addDays(cs_sellEndDate_cf2, 1))

    var cs_sellStartDate_cf3 = staysForContinuousStay[2]['start'];
    var cs_sellEndDate_cf3 = staysForContinuousStay[2]['end'];
    var cs_sellEndDate_cf3_extended = formatDate(addDays(cs_sellEndDate_cf3, 1))


    postman.setGlobalVariable("staysForShare", staysForShare);

    postman.setGlobalVariable("sellStartDate_0", sellStartDate_0);
    postman.setGlobalVariable("sellEndDate_0", sellEndDate_0);

    postman.setGlobalVariable("sellStartDate_1", sellStartDate_1);
    postman.setGlobalVariable("sellEndDate_1", sellEndDate_1);

    postman.setGlobalVariable("sellStartDate_2", sellStartDate_2);
    postman.setGlobalVariable("sellEndDate_2", sellEndDate_2);


    postman.setGlobalVariable("cs_sellStartDate_cf1", cs_sellStartDate_cf1);
    postman.setGlobalVariable("cs_sellEndDate_cf1", cs_sellEndDate_cf1);
    postman.setGlobalVariable("cs_sellStartDate_cf1_extended", cs_sellStartDate_cf1_extended);
    postman.setGlobalVariable("cs_sellEndDate_cf1_extended", cs_sellEndDate_cf1_extended);

    postman.setGlobalVariable("cs_sellStartDate_cf2", cs_sellStartDate_cf2);
    postman.setGlobalVariable("cs_sellEndDate_cf2", cs_sellEndDate_cf2);
    postman.setGlobalVariable("cs_sellEndDate_cf2_extended", cs_sellEndDate_cf2_extended);

    postman.setGlobalVariable("cs_sellStartDate_cf3", cs_sellStartDate_cf3);
    postman.setGlobalVariable("cs_sellEndDate_cf3", cs_sellEndDate_cf3);
    postman.setGlobalVariable("cs_sellEndDate_cf3_extended", cs_sellEndDate_cf3_extended);
}

function test_check_image_status(status) {
    var payload = JSON.parse(responseBody);
    let imageStatus = payload['data']['hotelReservation']['imageStatus'];
    pm.test("Image status=" + imageStatus, function () {
        pm.expect(imageStatus).to.equal(status)
    });
}

function test_check_date() {
    var payload = JSON.parse(responseBody);
    let startDate = payload['data']['hotelReservation']['segments'][0]['offer']['productUses'].find(productUses => productUses.id === 1)['period']['start'];
    let endDate = payload['data']['hotelReservation']['segments'][0]['offer']['productUses'].find(productUses => productUses.id === 1)['period']['end'];
    pm.test("Start date=" + startDate + "|  EndDate=" + endDate);
}

function test_check_response_code(code) {
    var payload = JSON.parse(responseBody);
    pm.test("response code " + code + " is OK", function () {
        pm.response.to.have.status(code);
    });
}

function test_get_cf_number(cfNumber_var) {
    var payload = JSON.parse(responseBody);
    let cfNumber = payload['data']['hotelReservation']['reservationIds']['cfNumber']
    postman.setGlobalVariable(cfNumber_var, cfNumber);
    pm.test("CfNumber=" + cfNumber)
}

function test_get_kink_id(link_id_var) {
    var payload = JSON.parse(responseBody);
    let linkId = payload['data']['hotelLinkReservation']['link']['id']
    postman.setGlobalVariable(link_id_var, linkId);
    pm.test("LinkId=" + linkId)
}


function test_link_broken() {
    var payload = JSON.parse(responseBody);

    linkId = payload['data']['hotelLinkReservation']['cfNumbers'];

    //Add test
    pm.test("Check continuous stay broken", function () {
        pm.response.to.have.status(200);
        pm.expect(linkId).to.empty
    });
}

function test_check_warning(present, code = 0) {
    var payload = JSON.parse(responseBody);
    if (present == true) {
        pm.test("Check Warnings present", function () {
            let warnings = payload['warnings']
            if (warnings) {
                warning = warnings.find(warning => warning === code)
                if (warning) {
                    pm.test("Continuous Stay warning:" + warning['title'])
                    pm.expect(warning['code']).to.equal(code)
                }
            }
            else {
                pm.expect.fail("No warning found");
            }
        });
    }
    else {
        pm.test("Check no Warning", function () {
            let warnings = payload['warnings']
            if (warnings) {
                pm.expect.fail("Warnings founds:" + warnings)
            }
            else {
            }
        });
    }
}

