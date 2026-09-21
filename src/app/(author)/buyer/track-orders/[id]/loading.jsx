const Loading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#f3f3ef]">
      <div
        className="size-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700"
        role="status"
        aria-label="Loading order details"
      />
    </div>
  );
};

export default Loading;
