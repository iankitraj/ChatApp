const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center w-full bg-[#0f172a] text-white p-10">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="aspect-square w-16 rounded-lg bg-[#1e293b] shadow-inner"
          />
        ))}
      </div>
      <div className="text-center max-w-xs">
        <h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
