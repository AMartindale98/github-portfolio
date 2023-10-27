const overview = document.querySelector(".overview");
const username = "AMartindale98";

const getGitHub = async function () {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  console.log(data);
  displayUserInfo(data);
};

const displayUserInfo = function (data) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("user-info");
  newDiv.innerHTML = `
  <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;
  overview.append(newDiv);
};

getGitHub();

/*
data we received:
avatar_url
: 
"https://avatars.githubusercontent.com/u/112712735?v=4"
bio
: 
"Hi! I'm Ash, a freelance front-end web developer."
blog
: 
"https://ash-portfolio-site.netlify.app/"
company
: 
null
created_at
: 
"2022-09-02T14:44:53Z"
email
: 
null
events_url
: 
"https://api.github.com/users/AMartindale98/events{/privacy}"
followers
: 
0
followers_url
: 
"https://api.github.com/users/AMartindale98/followers"
following
: 
0
following_url
: 
"https://api.github.com/users/AMartindale98/following{/other_user}"
gists_url
: 
"https://api.github.com/users/AMartindale98/gists{/gist_id}"
gravatar_id
: 
""
hireable
: 
null
html_url
: 
"https://github.com/AMartindale98"
id
: 
112712735
location
: 
null
login
: 
"AMartindale98"
name
: 
"Ash Martindale"
node_id
: 
"U_kgDOBrfcHw"
organizations_url
: 
"https://api.github.com/users/AMartindale98/orgs"
public_gists
: 
0
public_repos
: 
13
received_events_url
: 
"https://api.github.com/users/AMartindale98/received_events"
repos_url
: 
"https://api.github.com/users/AMartindale98/repos"
site_admin
: 
false
starred_url
: 
"https://api.github.com/users/AMartindale98/starred{/owner}{/repo}"
subscriptions_url
: 
"https://api.github.com/users/AMartindale98/subscriptions"
twitter_username
: 
null
type
: 
"User"
updated_at
: 
"2023-10-23T17:49:38Z"
url
: 
"https://api.github.com/users/AMartindale98"
*/
