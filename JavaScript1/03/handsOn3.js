function addAttendee() {
  let name = birthdayForm.first.value + ' ' + birthdayForm.last.value;

  let ul = document.getElementById('attendees');

  let li = document.createElement('LI');
  li.innerHTML = name;
  ul.appendChild(li);
}
