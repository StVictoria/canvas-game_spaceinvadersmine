document.addEventListener("DOMContentLoaded", () => {
  const spaceBoard = document.querySelector(".spaceBoard");
  let scoreText = document.querySelector(".score");
  let scoreCount = 0;
  //   const holder = document.querySelector(".holder");
  const shield = document.querySelector(".shield");
  const sheildPositionY = shield.getBoundingClientRect().y;
  const width = document.body.clientWidth - 110;
  let burgersLength = 10;
  let burgersInterval;

  //burgers' moving
  function moveBurgers() {
    const div = document.createElement("div");
    div.classList.add("burger");
    div.style.left = Math.floor(Math.random() * Math.floor(width)) + "px";
    spaceBoard.appendChild(div);
    burgersLength--;

    if (burgersLength === 0) {
      clearInterval(burgersInterval);
    }

    //shoot
    div.addEventListener("click", () => {
      div.style.display = "none";
      scoreCount++;
      scoreText.textContent = scoreCount;
    });
  }
  burgersInterval = setInterval(moveBurgers, 1000);

  // let observer = new MutationObserver(() =>
  //   console.log(div.getBoundingClientRect().y)
  // );
  // observer.observe(spaceBoard, {
  //   childList: true,
  // });

  //holder's moving
  //   let holderPositionX = holder.getBoundingClientRect().x;
  //   let holderPositionY = holder.getBoundingClientRect().y;
  //   document.addEventListener("keydown", (e) => {
  //     console.log(
  //       "holderPositionY && holderPositionX",
  //       holderPositionY,
  //       holderPositionX
  //     );
  //     switch (e.keyCode) {
  //       case 39:
  //       case 68: //move to right
  //         if (holderPositionX < width + 10) {
  //           newHolderPositionX = holderPositionX + 30;
  //           holderPositionX = newHolderPositionX;
  //           holder.style.left = holderPositionX + "px";
  //           break;
  //         }

  //       case 37:
  //       case 65: //move to left
  //         if (holderPositionX > 0) {
  //           newHolderPositionX = holderPositionX - 30;
  //           holderPositionX = newHolderPositionX;
  //           holder.style.left = holderPositionX + "px";
  //           break;
  //         }
  //     }
  //   });

  //   document.addEventListener(
  //     "click",
  //     (e) => console.log("e.posX, e.posY", e.clientY)
  //     //after making holder have to detect posY of it, then display 'Lose'
  //   );
});
