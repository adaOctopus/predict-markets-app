import { FaqBlock } from "@/components/faq-block";
import { IntentLinks } from "@/components/intent-links";

type LearnArticleProps = {
  title: string;
  intro: string;
  sections: { heading: string; content: string }[];
  faq: { question: string; answer: string }[];
};

export function LearnArticle({ title, intro, sections, faq }: LearnArticleProps) {
  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="max-w-4xl text-slate-300">{intro}</p>
      </header>
      <IntentLinks />
      {sections.map((section) => (
        <section key={section.heading} className="glass-panel p-6">
          <h2 className="mb-2 text-xl font-semibold text-white">{section.heading}</h2>
          <p className="text-slate-300">{section.content}</p>
        </section>
      ))}
      <FaqBlock title="Page FAQ" items={faq} />
    </article>
  );
}
