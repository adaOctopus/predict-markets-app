type FaqItem = {
  question: string;
  answer: string;
};

type FaqBlockProps = {
  title?: string;
  items: FaqItem[];
};

export function FaqBlock({ title = "Frequently Asked Questions", items }: FaqBlockProps) {
  return (
    <section className="rounded-2xl border border-slate-300 bg-white p-6 dark:border-black dark:bg-black">
      <h2 className="mb-4 text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="rounded-lg border border-slate-300 bg-white p-4 dark:border-white/20 dark:bg-black"
          >
            <summary className="cursor-pointer text-slate-950 dark:text-white">{item.question}</summary>
            <p className="mt-2 text-slate-700 dark:text-white/75">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
