import { VortexDemo } from "./VortexDemo";


interface PageFourProps {
  isActive: boolean; // Corrected type to boolean
}
export default function PageFour({ isActive } : PageFourProps){
  return (
    <div className={`h-screen ${isActive ? '' : 'hidden'}`}>
      <VortexDemo />
    </div>
  );
}
