function stepEmail () {
    var verify = emailValidation($("#form-email").val());
    if(verify) {
        window.email = $("#form-email").val();
        if(parseData[saveData.category][saveData.subCat] || parseData[saveData.category]['keyCustom'])    showTitle();
        $(".new-sec-bg").fadeIn("slow", function() {
            $(this).removeClass("hide");
        });
        $(".sec4-bg").fadeOut("slow", function() {
            $(this).addClass("hide");
        });
        $(".logo-top").removeClass("hide");
        $('body').css('overflow-y','auto');

        sendResponse();

    }
    else $('.email-validator').removeClass('hide');
}
        $(document).ready(function(){
            $('#background').mouseParallax({ moveFactor: 5 });
            $('#foreground').mouseParallax({ moveFactor: 1 });


            $(".sec1-button").click(function(){
                //$(".sec1-bg").hide();
                $(".sec2-bg").removeClass("hide");
                $(".logo-top").removeClass("hide");
                $('html, body').animate({
                    scrollTop: $('.sec2-bg').offset().top
                }, 1000);
                setTimeout(function(){
                    $(".sec1-bg").addClass("hide");
                }, 1000)

            });

            $('.selectize-category').selectize({
                create: false,
                sortField: 'text',
                onChange:function(event){
                    makeSubCategory('.selectize-sub-category',saveSubCat[event]);
                    saveData.category = event;

                    $(".sec3-bg").removeClass("hide");
                    $('html, body').animate({
                        scrollTop: $('.sec3-bg').offset().top
                    }, 1000);
                    setTimeout(function(){
                        $(".sec2-bg").addClass("hide");
                    }, 1000)

                   $('.selectize-category-result')[0].selectize.setValue(event);
                }
            });

            $('.selectize-sub-category').selectize({
                create: false,
                sortField: 'text',
                onChange:function(event){
                    saveData.subCat = event;

                    $(".sec4-bg").removeClass("hide");
                    $('html, body').animate({
                        scrollTop: $('.sec4-bg').offset().top
                    }, 1000);
                    setTimeout(function(){
                        $(".sec3-bg").addClass("hide");
                    }, 1000)

                    $('.selectize-sub-category-result')[0].selectize.setValue(event);
                }
            });

            $("#form-email").focus(function(){
                if(!$('.email-validator').hasClass('hide')) $('.email-validator').addClass('hide');
            })

            document.getElementById('form-email').onkeypress = function (e) {
                if (e.key.match(/Enter/)) {
                    stepEmail()
                }
            }

            $(".sec-button").click(function(){
                stepEmail();
            });

            $('.selectize-sub-category-result').on('change', function () {
                clearErrors();
                if (!saveData.subCat) {
                    clearAppendTabData();
                    showErrors('update-subcat-error', 'Please choose a sub category');
                    return;
                }
                if(parseData[saveData.category][saveData.subCat] || parseData[saveData.category]['keyCustom']){
                    $('.result-page-loader').removeClass('hide');
                    showTitle();
                }
            })

            $('.update-btn').click(function(){
                
                // $('.build-btn').removeClass('hide');
            })

            $('.selectize-category-result').selectize({
                create: false,
                sortField: 'text',
                onChange:function(event){
                    makeSubCategory('.selectize-sub-category-result',saveSubCat[event]);
                    saveData.category = event;
                }
            });

            $('.selectize-sub-category-result').selectize({
                create: false,
                sortField: 'text',
                onChange:function(event){
                    saveData.subCat = event;
                }
            });


            $(document).find('.selectize-input input').attr("disabled", true);
            console.log('>>>>', $(document).find('.selectize-input input').attr("disabled"));
        });

        if(window.location.search.match(/\?get-started/)) {
            $(".sec1-button").click();
        }

        $(document).on('click', '.item-selected', function(event){
            var index = buildSelect.indexOf($(this).text().trim());
            if($(this).children('input').prop('checked')) {
                if(index == -1) buildSelect.push($(this).text().trim());
            }
            else {
                if(index > -1)   buildSelect.splice(index,1);
            }
            if(buildSelect.length > 0)  {
                $('#build-select').html('('+buildSelect.length+')');
                if($('.build-btn').hasClass('hide'))    $('.build-btn').removeClass('hide');
            }
            else {
                 if(!$('.build-btn').hasClass('hide')) $('.build-btn').addClass('hide');
            }
        })