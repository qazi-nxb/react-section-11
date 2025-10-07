import { useEffect,useState } from "react";

export default function ProgressBar({timer}) {
    const [progress, setProgress] = useState(timer);

    useEffect(() => {
      const interval = setInterval(() => {
        console.log(progress);
          setProgress((prevProgress) => prevProgress - 10);
        },10);
  
        return () => {
          console.log("Clearing interval");
          clearInterval(interval);
        };
    }, []);

    
    return (
        <progress value={progress} max={timer} />
    );
}