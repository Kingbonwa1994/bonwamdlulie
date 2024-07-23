

interface PageTwoProps {
  isActive: boolean; // Corrected type to boolean
}
export default function PageTwo({ isActive } : PageTwoProps){
  return (
    <div className={`h-screen text-white ${isActive ? '' : 'hidden'}`}>
      User Journey Mapping: Showcase your skills in crafting compelling user journeys that tell the story of a user's interaction with a product.
Interaction Design: Highlight your ability to design intuitive and engaging interactions that enhance the user experience.
Content Strategy: Emphasize your understanding of how content can be used to guide users and achieve product goals.
Accessibility Design: Demonstrate your commitment to creating inclusive designs usable by everyone.
Design Thinking: Showcase your process for approaching problems creatively and finding user-centered solutions
    </div>
  );
}
