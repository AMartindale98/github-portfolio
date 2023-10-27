const overview = document.querySelector(".overview");
const username = "AMartindale98";
const repoList = document.querySelector(".repo-list");
const repos = document.querySelector(".repos");
const repoData = document.querySelector(".repo-data");
const galleryRepoButton = document.querySelector(".view-repos");
const filterInput = document.querySelector(".filter-repos");

const getGitHub = async function () {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  // console.log(data);
  displayUserInfo(data);
  fetchRepos();
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

const fetchRepos = async function () {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=created&per_page=100`
  );
  const data = await res.json();
  console.log(data);
  displayRepoInfo(data);
};

const displayRepoInfo = function (repos) {
  filterInput.classList.remove("hide");
  repos.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("repo");
    li.innerHTML = `<h3>${item.name}</h3>`;
    repoList.append(li);
  });
};

repoList.addEventListener("click", function (e) {
  if (e.target.matches("h3")) {
    const repoName = e.target.innerText;
    getSingleRepo(repoName);
  }
});

const getSingleRepo = async function (repoName) {
  const res = await fetch(
    `https://api.github.com/repos/${username}/${repoName}`
  );
  const repoInfo = await res.json();
  console.log(repoInfo);
  const fetchLanguages = await fetch(
    `https://api.github.com/repos/AMartindale98/${repoName}/languages`
  );
  const languageData = await fetchLanguages.json();
  // console.log(languageData);
  let languages = [];
  for (let key in languageData) {
    languages.push(key);
  }
  // console.log(languages);
  displaySingleRepoInfo(repoInfo, languages);
};

const displaySingleRepoInfo = function (repoInfo, languages) {
  repoData.innerHTML = "";
  const newDiv = document.createElement("div");

  newDiv.innerHTML = `
  <h3>Name: ${repoInfo.name}</h3>
  <p>Description: ${repoInfo.description}</p>
  <p>Default Branch: ${repoInfo.default_branch}</p>
  <p>Languages: ${languages.join(", ")}</p>
  <a class="visit" href="${
    repoInfo.svn_url
  }" target="_blank" rel="noreferrer noopener">View Repo on GitHub!</a>
    `;
  repoData.append(newDiv);
  repoData.classList.remove("hide");
  repos.classList.add("hide");
  galleryRepoButton.classList.remove("hide");
};

galleryRepoButton.addEventListener("click", function () {
  repos.classList.remove("hide");
  repoData.classList.add("hide");
  galleryRepoButton.classList.add("hide");
});

filterInput.addEventListener("input", function (e) {
  const searchValue = e.target.value.toLowerCase();
  console.log(searchValue);
  const repos = document.querySelectorAll(".repo");
  for (let item of repos) {
    const repoValue = item.innerText.toLowerCase();
    if (!repoValue.includes(searchValue)) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  }
});

//fetchRepos();

/*
data we received:
allow_forking
: 
true
archive_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/{archive_format}{/ref}"
archived
: 
false
assignees_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/assignees{/user}"
blobs_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/git/blobs{/sha}"
branches_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/branches{/branch}"
clone_url
: 
"https://github.com/AMartindale98/github-portfolio.git"
collaborators_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/collaborators{/collaborator}"
comments_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/comments{/number}"
commits_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/commits{/sha}"
compare_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/compare/{base}...{head}"
contents_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/contents/{+path}"
contributors_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/contributors"
created_at
: 
"2023-10-27T19:14:24Z"
default_branch
: 
"main"
deployments_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/deployments"
description
: 
null
disabled
: 
false
downloads_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/downloads"
events_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/events"
fork
: 
false
forks
: 
0
forks_count
: 
0
forks_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/forks"
full_name
: 
"AMartindale98/github-portfolio"
git_commits_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/git/commits{/sha}"
git_refs_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/git/refs{/sha}"
git_tags_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/git/tags{/sha}"
git_url
: 
"git://github.com/AMartindale98/github-portfolio.git"
has_discussions
: 
false
has_downloads
: 
true
has_issues
: 
true
has_pages
: 
false
has_projects
: 
true
has_wiki
: 
true
homepage
: 
null
hooks_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/hooks"
html_url
: 
"https://github.com/AMartindale98/github-portfolio"
id
: 
710938434
is_template
: 
false
issue_comment_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/issues/comments{/number}"
issue_events_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/issues/events{/number}"
issues_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/issues{/number}"
keys_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/keys{/key_id}"
labels_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/labels{/name}"
language
: 
"CSS"
languages_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/languages"
license
: 
null
merges_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/merges"
milestones_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/milestones{/number}"
mirror_url
: 
null
name
: 
"github-portfolio"
node_id
: 
"R_kgDOKmAPQg"
notifications_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/notifications{?since,all,participating}"
open_issues
: 
0
open_issues_count
: 
0
owner
: 
{login: 'AMartindale98', id: 112712735, node_id: 'U_kgDOBrfcHw', avatar_url: 'https://avatars.githubusercontent.com/u/112712735?v=4', gravatar_id: '', …}
private
: 
false
pulls_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/pulls{/number}"
pushed_at
: 
"2023-10-27T19:14:34Z"
releases_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/releases{/id}"
size
: 
0
ssh_url
: 
"git@github.com:AMartindale98/github-portfolio.git"
stargazers_count
: 
0
stargazers_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/stargazers"
statuses_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/statuses/{sha}"
subscribers_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/subscribers"
subscription_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/subscription"
svn_url
: 
"https://github.com/AMartindale98/github-portfolio"
tags_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/tags"
teams_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/teams"
topics
: 
[]
trees_url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio/git/trees{/sha}"
updated_at
: 
"2023-10-27T19:14:37Z"
url
: 
"https://api.github.com/repos/AMartindale98/github-portfolio"
visibility
: 
"public"
watchers
: 
0
watchers_count
: 
0
web_commit_signoff_required
: 
false
*/
