async function printing(e) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let new_text = document.createElement('p');
        new_text.innerHTML = `>> ${e} <div class="container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div><br>`;
        document.querySelector(".custom").appendChild(new_text);
        resolve(new_text); // Resolve the promise with the new text element
      }, Math.ceil(Math.random()*3000));
    });
  }
  
  async function main() {
    await printing("Initializing Hacking");
    await printing("Reading Your Files");
    await printing("Password Files Detected");
    await printing("Sending all passwords and personal files to the server");
    await printing("Cleaning up");
  }
  
  main();
  