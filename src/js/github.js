import $ from 'jquery';

var GH_ROOT_URL = "https://api.github.com";

function printResponse (data) {
  console.log(data);
}

function getUser (username) {
  return $.ajax({
    url: GH_ROOT_URL + `/users/${username}`,
    success: printResponse
  });
}

getUser("kingcons");

function updateUser (location, email, bio) {
  return $.ajax({
    url: `${GH_ROOT_URL}/user`,
    method: 'patch',
    data: {
      location: location,
      email: email,
      bio: bio
    },
    success: printResponse
  });
};

