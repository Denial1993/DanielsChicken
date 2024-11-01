import "./CodePen.css";
function CodePen() {
  return (
    <>
      <div className="container">
        <div className="chevron chevron-up"></div>

        <div className="number">256</div>

        <div className="chevron chevron-down"></div>
      </div>
    </>
  );
}
export default CodePen;

const upElement = document.querySelector(".chevron-up");
const downElement = document.querySelector(".chevron-down");
const numberElement = document.querySelector(".number");

// upElement.addEventListener("click", (e) => {
//   const currentNumber = Number(numberElement.textContent);
//   numberElement.textContent = currentNumber + 1;
// });
// downElement.addEventListener("click", (e) => {
//   const currentNumber = Number(numberElement.textContent);
//   numberElement.textContent = currentNumber - 1;
// });
