const app = "I don't do much.";

const token = '56518c1a1f0261378dd5c0ca5def587f4058569c';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json())
  .then(json => console.log(json));
