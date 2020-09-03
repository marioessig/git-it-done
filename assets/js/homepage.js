var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
    console.log("function executed")
  };

getUserRepos;