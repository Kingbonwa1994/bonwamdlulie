

interface PageFourProps {
  isActive: boolean; // Corrected type to boolean
}
export default function PageFour({ isActive } : PageFourProps){
  return (
    <div className={`h-screen ${isActive ? '' : 'hidden'}`}>
      {/* Content for Component X */}
    </div>
  );
}
