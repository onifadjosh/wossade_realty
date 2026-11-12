import React from "react";

const PageHeader = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <header className="bg-[#f4f0e8] pt-32 md:pt-40 pb-6 md:pb-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[0.95] text-[#10241c]">
          {title}
        </h1>
        {children ? (
          <div className="mt-5 max-w-2xl text-lg text-[#10241c]/65 leading-relaxed">
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default PageHeader;
