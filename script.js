// heart icon set up

const heartIcons = document.getElementsByClassName('heart-icon');

for (let icon of heartIcons) {
    icon.addEventListener('click', function () {

        let heartCount = parseInt(document.getElementById('heart-meter').innerText);

        heartCount = heartCount + 1;

        document.getElementById('heart-meter').innerText = heartCount;
    });
}

// shared function 

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

// national emergency call button

document.getElementById('national-emergency-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-national', 'service-num-national')

    })

// police call button

document.getElementById('police-call-btn')
    .addEventListener('click', function () {

        callHistoryAdd('service-name-police', 'service-num-police')

    })




