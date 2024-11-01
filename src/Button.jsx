import { useState } from "react";

export default function Button({titleNumber}) {
  const [count, setCount] = useState(0);
 
  return (



    <button onClick={() => setCount((prev) => prev + 1)}>
      {titleNumber}. count is {count}
    </button>






  );
}
