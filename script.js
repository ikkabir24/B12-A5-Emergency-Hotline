// heart icon set up

    const heartIcons = document.getElementsByClassName('heart-icon');
    for (let icon of heartIcons) {
        icon.addEventListener('click', function () {

            let heartCount = parseInt(document.getElementById('heart-meter').innerText);

            heartCount = heartCount + 1;

            document.getElementById('heart-meter').innerText = heartCount;
        });
    }


// shared call function 

    function callHistoryAdd(nameId, numberId) {

        let serviceName = document.getElementById(nameId).innerText;

        let serviceNumber = document.getElementById(numberId).innerText;

        let date = new Date().toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });;

        let div = document.createElement('div')

        div.innerHTML = `
        <div class="bg-gray-200 p-4 flex justify-between items-center rounded-2xl mt-5">
        <div>
        <p class="font-semibold">${serviceName}</p>
        <p>${serviceNumber}</p>
        <p class="text-sm text-gray-500">
        </div>
        <div>
        <p>${date}</p>
        </div>
        </div>
        `
        let coinCount = parseInt(document.getElementById('coin-meter').innerText)

        coinCount = coinCount - 20;

        if (coinCount >= 0) {
            document.getElementById('coin-meter').innerText = coinCount;
            document.getElementById('call-history').appendChild(div)
            alert('Calling ' + serviceName + '... ' + serviceNumber)
        }
        else {
            alert('Not Enough Coins')
        }
    }

// shared copy function

    function copyButtonFunc(theCopyBtnId, hotlineId) {

    document.getElementById(theCopyBtnId).addEventListener('click', function () {

        let textToCopy = document.getElementById(hotlineId).innerText;

        navigator.clipboard.writeText(textToCopy);

        document.getElementById(theCopyBtnId).innerText = 'COPIED'

        let copyCount = parseInt(document.getElementById('copy-meter').innerText);

        copyCount += 1;

        document.getElementById('copy-meter').innerText = copyCount;

        alert('Hotline number: ' + textToCopy + ' copied. Can paste it anywhere.')
    })

}


//1 national emergency

    // call button
    document.getElementById('national-emergency-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-national', 'service-num-national');

    })
    // copy button
    copyButtonFunc('national-emergency-copy-btn', 'service-num-national');


//2 police service

    // call button
    document.getElementById('police-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-police', 'service-num-police');

    })
    // copy button
    copyButtonFunc('police-copy-btn', 'service-num-police');


//3 fire service

    // call button
    document.getElementById('fire-service-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-fire', 'service-num-fire');

    })
    // copy button
    copyButtonFunc('fire-copy-btn', 'service-num-fire');


//4 ambulance service 

    // call button
    document.getElementById('ambulance-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-ambulance', 'service-num-ambulance');

    })
    // copy button
    copyButtonFunc('ambulance-copy-btn', 'service-num-ambulance');

    
//5 Women and child service 
    
    // call button
    document.getElementById('wNc-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-women', 'service-num-women');

    })
    // copy button
    copyButtonFunc('women-copy-btn', 'service-num-women');


//6 anti corruption service 

    // call button
    document.getElementById('anti-co-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-anti', 'service-num-anti');

    })
    // copy button
    copyButtonFunc('anti-co-copy-btn', 'service-num-anti');



//7 electricity service 

    // call button
    document.getElementById('electricity-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-electricity', 'service-num-electricity');

    })
    // copy button
    copyButtonFunc('electricity-copy-btn', 'service-num-electricity');


//8 brac service 

    // call button
    document.getElementById('brac-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-brac', 'service-num-brac');

    })
    // copy button
    copyButtonFunc('brac-copy-btn', 'service-num-brac');

//9 rail service 

    // call button
    document.getElementById('rail-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-rail', 'service-num-rail');

    })
    // copy button
    copyButtonFunc('rail-copy-btn', 'service-num-rail')

// clear history button

    document.getElementById('clear-history-btn')
    .addEventListener('click', function(){
        document.getElementById('call-history').innerText=''
    })
