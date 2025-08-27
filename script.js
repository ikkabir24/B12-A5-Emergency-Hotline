// heart icon set up

const heartIcons = document.getElementsByClassName('heart-icon');

for (let icon of heartIcons) {
    icon.addEventListener('click', function() {

        let heartCount = parseInt(document.getElementById('heart-meter').innerText);

        heartCount = heartCount + 1;
        
        document.getElementById('heart-meter').innerText = heartCount;
    });
}
