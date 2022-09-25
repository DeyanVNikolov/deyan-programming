function weekendornot(day) {
    if (day == 'Saturday' || day == 'Sunday') {
        console.log('Weekend');
    } else if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
        console.log('Working day');
    } else {
        console.log('Error');
    }
}