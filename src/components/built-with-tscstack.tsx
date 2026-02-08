export const BuiltWithTSCStack = () => {
  return (
    <a
      href={`https://tscstack.vercel.app?ref=${import.meta.env.VITE_BASE_URL}`}
      className="font-bold rounded text-sm px-2 py-1 text-primary flex items-center gap-2 w-fit"
      target="_blank"
      rel="noopener"
    >
      Built with{" "}
      <img src="/tscstack-logo.png" className="w-16" alt="TSC Stack Logo" />
    </a>
  );
};
