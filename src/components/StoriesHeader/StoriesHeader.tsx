export const StoriesHeader = () => {
  return (
    <header className="p-5 bg-sagnir-100">
      <div className="flex flex-col md:flex md:flex-row md:justify-center">
        <div className="w-11 h-11 mb-7">
          <img src="../../src/assets/resources/Logo.svg" alt="sagnir-logo" />
        </div>
      </div>

      <h1 className="font-glare text-4xl text-sagnir-200 mb-5 md:text-5xl md:text-center">
        SÖGUR
      </h1>
      <p className="font-glare text-sagnir-200 text-sm md:text-lg md:text-center">
        Sökkvum okkur ofan í íslenskar þjóðsögur
      </p>
    </header>
  );
};
