function showSalary(users, age) {
  // ваш код...

  let filteredUsers = users.filter(user => user.age <= age );
  let users2 = filteredUsers.map(user => user.name + ", " + user.balance);
  return users2.join('\n');
}
