import { useState, useEffect } from "react";
function Usestate() {
  const [count, setCount] = useState(20);

  useEffect(() => {
    setTimeout(() => {
      if (count === 0) return;
      setCount((count) => count - 2);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
export default Usestate;
