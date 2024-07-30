
const submitBtnEl = document.getElementById("submitBtn");
const userBirthDateEl = document.getElementById("birthDate");
const showAgeEl = document.querySelector('.show-result');

userBirthDateEl.max = new Date().toISOString().split("T")[0];

const getDaysInMonth = (year, month) =>{
    return new Date(year, month, 0).getDate();
};

const calculateAge = () => {

    showAgeEl.innerHTML = '';
    
    if (!userBirthDateEl.value) {
        showAgeEl.innerHTML = '<h3>Please select a valid birth date.</h3>';
        showAgeEl.style.display = 'block';
        return;
    }

    const birthDate = new Date(userBirthDateEl.value);
    
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth() + 1;
    const birthDay = birthDate.getDate();

    // console.log(birthDay, birthMonth, birthYear);

    const todayDate = new Date();

    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth() + 1;
    const todayDay = todayDate.getDate();

    let year, month, day;
    
    year = todayYear - birthYear;

    if(birthMonth <= todayMonth){
        month = todayMonth - birthMonth;
    }else{
        month = 12 + todayMonth - birthMonth;
        year--;
    }

    if(birthDay <= todayDay){
        day = todayDay - birthDay;
    }else{
        day = getDaysInMonth(birthYear, birthMonth) + todayDay - birthDay;
        month--;
    }

    if(month < 0){
        month = 11;
        year--; 
    }

    // render age on web.

    showAgeEl.innerHTML = `<h3>
                    Your age is  <span>${year}</span>  year${year > 1? 's': ''}, <span>${month}</span> month${month > 1? 's': ''} and <span>${day}</span> day${day > 1? 's': ''}.
                </h3>`

    showAgeEl.computedStyleMap.display = 'block';
};

submitBtnEl.addEventListener('click', calculateAge);