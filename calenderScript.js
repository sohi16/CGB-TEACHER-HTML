document.addEventListener("DOMContentLoaded", function() {
    displayCurrentWeek();
});

function displayCurrentWeek() {
    const calendarElement = document.getElementById("calendar");
    const currentDate = new Date();
    const currentMonthFullName = getCurrentMonthName(currentDate.getMonth())[0]; // Full month name
    const currentMonthShortName = getCurrentMonthName(currentDate.getMonth())[1]; // Short month name
    const currentDay = currentDate.getDate();
    const currentDayOfWeek = getDayOfWeekName(currentDate.getDay());
    const currentDayIndex = currentDate.getDay();

    // Update the content of the h1 tag with the current month (full name)
    const monthHeaderElement = document.getElementById("month-header");
    monthHeaderElement.innerText = currentMonthFullName;

    // Update the content of the short_date_form element with current date (short month name)
    const shortDateFormElement = document.getElementById("short_date_form");
    shortDateFormElement.innerText = `${currentMonthShortName} ${currentDay} - ${currentDayOfWeek}`;

    // Calculate the start and end dates of the current week
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const endOfWeek = new Date(currentDate);
    endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 6);

    // Create a string with the HTML for the calendar
    let calendarHTML = "<table>";
    calendarHTML += "<tr>";

    // Array of abbreviated day names
    const abbreviatedDaysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Loop through each day of the week
    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);

        // Check if the current day is the same as the current date
        const isCurrentDate = day.toDateString() === currentDate.toDateString();
        const isCurrentDayOfWeek = i === currentDayIndex;

        // Add a cell for the day with abbreviated name
        let className = "";
        if (isCurrentDate) {
            className = "current-day";
        } else if (isCurrentDayOfWeek) {
            className = "current-day";
        }

        // Add a cell for the day
        calendarHTML += `<th class="${className}">${abbreviatedDaysOfWeek[day.getDay()]}</th>`;
    }

    calendarHTML += "</tr><tr>";

    // Loop through each day of the week for dates
    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);

        // Check if the current day is the same as the current date
        const isCurrentDate = day.toDateString() === currentDate.toDateString();
        const isCurrentDayOfWeek = i === currentDayIndex;

        // Add a cell for the date
        let className = "";
        if (isCurrentDate) {
            className = "current-date";
        } else if (isCurrentDayOfWeek) {
            className = "current-day";
        }

        calendarHTML += `<td class="${className}">${day.getDate()}</td>`;
    }

    calendarHTML += "</tr>";
    calendarHTML += "</table>";

    // Set the HTML of the calendar element
    calendarElement.innerHTML = calendarHTML;
}

function getCurrentMonthName(monthIndex) {
    const months = [
        ["January", "Jan"], ["February", "Feb"], ["March", "Mar"], ["April", "Apr"],
        ["May", "May"], ["June", "Jun"], ["July", "Jul"], ["August", "Aug"],
        ["September", "Sep"], ["October", "Oct"], ["November", "Nov"], ["December", "Dec"]
    ];
    return months[monthIndex];
}

function getDayOfWeekName(dayIndex) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[dayIndex];
}
