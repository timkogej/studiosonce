import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <ScrollReveal>
          <span className="section-label block mb-3">{label}</span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`font-display text-4xl md:text-5xl leading-tight mb-4 ${
            light ? "text-white" : "text-stone-900"
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
              light ? "text-stone-300" : "text-stone-600"
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
