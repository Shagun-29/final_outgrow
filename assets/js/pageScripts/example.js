function test(){
    window.runTimeout = function() {
        setTimeout(function () {
            jQuery('.content-loader').addClass('hide');   
        }, 5000);
    }
    
    window.display = function (url) {
        document.getElementById('og-iframe').src = url;
        jQuery('#og-iframe').addClass('iframeHeight')
        calculateMinHeight();
        
        setTimeout(calculateMinHeight, 2000);
    }
    
    function getTemplateName(template) {
        let templates = [{id: 'template-eight', text: 'The Venice'},
            {id: 'template-seven', text: 'The Seattle'}, {id: 'one-page-card-new', text: 'The Chicago'},
            {id: 'sound-cloud-v3', text: 'The Londoner'}, {id: 'inline-temp-new', text: 'The Greek'},
            {id: 'experian', text: 'The Tokyo'}, {id: 'template-five', text: 'The Madrid'},
            {id: 'template-six', text: 'The Stockholm'}];
        return templates.find(t => t.id.includes(template));
    }
    
    window.setPremade = function () {
        let premadeTemplateList = jQuery('#gallery-content-center');
        let innerHTML = '';
        for (let i = 0; i < window.calcs.length; i++) {
            let id = `${window.calcs[i].id}`;
            let className = window.calcs[i].Industry;
            if (i === 0) {
                innerHTML += `<li class="active filter-all ${className}" id="${id}">
                            <a href="javascript:void(0)" onclick="markAsActive('${id}')">
                        ${window.calcs[i].Description}</a></li>`
            } else {
                innerHTML += `<li class="filter-all ${className}" id="${id}">
                            <a href="javascript:void(0)" onclick="markAsActive('${id}')">
                        ${window.calcs[i].Description}</a></li>`
            }
        }
        premadeTemplateList.html(innerHTML)
    }
    
    window.markAsActive = function (calcId) {
        var currentActiveCalc = document.querySelector('#gallery-content-center li.active');
        currentActiveCalc.classList.remove('active');
        var tobeActiveCalc = document.querySelector('#' + calcId);
        tobeActiveCalc.classList.add('active');
        let calc = window.calcs.find(function (calc) {
            return calc.id === calcId
        });
        var premadeGif = document.getElementById('premade-gif');
        var premadePreview = document.getElementById('premade-preview-link');
        var premadeName = document.getElementById('premade-calc-name');
        var premadeLayout = document.getElementById('premade-calc-layout')
        premadeGif.src = calc.GIF;
        premadePreview.href = calc['Published Link'];
        premadeName.innerHTML = '<i class="material-icons">&#xE80E;</i>' + calc.Name;
        premadeLayout.innerHTML = '<strong>Layout:</strong> ' + calc.Layout
    }
    
    window.changeActiveCalcCategory = function (id) {
        var currentActiveCat = document.querySelector('#calc-cats li.active');
        currentActiveCat.classList.remove('active');
        var tobeActiveCat = document.querySelector('#' + id);
        tobeActiveCat.parentElement.classList.add('active')
    }
    
    window.shuffleCalcs = function (filterName) {
        changeActiveCalcCategory(filterName);
        let selectedTab = jQuery('.nav.nav-tabs.premade-calc li.active').children().attr('id');
        console.log(filterName, selectedTab);
        var hiddenCalcs = document.querySelectorAll('#gallery-content-center li.hide');
        hiddenCalcs.forEach(function (calc) {
            calc.classList.remove('hide')
        });
        window.calcs.filter(function (calc) {
            return !(calc.filters.includes(filterName) && calc.filters.includes(selectedTab))
        }).forEach(function (calc) {
            var calc = document.querySelector('#' + calc.id);
            calc.classList.add('hide')
        })
        var activeCalc = document.querySelector('#gallery-content-center li.active');
        if (activeCalc)
            activeCalc.classList.remove('active');
        var allCalcs = document.querySelectorAll('#gallery-content-center li');
        var sflag = !0;
        allCalcs.forEach(function (calc) {
            if (!calc.classList.contains('hide') && sflag) {
                calc.classList.add('active');
                var activeCal = window.calcs.find(function (cal) {
                    return cal.id === calc.id
                });
                var premadeGif = document.getElementById('premade-gif');
                var premadePreview = document.getElementById('premade-preview-link');
                var premadeName = document.getElementById('premade-calc-name');
                var premadeLayout = document.getElementById('premade-calc-layout')
                premadeGif.src = activeCal.GIF;
                premadePreview.href = activeCal['Published Link'];
                premadeName.innerHTML = '<i class="material-icons">&#xE80E;</i>' + activeCal.Name;
                premadeLayout.innerHTML = '<strong>Layout:</strong> ' + activeCal.Layout;
                sflag = !1
            }
        })
    }
    
    window.changeTab = function (tabName) {
        let text = '';
    
        switch (tabName) {
            case 'Calculator':
                text = 'There is a Calculator for that!';
                break;
            case 'OutcomeQuiz':
                text = 'There is an Outcome quiz for that!';
                break;
            case 'GradedQuiz':
                text = 'There is a Graded quiz for that!';
                break;
            case 'Poll':
                text = 'There is a Poll for that!';
                break;
            default :
                break;
        }
        jQuery('#premade-heading').text(text);
        let hiddenCalcs = document.querySelectorAll('#gallery-content-center li.hide');
        let selectedCat = jQuery('#calc-cats li.active').children().attr('id');
        console.log('tabname=', tabName, selectedCat);
        hiddenCalcs.forEach(function (calc) {
            calc.classList.remove('hide')
        });
        let categorySet = new Set();
        window.calcs.filter(function (calc) {
            return !(calc.filters.includes(tabName) && calc.filters.includes(selectedCat));
        }).forEach(function (cal) {
            var calc = document.querySelector('#' + cal.id);
            calc.classList.add('hide')
        });
    
        window.calcs.filter(function (calc) {
            return calc.filters.includes(tabName);
        }).forEach(function (cal) {
            categorySet.add(cal.Industry);
        });
    
        console.log(categorySet);
        let categoryContainer = jQuery('#calc-cats').children();
        let categories = categoryContainer.children();
        console.log(categories);
        for (let i = 0; i < categories.length; i++) {
            if (categorySet.has(categories[i].id)) {
                console.log(categories[i].id,'removing hide');
                categoryContainer[i].classList.remove('hide');
                shuffleCalcs('Auto')
            } else {
                console.log(categories[i].id,'adding hide')
                categoryContainer[i].classList.add('hide');
            }
        }
    
    }
    
    jQuery(document).ready(function () {
        calculateMinHeight();
        window.Intercom('update', { 'site_example_viewed': new Date() });
        
        var iframes = iFrameResize({
            log: false,
            autoResize: true,
            enablePublicMethods: true,
            checkOrigin: false,
        },'#og-iframe');
    
        jQuery('.calc-links a').on('click',function(){
            jQuery('a').removeClass('active');
            jQuery(this).addClass('active');
        });
        // jQuery('.og-iframe-res').each(function () {
        //     console.log('Examples og');
        //     if (jQuery(this).attr('data-calc')) {
        //         console.log('Examples og if');
        //         jQuery(this).attr('src', jQuery(this).attr('data-calc'));
        //         jQuery(this).attr('data-calc', '');
        //     }
        // })
        runTimeout();
        jQuery.post('https://api-calc.outgrow.co/api/v1/admin/getCalculators',
            function (data, status) {
                console.log(status, data);
                if (status === 'success') {
                    window.calcs = data.data.calculators;
                    window.calcs.forEach(calc => {
    
                        calc['GIF'] = calc.media;
                        calc['Industry'] = calc.industry.replace(/(\s|&)/g, '');
                        calc['Name'] = calc.title;
                        calc['id'] = 'id' + calc._id;
                        calc['Description'] = calc.description;
                        let layout = getTemplateName(calc.template);
                        calc['Layout'] = layout ? layout.text : 'Stockholm';
                        calc['Published Link'] = calc.liveApp.url;
                        calc['filters'] = ['filter-auto', calc.Industry, calc.type.replace(/\s/g, '')];
    
                    });
                    jQuery('#premade-content').removeClass('hide');
                    jQuery('#premade-loader').addClass('hide');
                    setPremade();
                    shuffleCalcs('Auto');
                    changeTab('Calculator');
                }
            });
    })    
}
