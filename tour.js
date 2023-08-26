function ToggleShow() {
    let btn = document.getElementById('submit');
    let page2 = document.getElementById('p2');
    let page3 = document.getElementById('p3');
    let page4 = document.getElementById('p4');
    let page5 = document.getElementById('p5');
    let scrbt1 = document.getElementById('p2-scroll')
    let scrbt2 = document.getElementById('p3-scroll')
    let scrbt3 = document.getElementById('p4-scroll')
    let scrbt4 = document.getElementById('p5-scroll')

    let selectedOption = document.getElementById('location').value;
    let days = document.getElementById('days').value;
    if (days != 'no'){
        if (selectedOption == 'roing') {
            page2.style.display = 'block';
            scrbt1.style.display = 'flex'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt4.style.display = 'none'
            page3.style.display = 'none';
            page4.style.display = 'none';
            page5.style.display = 'none';
            scrollbottom(); // Call scrollbottom() here if you want to scroll only when 'roing' is selected
        } else if (selectedOption == 'naugaon') {
            page2.style.display = 'none';
            page3.style.display = 'block';
            scrbt2.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt4.style.display = 'none'
            page4.style.display = 'none';
            page5.style.display = 'none';
            // scrollbottom(); // Call scrollbottom() here if you want to scroll only when 'naugaon' is selected
        } else if (selectedOption == 'tirunelveli') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'block';
            scrbt3.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt4.style.display = 'none'
            page5.style.display = 'none';
            // scrollbottom(); // Call scrollbottom() here if you want to scroll only when 'tirunelveli' is selected
        } else if (selectedOption == 'deogarh') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page5.style.display = 'block';
            scrbt4.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            // scrollbottom(); // Call scrollbottom() here if you want to scroll only when 'deogarh' is selected
        } else {
            window.alert("Please select location");
        }
    }
    else{
        window.alert("Please select no. of days")
    }
}
