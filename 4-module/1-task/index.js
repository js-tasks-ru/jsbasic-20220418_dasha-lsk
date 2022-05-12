function makeFriendsList(friends) {
  let htmlUiList = document.createElement('ul');
  friends.forEach(friend => {
    let friendName = friend.firstName + ' ' + friend.lastName;
    let htmlUiListItem =  document.createElement('li');
    htmlUiListItem.textContent = friendName;
    htmlUiList.append(htmlUiListItem);
  });
  return htmlUiList;
}
