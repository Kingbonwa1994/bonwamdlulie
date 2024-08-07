import  {Vortex}  from "@/components/ui/vortex";



export function VortexDemo() {
  return (
    <div className="w-full z-[-1] fixed mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
      </Vortex>
    </div>
  );
}
