function makeFriendsList(friends) {
  //Create <ul> element
  const friendsUl = document.createElement("ul");
  //Create HTML for the friends list
  let friendsList = "";
  
  for (let friend of friends) {
    friendsList = friendsList + `<li>${friend.firstName} ${friend.lastName}</li>`;
  }
  
  //Insert the HTML into the <ul> element
  friendsUl.innerHTML = friendsList;
  
  return friendsUl;
}


