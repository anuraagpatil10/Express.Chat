const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-[#121212] p-12">
  <div className="max-w-md text-center text-white">
    {/* Chat bubbles animation */}
    <div className="flex flex-col gap-6 mb-10 animate-fade-in">
      {/* Sender 1 */}
      <div className="flex justify-start">
        <div className="bg-[#6D5DFB] text-white px-4 py-2 rounded-2xl max-w-[70%] shadow-md">
          Hey there! 👋
        </div>
      </div>

      {/* Sender 2 */}
      <div className="flex justify-end">
        <div className="bg-[#1F1F1F] text-white/90 px-4 py-2 rounded-2xl max-w-[70%] shadow-md">
          Hello! Ready to chat?
        </div>
      </div>

      {/* Sender 1 */}
      <div className="flex justify-start">
        <div className="bg-[#6D5DFB] text-white px-4 py-2 rounded-2xl max-w-[70%] shadow-md">
          Let’s get started.
        </div>
      </div>
    </div>

    {/* Title & subtitle */}
    <h2 className="text-3xl font-bold mb-4 tracking-tight">{title}</h2>
    <p className="text-white/70 text-lg">
      {subtitle}
    </p>
  </div>
</div>
    // <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
    //   <div className="max-w-md text-center">
    //     <div className="grid grid-cols-3 gap-3 mb-8">
    //       {[...Array(9)].map((_, i) => (
    //         <div
    //           key={i}
    //           className={`aspect-square rounded-2xl bg-primary/10 ${
    //             i % 2 === 0 ? "animate-pulse" : ""
    //           }`}
    //         />
    //       ))}
    //     </div>
    //     <h2 className="text-2xl font-bold mb-4">{title}</h2>
    //     <p className="text-base-content/60">{subtitle}</p>
    //   </div>
    // </div>
  );
};

export default AuthImagePattern;