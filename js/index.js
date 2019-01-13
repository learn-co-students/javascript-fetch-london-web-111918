const token = '101a7d6be25339f84cad7b8695b9974311c3bd10';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
