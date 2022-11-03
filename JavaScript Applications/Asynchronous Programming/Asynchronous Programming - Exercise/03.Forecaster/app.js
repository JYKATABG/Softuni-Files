function attachEvents() {
    let locationInput = document.getElementById('location');
    let buttonSubmit = document.getElementById('submit');
    let divDisplay = document.getElementById('forecast')
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let code = '';
    let symbols = {
        sunny: '&#x2600',
        partlySunny: '&#x26C5',
        overcast: '&#x2601',
        rain: '&#x2614',
        degrees: '°'
    }

    let divElementUpcoming = document.createElement('div');
    let divElementCurrent = document.createElement('div');
    let url = 'http://localhost:3030/jsonstore/forecaster/'


    buttonSubmit.addEventListener('click', (e) => {

        divElementUpcoming.innerHTML = '';
        divElementCurrent.innerHTML = '';

        divElementCurrent.classList.add('forecasts');
        divElementUpcoming.classList.add('forecast-info');

        divDisplay.style.display = 'inline';
        //try block

        fetch(`${url}/locations`)
            .then(respond => respond.json())
            .then(data => {
                data.forEach(x => {
                    if (x.name == locationInput.value) {
                        return code = x.code
                    }
                })
                fetch(`${url}/today/${code}`)
                    .then(response => response.json())
                    .then(data => {
                        let name = data.name

                        let spanGroup = document.createElement('span');
                        let spanLocation = document.createElement('span');
                        let spanTemperature = document.createElement('span');
                        let spanCondition = document.createElement('span');
                        let spanIcon = document.createElement('span');

                        spanIcon.setAttribute('class','condition symbol')
                        spanGroup.setAttribute('class','condition');
                        spanLocation.setAttribute('class','forecast-data');
                        spanTemperature.setAttribute('class','forecast-data');
                        spanCondition.setAttribute('class','forecast-data');

                        let condition = data.forecast.condition
                        spanLocation.textContent = name;
                        spanTemperature.textContent = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`
                        spanCondition.textContent = condition
                        if(condition == "Rain") {
                            spanIcon.innerHTML = symbols.rain
                        } else if(condition == "Sunny") {
                            spanIcon.innerHTML = symbols.sunny
                        } else if(condition == "Overcast") {
                            spanIcon.innerHTML = symbols.overcast
                        } else if(condition == "Partly sunny") {
                            spanCondition.innerHTML = symbols.partlySunny
                        }

                        spanGroup.appendChild(spanLocation)
                        spanGroup.appendChild(spanTemperature)
                        spanGroup.appendChild(spanCondition)
                        divElementCurrent.appendChild(spanIcon)
                        divElementCurrent.appendChild(spanGroup)

                        currentDiv.appendChild(divElementCurrent)
                        
                    })
                    .catch(error => {
                        divDisplay.textContent = "Error"
                    })

                    fetch(`${url}/upcoming/${code}`)
                    .then(response => response.json())
                    .then(data => {
                       
                        let nextDays = data.forecast;

                        nextDays.forEach(x => {
                        let spanGroup = document.createElement('span');
                        let spanTemperature = document.createElement('span');
                        let spanCondition = document.createElement('span');
                        let spanIcon = document.createElement('span');

                        spanIcon.setAttribute('class','condition symbol')
                        spanGroup.classList.add('upcoming');
                        spanTemperature.classList.add('forecast-data');
                        spanCondition.classList.add('forecast-data');

                        let condition = x.condition
                        spanTemperature.textContent = `${x.low}${symbols.degrees}/${x.high}${symbols.degrees}`
                        spanCondition.textContent = condition
                        if(condition == "Rain") {
                            spanIcon.innerHTML = symbols.rain
                        } else if(condition == "Sunny") {
                            spanIcon.innerHTML = symbols.sunny
                        } else if(condition == "Overcast") {
                            spanIcon.innerHTML = symbols.overcast
                        } else if(condition == "Partly sunny") {
                            spanCondition.innerHTML = symbols.partlySunny
                        }


                        spanGroup.appendChild(spanTemperature)
                        spanGroup.appendChild(spanCondition)
                        divElementUpcoming.appendChild(spanIcon)
                        divElementUpcoming.appendChild(spanGroup)

                        upcomingDiv.appendChild(divElementUpcoming)
                        })
                    })
                    .catch(error => {
                        divDisplay.textContent = 'Error'
                    })
            })
    })
}

attachEvents();