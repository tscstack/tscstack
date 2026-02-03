export const BuiltWithIndieShip = () => {
  return (
    <a
      href={`https://indieship.xyz?ref=${import.meta.env.VITE_BASE_URL}`}
      className="font-bold rounded text-sm px-2 py-1 text-primary flex items-center gap-2 w-fit"
      target="_blank"
      rel="noopener"
    >
      Built with{" "}
      <img src="/indieship-logo.png" className="w-16" alt="IndieShip Logo" />
    </a>
  );
};
