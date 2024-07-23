import { SparklesPreview } from "./SparklesDemo";
import { FlipWords } from "./ui/flip-words";


interface PageOneProps {
  isActive: boolean; 
}
export default function PageOne({ isActive } : PageOneProps){
  const words = ['UX_Architect', 'TypeScript_Developer', 'Nextjs_Ethusiasits', 'React_Native_Fan']

  return (
    <div className={` overflow-hidden z-10 w-full relative flex flex-col top-32${isActive ? '' : 'hidden'}`}>
      <FlipWords className="text-pink-300 text text-3xl text-center justify-center" words={words} />
      <SparklesPreview />
    </div>
  );
}