onload = function(){
    window.saveSubCat = [];
    window.parseData = [];
    window.saveData = {};
    window.buildSelect = [];
    window.flag = "";
    window.timestamp = new Date();
    window.link = new GoogleSheet(spreadsheetsId, apiKey, 'Category');
    window.option = "&range=Category!A2:Z";
    sendRequest(link.getLink(option));
}

function sendRequest(link) {
    $.get({
        url:link,
        success:function(response){
            //console.log(response.values);
            makeCategories(response.values);
            makeStructure(response.values);
        },
        error:function(err){
            console.log(err);
        }
    })
}

function makeCategories(response){
    var selectizeCategory = [];
    response.forEach(function(category, index){
        let key = category[0].replace(" ","")+"-Key"
        selectizeCategory.push({
            text: category[0],
            value: key
        })
        saveSubCat[key] = category.slice(1);
    })
    /** For category*/
    //console.log(selectizeCategory);
    makeSelectize('.selectize-category',selectizeCategory);
    makeSelectize('.selectize-category-result',selectizeCategory);
    stopLoader('.category-page-loader');
    /** For Sub-Category*/
}

function makeSelectize(htmlClass, selectizeData){
    var selectize = $(htmlClass)[0].selectize;
    selectize.clear();
    selectize.clearOptions();
    selectize.load(function(callback) {
        callback(selectizeData);
    });
}

function makeSubCategory(htmlClass, data) {
    var selectizeSubCat = [];
    data.forEach(function(subCat, index){
        selectizeSubCat.push({
            text: subCat,
            value: "key"+subCat.trim().replace(" ","")
        })
    })
    makeSelectize(htmlClass,selectizeSubCat);
    makeSelectize('.selectize-sub-category-result',selectizeSubCat);
}

function makeStructure(response) {
    let sheetVal = [];
    response.forEach(function(category, cIndex){
        let key = category[0].replace(" ","")+"-Key";
        let subArr = [];
        category.slice(1).forEach(function(subCat, sIndex){
            let keySub = "key"+subCat.trim().replace(" ","");
            subArr.push(keySub);
        })
        link = new GoogleSheet(spreadsheetsId, apiKey, key);
        option = "&range="+key+"!A2:Z";
        getCalcTitle(link.getLink(option), key);
    })
    stopLoader('.sub-category-page-loader');
    console.log(parseData);
}

function getCalcTitle(link, key){
    $.get({
        url:link,
        success:function(response){
           if(response.values) parseData[key] = makeCalcTitle(response.values,key);
           else parseData[key] = makeCalcTitle([],key);
        },
        error:function(err){
            console.log(err);
        }
    })
}

function makeCalcTitle(response, key){
    let object = [];
    response.forEach(function(value, index){
        if(!object[value[0]])   object[value[0]] = [];
        var ob = {};
        value.forEach(function (val,key) {
            if(key !== 0) {
                switch (key) {
                    case 1:
                        ob.top = val;
                        break;
                    case 2:
                        ob.middle = val;
                        break;
                    case 3:
                        ob.bottom = val;
                        break;
                }
            }
        });
        object[value[0]].push(ob);
    })
    return object;
}

function showTitle(){
    var html = {};
    var loopData = [saveData.subCat];
    var rand;
    if(parseData[saveData.category]['keyCustom']) loopData.push('keyCustom');

    loopData.forEach(function(subCat, sIndex){
        if(parseData[saveData.category][subCat] && parseData[saveData.category][subCat].length > 0){
            parseData[saveData.category][subCat].forEach(function(data, index){
                if(data.top && data.top != ""){
                    rand = randomNumber();
                    if(!html.top) html.top = "";
                           // html.top.count = ;
                            html.top += '<div class="item item-selected"><input id="xs-img-top-'+index+'" type="checkbox" name="xs-img-top-'+index+'" value="xs-img-top-'+index+'" /><label class="xs-img-hover img img'+rand+'" for="xs-img-top-'+index+'"><div class="overlay-outer"><div class="overlay">'+data.top+'</div>     </div></label></div>';
                }
                if(data.middle && data.middle != ""){
                    rand = randomNumber();
                    if(!html.middle) html.middle = "";

                    html.middle += '<div class="item item-selected"><input id="xs-img-mid-'+index+'" type="checkbox" name="xs-img-mid-'+index+'" value="xs-img-mid-'+index+'" /><label class="xs-img-hover img img'+rand+'" for="xs-img-mid-'+index+'"><div class="overlay-outer"><div class="overlay">'+data.middle+'</div>     </div></label></div>';
                }
                if(data.bottom && data.bottom != ""){
                    rand = randomNumber();
                    if(!html.bottom) html.bottom = "";
                        html.bottom += '<div class="item item-selected"><input id="xs-img-bottom-'+index+'" type="checkbox" name="xs-img-bottom'+index+'" value="xs-img-bottom-'+index+'" /><label class="xs-img-hover img img'+rand+'" for="xs-img-bottom-'+index+'"><div class="overlay-outer"><div class="overlay">'+data.bottom+'</div>     </div></label></div>';
                }
            })
        }
    })
    if(html.top) {
        $('.top-funnel').empty().append(html.top);
        reInitCarousel('.top-funnel');
    }
    if(html.middle) {
        $('.mid-funnel').empty().append(html.middle);
        reInitCarousel('.mid-funnel');
    }
    if(html.bottom) {
        $('.bottom-funnel').empty().append(html.bottom);
        reInitCarousel('.bottom-funnel');
    }
    stopLoader('.result-page-loader');
}

function reInitCarousel(className){
    $(className).data('owlCarousel').reinit({

        //autoPlay: 3000, //Set AutoPlay to 3 seconds
       
        //items : length,
        itemsDesktop : [1366,3],
        itemsDesktopSmall : [979,2],
        navigation:true,
        navigationText: [
        "<i class='material-icons'>keyboard_arrow_left</i>",
        "<i class='material-icons'>keyboard_arrow_right</i>"
        ],
        
    });
}

function randomNumber() {
    return Math.floor((Math.random() * 8) + 1);
}

function stopLoader(element) {
    if(!$(element).hasClass('hide')) $(element).addClass('hide');
}