function getDOB() {
    const dob = new Date(document.getElementById('inputDob').value);
    const currentDate = new Date(document.getElementById('cdate').value);

    if (isNaN(dob.getTime()) || isNaN(currentDate.getTime())) {
        alert("Please enter valid dates.");
        return;
    }

    const age = calculateAge(dob, currentDate);
    displayAge(age);
}

function calculateAge(dob, currentDate) {
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    const dayDiff = currentDate.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

function displayAge(age) {
    const currentAgeDiv = document.getElementById('currentAge');
    currentAgeDiv.textContent = `Your age is: ${age} years`;
    currentAgeDiv.style.animation = 'fadeIn 1s';
}
