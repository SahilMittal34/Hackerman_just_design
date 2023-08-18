const hide = ()=>{
    //Changes made after clicking
    
    document.getElementsByTagName('img')[0].style.display = 'none';
    document.getElementsByClassName('befbtn')[0].style.display = 'none';
    document.getElementsByClassName('container')[0].style.padding = '30px 0 50vh 30px';
    document.getElementsByTagName('input')[0].style.display = 'none';
    
    let t = document.getElementsByTagName('input')[0].value
    console.log(t)

    function divcreate(text){
        let divs = document.createElement('div')
        divs.textContent = text;
        divs.className = 'texbox'
        let a = document.getElementsByClassName('container')[0]
        a.appendChild(divs)
    }

    function hacks(text){
        let divs = document.createElement('div')
        divs.textContent = text;
        divs.className = 'hacks'
        let a = document.getElementsByClassName('container')[0]
        a.appendChild(divs)
    }

    setTimeout(()=>{
        divcreate("Initializing Hack Program...")
    },1000)
    setTimeout(()=>{
        divcreate(`Breaching into your Network...`)
    },3000)
    setTimeout(()=>{
        divcreate(`Got the IP address...`)
    },4000)
    setTimeout(()=>{
        divcreate(`Creating fake username...`)
    },5000)
    setTimeout(()=>{
        divcreate(`Contacting to server...`)
    },6000)
    setTimeout(()=>{
        divcreate(`Hacking ${t}... Please Wait`)
    },7000)
    setTimeout(()=>{
        divcreate(`200K password failed... Still trying`)
    },10000)
    setTimeout(()=>{
        divcreate(`${t} Password has been fetched...`)
    },12000)
    setTimeout(()=>{
        divcreate("Connecting to Facebook...")
    },15000)
    setTimeout(()=>{
        hacks(`HACKED!!!`)
    },20000)
    
}

