function requestBuild(data){
	console.log(data,'>>>>>>>>>>>>>>>',data.app_selected.length);
	$('.result-page-loader').removeClass('hide');
	makeRequest(data,data.app_selected.length);
}

function makeRequest(app,count, finalCallback) {
	var data = appParams(app,count-1);
	someAjaxCall(data, function(response){
        if(count > 0){
        	console.log(response,'>>>>>>>',count);
            makeRequest(app,count - 1, finalCallback);
        } else {
        	$('.result-page-loader').addClass('hide');
            $('.build-btn').removeClass('hide');
            finalCallback && finalCallback();
        }
    });
}

function someAjaxCall(data, callback){
	$.ajax({
        type:'POST',
        url: link.getBuildLink(),
        headers: { 
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data),
        success:function(response){
          if(response.error) callback();
          else callback(response);
        },
        error:function(errr){
            callback(err);
        }
    })
}

function appParams(data, key){
    let name = data.email.split('@')[0].split('.').join(' ');
    let domain = data.email.split('@')[1].split('.')[0];
    let params = { 
                    "user": {
                        "emails": {
                            "email": data.email
                        },
                        "name"      : name,
                        "password"  : "1234567890"
                    },
                    "company": {
                        "sub_domain": domain,
                        "name": domain
                    },
                    "app":{
                        "name": data.app_selected[key],
                        "header":data.app_selected[key],
                        "background":""
                    },
                    "template":"5892d26dcbff7e0b1c34bf65"
    }
    return params;
}