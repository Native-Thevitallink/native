function ToggleShow() {
    let btn = document.getElementById('submit');
    let page2 = document.getElementById('p2');
    let page3 = document.getElementById('p3');
    let page4 = document.getElementById('p4');
    let page5 = document.getElementById('p5');
    let page6 = document.getElementById('p6')
    let page7 = document.getElementById('p7')
    let booknow = document.getElementById('bt-ok')

    let scrbt1 = document.getElementById('p2-scroll')
    let scrbt2 = document.getElementById('p3-scroll')
    let scrbt3 = document.getElementById('p4-scroll')
    let scrbt4 = document.getElementById('p5-scroll')
    let scrbt5 = document.getElementById('p6-scroll')
    let scrbt6 = document.getElementById('p7-scroll')

    
    let roing3k = document.getElementById('roing-3k')
    let roing4k = document.getElementById('roing-4k')
    let roing5k = document.getElementById('roing-5k')
    
    let naugaon3k = document.getElementById('naugaon-3k')
    let naugaon4k = document.getElementById('naugaon-4k')
    let naugaon5k = document.getElementById('naugaon-5k')
    
    let tirunelveli3k = document.getElementById('tirunelveli-3k')
    let tirunelveli4k = document.getElementById('tirunelveli-4k')
    let tirunelveli5k = document.getElementById('tirunelveli-5k')
    
    let deogarh3k = document.getElementById('deogarh-3k')
    let deogarh4k = document.getElementById('deogarh-4k')
    let deogarh5k = document.getElementById('deogarh-5k')
    
    let nako3k = document.getElementById('nako-3k')
    let nako4k = document.getElementById('nako-4k')
    let nako5k = document.getElementById('nako-5k')
    
    let malana3k = document.getElementById('malana-3k')
    let malana4k = document.getElementById('malana-4k')
    let malana5k = document.getElementById('malana-5k')

    let selectedOption = document.getElementById('location').value;
    let days = document.getElementById('days').value;

    if (days != 'no'){
        if (selectedOption == 'roing' && days == '3') {
            page2.style.display = 'block';
            roing3k.style.display = 'block'
            roing4k.style.display = 'none'
            roing5k.style.display = 'none'
            scrbt1.style.display = 'flex'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt4.style.display = 'none'
            page3.style.display = 'none';
            page4.style.display = 'none';
            page5.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            scrollbottom(); // Call scrollbottom() here if you want to scroll only when 'roing' is selected
        } else if (selectedOption == 'naugaon' && days == '3') {
            page2.style.display = 'none';
            page3.style.display = 'block';
            naugaon3k.style.display = 'block'
            naugaon4k.style.display = 'none'
            naugaon5k.style.display = 'none'
            scrbt2.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt4.style.display = 'none'
            page4.style.display = 'none';
            page5.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            scrollbottom();
        } else if (selectedOption == 'tirunelveli' && days == '3') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'block';
            tirunelveli3k.style.display = 'block'
            tirunelveli4k.style.display = 'none'
            tirunelveli5k.style.display = 'none'
            scrbt3.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt4.style.display = 'none'
            page5.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            scrollbottom(); // Call scrollbottom() here if you want to scroll only when 'tirunelveli' is selected
        } else if (selectedOption == 'deogarh' && days == '3') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'block';
            deogarh3k.style.display = 'block'
            deogarh4k.style.display = 'none'
            deogarh5k.style.display = 'none'
            scrbt4.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'nako' && days == '3') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'block';
            page7.style.display = 'none';
            page5.style.display = 'none';
            nako3k.style.display = 'block'
            nako4k.style.display = 'none'
            nako5k.style.display = 'none'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'flex'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'malana' && days == '3') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'block';
            page5.style.display = 'none';
            malana3k.style.display = 'block'
            malana4k.style.display = 'none'
            malana5k.style.display = 'none'
            scrbt4.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'flex'
            scrollbottom();

        }else if (selectedOption == 'roing' && days == '4') {
            page2.style.display = 'block';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'none';
            roing3k.style.display = 'none'
            roing4k.style.display = 'block'
            roing5k.style.display = 'none'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'flex'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'naugaon' && days == '4') {
            page2.style.display = 'none';
            page3.style.display = 'block';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'none';
            naugaon3k.style.display = 'none'
            naugaon4k.style.display = 'block'
            naugaon5k.style.display = 'none'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'flex'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'tirunelveli' && days == '4') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'block';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'none';
            tirunelveli3k.style.display = 'none'
            tirunelveli4k.style.display = 'block'
            tirunelveli5k.style.display = 'none'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'flex'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'deogarh' && days == '4') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'block';
            deogarh3k.style.display = 'none'
            deogarh4k.style.display = 'block'
            deogarh5k.style.display = 'none'
            scrbt4.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'nako' && days == '4') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'block';
            page7.style.display = 'none';
            page5.style.display = 'none';
            nako3k.style.display = 'none'
            nako4k.style.display = 'block'
            nako5k.style.display = 'none'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'flex'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'malana' && days == '4') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'block';
            page5.style.display = 'none';
            malana3k.style.display = 'none'
            malana4k.style.display = 'block'
            malana5k.style.display = 'none'
            scrbt4.style.display = 'none';
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'flex'
            scrollbottom();

        }else if (selectedOption == 'roing' && days == '5') {
            page2.style.display = 'block';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'none';
            roing3k.style.display = 'none'
            roing4k.style.display = 'none'
            roing5k.style.display = 'block'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'flex'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'naugaon' && days == '5') {
            page2.style.display = 'none';
            page3.style.display = 'block';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'none';
            naugaon3k.style.display = 'none'
            naugaon4k.style.display = 'none'
            naugaon5k.style.display = 'block'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'flex'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'tirunelveli' && days == '5') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'block';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'none';
            tirunelveli3k.style.display = 'none'
            tirunelveli4k.style.display = 'none'
            tirunelveli5k.style.display = 'block'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'flex'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'deogarh' && days == '5') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'none';
            page5.style.display = 'block';
            deogarh3k.style.display = 'none'
            deogarh4k.style.display = 'none'
            deogarh5k.style.display = 'block'
            scrbt4.style.display = 'flex'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'nako' && days == '5') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'block';
            page7.style.display = 'none';
            page5.style.display = 'none';
            nako3k.style.display = 'none'
            nako4k.style.display = 'none'
            nako5k.style.display = 'block'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'flex'
            scrbt6.style.display = 'none'
            scrollbottom();

        }else if (selectedOption == 'malana' && days == '5') {
            page2.style.display = 'none';
            page3.style.display = 'none';
            page4.style.display = 'none';
            page6.style.display = 'none';
            page7.style.display = 'block';
            page5.style.display = 'none';
            malana3k.style.display = 'none'
            malana4k.style.display = 'none'
            malana5k.style.display = 'block'
            scrbt4.style.display = 'none'
            scrbt1.style.display = 'none'
            scrbt2.style.display = 'none'
            scrbt3.style.display = 'none'
            scrbt5.style.display = 'none'
            scrbt6.style.display = 'flex'
            scrollbottom();
        } 
        
        else {
            window.alert("Please select location");
        }
    }
    else{
        window.alert("Please select no. of days")
    }
}
