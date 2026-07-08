import Reveal from '../components/Reveal.jsx'
import StoryImage from "../assets/images/Story.png";

export default function About() {
  return (
    <section className="bg-cream py-20 dark:bg-ink-deep sm:py-28">
      <div className="ledger-rule mb-16 text-ink/10 dark:text-cream/10">
        <span className="h-1.5 w-1.5 rotate-45 shrink-0 bg-current" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <img
              src={StoryImage}
              alt="Mangalam Watch Shop"
              className="w-full rounded-lg object-cover shadow-ledger"
            />
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-gold px-6 py-4 text-center shadow-stamp">
              <p className="font-display text-2xl font-bold text-cream">30+</p>
              <p className="label-eyebrow text-cream/85">Years Trusted</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="label-eyebrow !text-3xl text-maroon dark:text-gold-light">
            Our Story
          </h2>
  
          <p className="mt-6 text-base leading-relaxed text-ink/70 dark:text-cream/70">
            Mangalam Watch Co. was founded in 1995 by Mr. Prabhudas Chandulal Solanki with a simple goal: to provide quality watches and honest service to the local community.

            Over the years, our shop has earned the trust of customers across Bapunagar and nearby areas. Many of our customers have been visiting us for years and continue to recommend us to their family and friends.

            Today, we proudly continue that tradition by offering carefully selected watches, friendly guidance, and a welcoming shopping experience for every customer.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70 dark:text-cream/70">
            Today, the shop is run with the same care by a team who know their movements,
            straps, and dials as well as they know their regular customers by name.
          </p>

          
        </Reveal>
      </div>
    </section>
  )
}
