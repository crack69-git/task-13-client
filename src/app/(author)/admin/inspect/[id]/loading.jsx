const Loading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#f5f7f9]">
      <div
        className="size-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700"
        role="status"
        aria-label="Loading inspection details"
      />
    </div>
  );
};

export default Loading;
