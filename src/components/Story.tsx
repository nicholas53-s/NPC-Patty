const CARDS = [
  {
    title: 'It starts with the patty',
    body: "One burger today. But the patty never stops there — it's the base for dish after dish. The lineup only grows.",
  },
  {
    title: 'Never compromise on quality',
    body: "Same taste. Same experience. Every visit. That's the rule that keeps members coming back.",
  },
  {
    title: 'Members, not customers',
    body: "The Patty Club isn't about the dish. It's about who you share it with. Everyone belongs.",
  },
]

export default function Story() {
  return (
    <section id="story" className="bg-npc-cream">
      <div className="mx-auto mb-10 max-w-[1100px] text-center">
        <span className="mb-[0.6rem] inline-block font-sub text-[0.72rem] font-bold uppercase tracking-[0.28em] text-npc-red">
          Our Story
        </span>
        <h2 className="m-0 font-display text-[clamp(2.4rem,6vw,4rem)] uppercase leading-[0.95] tracking-[0.01em] text-npc-red">
          Club, not chain.
        </h2>
      </div>

      <div className="mx-auto max-w-[1100px]">
        <p className="mx-auto mb-12 max-w-[820px] text-center font-sub text-[clamp(1.3rem,3.2vw,1.9rem)] font-semibold leading-[1.3] text-smoke">
          Neil's started in the kitchen — and at the counter. Years of cooking
          and serving taught one thing: a great meal isn't just eaten. It's
          shared. So the patty comes with a club.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border-2 border-npc-red bg-[#fff7e9] px-[1.6rem] py-[1.8rem]"
            >
              <h3 className="m-0 mb-[0.6rem] font-sub text-[1.05rem] font-bold uppercase tracking-[0.08em] text-npc-red">
                {card.title}
              </h3>
              <p className="m-0 leading-[1.5] text-smoke">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
