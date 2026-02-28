"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";

const CHRIS_STATS = [
  // === THE REAL ONES ===
  { value: 12, suffix: "+", label: "Years Leading Nonprofits" },
  { value: 30, suffix: "+", label: "Organizations Served" },
  { value: 145, suffix: "", label: "Residents Stabilized" },
  { value: 52, suffix: "", label: "Children Housed" },
  { value: 500, suffix: "K+", prefix: "$", label: "Acute-Care Costs Avoided" },
  { value: 96, suffix: "%", label: "Client Retention Rate" },
  { value: 1200, suffix: "+", label: "Lives Directly Impacted" },
  { value: 2, suffix: "M+", prefix: "$", label: "Client Budgets Managed" },
  { value: 85, suffix: "+", label: "SOPs Delivered" },
  { value: 60, suffix: "+", label: "Workflows Redesigned" },
  { value: 35, suffix: "+", label: "Training Programs Built" },
  { value: 100, suffix: "+", label: "Process Docs Created" },
  { value: 45, suffix: "+", label: "Systems Implemented" },
  { value: 15, suffix: "+", label: "Dashboards Created" },
  { value: 25, suffix: "+", label: "Board Presentations" },
  { value: 18, suffix: "", label: "Strategic Plans Written" },

  // === RESULTS FLEXING ===
  { value: 40, suffix: "%", label: "Faster Staff Onboarding" },
  { value: 3, suffix: "x", label: "Efficiency Gains" },
  { value: 50, suffix: "%", label: "Less Staff Turnover" },
  { value: 70, suffix: "%", label: "Faster Decisions" },
  { value: 90, suffix: "%", label: "On-Time Delivery" },
  { value: 100, suffix: "%", label: "On Budget" },
  { value: 4, suffix: ".9/5", label: "Satisfaction Score" },
  { value: 48, suffix: "hr", label: "Fastest Diagnostic" },
  { value: 99, suffix: "%", label: "Email Response Rate" },
  { value: 8, suffix: "", label: "Industry Sectors" },
  { value: 5, suffix: "", label: "States Operated In" },
  { value: 200, suffix: "+", label: "Stakeholder Meetings" },
  { value: 300, suffix: "+", label: "Action Items Completed" },
  { value: 75, suffix: "+", label: "Team Retreats Facilitated" },
  { value: 40, suffix: "+", label: "Grant Reports Streamlined" },
  { value: 22, suffix: "", label: "Org Charts Untangled" },

  // === GETTING SILLY ===
  { value: 10000, suffix: "+", label: "Cups of Coffee" },
  { value: 347, suffix: "", label: "Whiteboards Filled" },
  { value: 0, suffix: "", label: "Jargon Decks Delivered" },
  { value: 1, suffix: "", label: "Mission: Yours" },
  { value: 42, suffix: "", label: "Meaning of Life (Confirmed)" },
  { value: 0, suffix: "", label: "Times He Said 'Synergy'" },
  { value: 2847, suffix: "", label: "Post-It Notes Used" },
  { value: 100, suffix: "%", label: "Cares About Your Mission" },
  { value: 14, suffix: "", label: "Pens Borrowed, Never Returned" },
  { value: 1, suffix: "", label: "Nonprofit Whisperer" },
  { value: 365, suffix: "", label: "Days/Year Thinking About SOPs" },
  { value: 0, suffix: "", label: "Nonsense Tolerated" },
  { value: 7, suffix: "am", label: "Earliest Meeting Survived" },
  { value: 412, suffix: "", label: "Spreadsheet Tabs Open Right Now" },
  { value: 3, suffix: "", label: "Monitor Setup (Minimum)" },
  { value: 99, suffix: "%", label: "Operational Gravity" },

  // === PEAK UNHINGED ===
  { value: 0, suffix: "", label: "Days Off (Mentally)" },
  { value: 1, suffix: "", label: "Guy Who Reads the SOP" },
  { value: 500, suffix: "+", label: "Dad Jokes Per Quarter" },
  { value: 100, suffix: "%", label: "That Guy Energy" },
  { value: 12, suffix: "", label: "Highlighter Colors Owned" },
  { value: 0, suffix: "", label: "Meetings That Should've Been Emails" },
  { value: 1, suffix: "", label: "Legendary Handshake" },
  { value: 88, suffix: "mph", label: "Speed of Operational Fix" },
  { value: 24, suffix: "/7", label: "Availability (In Spirit)" },
  { value: 9001, suffix: "", label: "Power Level" },
  { value: 1, suffix: "", label: "Chris Pearson" },
  { value: 0, suffix: "", label: "Reasons Not to Call" },

  // === PERSONAL STATS ===
  { value: 47, suffix: "", label: "Motivational Speeches" },
  { value: 0, suffix: "", label: "Times He Lost His Cool" },
  { value: 312, suffix: "", label: "LinkedIn Endorsements" },
  { value: 6, suffix: "", label: "Fonts He Approves Of" },
  { value: 100, suffix: "%", label: "Firm Handshake Rating" },
  { value: 4, suffix: "", label: "Ties Owned (All Navy)" },
  { value: 19, suffix: "", label: "Tabs Open in Chrome" },
  { value: 0, suffix: "", label: "Unread Slack Messages" },

  // === OFFICE STATS ===
  { value: 742, suffix: "", label: "Google Docs Created" },
  { value: 11, suffix: "", label: "Standing Desk Adjustments/Day" },
  { value: 0, suffix: "", label: "Printer Jams Caused" },
  { value: 1, suffix: "", label: "Favorite Mug" },
  { value: 3500, suffix: "+", label: "Emails Sent This Year" },
  { value: 0, suffix: "", label: "Emails Ignored" },
  { value: 284, suffix: "", label: "Calendar Invites Sent" },
  { value: 0, suffix: "", label: "Meetings Without Agenda" },

  // === LIFE STATS ===
  { value: 156, suffix: "", label: "Leadership Books on Shelf" },
  { value: 8, suffix: "", label: "Books Actually Finished" },
  { value: 2, suffix: "", label: "Podcast Appearances" },
  { value: 1, suffix: "", label: "TED Talk Idea (In Progress)" },
  { value: 0, suffix: "", label: "Fear of Spreadsheets" },
  { value: 99, suffix: "%", label: "Belief in Your Nonprofit" },
  { value: 1, suffix: "", label: "Lucky Pen" },
  { value: 0, suffix: "", label: "Tolerance for BS" },

  // === VIBES ===
  { value: 100, suffix: "%", label: "Good Vibes Only" },
  { value: 0, suffix: "", label: "Times He Ghosted a Client" },
  { value: 17, suffix: "", label: "Plants on His Desk" },
  { value: 5, suffix: "/5", label: "Stars on Yelp (If Restaurant)" },
  { value: 87, suffix: "%", label: "Chance of High-Five" },
  { value: 1, suffix: "", label: "Golden Retriever Energy" },
  { value: 0, suffix: "", label: "Enemies (Known)" },
  { value: 999, suffix: "+", label: "Reasons to Hire Chris" },

  // === DEEP CUTS ===
  { value: 52, suffix: "", label: "Weeks/Year in Khakis" },
  { value: 3, suffix: "", label: "Backup Phone Chargers" },
  { value: 0, suffix: "", label: "Times He Said 'Circle Back'" },
  { value: 0, suffix: "", label: "Times He Said 'Low-Hanging Fruit'" },
  { value: 1, suffix: "", label: "Go-To Karaoke Song" },
  { value: 100, suffix: "%", label: "Would Recommend to Friend" },
  { value: 0, suffix: "", label: "Regrets" },
  { value: 1, suffix: "", label: "Absolute Legend" },

  // === META STATS ===
  { value: 500, suffix: "", label: "Stats on This Page" },
  { value: 0, suffix: "", label: "Stats That Are Wrong" },
  { value: 100, suffix: "%", label: "Stats That Are Impressive" },
  { value: 1, suffix: "", label: "Page Dedicated to Numbers" },
  { value: 0, suffix: "", label: "Apologies for This Page" },
  { value: 69, suffix: "", label: "Nice" },
  { value: 420, suffix: "", label: "Also Nice" },
  { value: 1, suffix: "", label: "GOAT" },

  // === FOOD & BEVERAGE ===
  { value: 4, suffix: "", label: "Coffees Before 9am" },
  { value: 0, suffix: "", label: "Decaf Coffees (Never)" },
  { value: 312, suffix: "", label: "Granola Bars Consumed at Desk" },
  { value: 1, suffix: "", label: "Lunch Order (Always the Same)" },
  { value: 52, suffix: "", label: "Friday Donuts Brought to Office" },
  { value: 0, suffix: "", label: "Times He Forgot Team Lunch" },
  { value: 2, suffix: "L", label: "Water Bottle Size" },
  { value: 7, suffix: "", label: "Snack Drawer Items" },

  // === FASHION & APPEARANCE ===
  { value: 0, suffix: "", label: "Casual Fridays Skipped" },
  { value: 1, suffix: "", label: "Signature Look" },
  { value: 3, suffix: "", label: "Pairs of Identical Shoes" },
  { value: 0, suffix: "", label: "Fashion Risks Taken" },
  { value: 100, suffix: "%", label: "Tucked-In Shirt Rate" },
  { value: 1, suffix: "", label: "Watch (Casio, Obviously)" },
  { value: 0, suffix: "", label: "Man Bun Attempts" },
  { value: 12, suffix: "", label: "Belt Notch (Consistent)" },

  // === TRANSPORTATION ===
  { value: 47000, suffix: "mi", label: "Driven for Client Meetings" },
  { value: 0, suffix: "", label: "Road Rage Incidents" },
  { value: 1, suffix: "", label: "Favorite Podcast for Drive" },
  { value: 3, suffix: "", label: "GPS Wrong Turns (His Fault)" },
  { value: 100, suffix: "%", label: "Seatbelt Usage" },
  { value: 0, suffix: "", label: "Speeding Tickets" },
  { value: 1, suffix: "", label: "Car Snack Stash" },
  { value: 23, suffix: "mpg", label: "Fuel Efficiency (Respectable)" },

  // === TECHNOLOGY ===
  { value: 4, suffix: "", label: "Passwords He Remembers" },
  { value: 1, suffix: "", label: "Password Manager (Finally)" },
  { value: 0, suffix: "", label: "Crypto Investments" },
  { value: 47, suffix: "", label: "Apps on Phone" },
  { value: 3, suffix: "", label: "Apps Actually Used" },
  { value: 0, suffix: "", label: "TikToks Made" },
  { value: 1, suffix: "", label: "LinkedIn Thought Leader" },
  { value: 0, suffix: "", label: "NFTs Purchased" },

  // === SPORTS & FITNESS ===
  { value: 3, suffix: "x/wk", label: "Gym Visits (Aspirational)" },
  { value: 1, suffix: "x/wk", label: "Gym Visits (Actual)" },
  { value: 0, suffix: "", label: "Marathon Finishes" },
  { value: 1, suffix: "", label: "5K Finishes (Walked Most)" },
  { value: 100, suffix: "%", label: "Effort Given" },
  { value: 0, suffix: "", label: "Protein Shakes Enjoyed" },
  { value: 1, suffix: "", label: "Fitbit (Uncharged)" },
  { value: 8000, suffix: "", label: "Steps/Day (On a Good Day)" },

  // === MEETINGS DEEP DIVE ===
  { value: 5000, suffix: "+", label: "Total Meetings Attended" },
  { value: 47, suffix: "", label: "Meetings Where He Doodled" },
  { value: 0, suffix: "", label: "Meetings He Fell Asleep In" },
  { value: 100, suffix: "%", label: "Meetings He Took Notes" },
  { value: 312, suffix: "", label: "Times He Said 'Great Question'" },
  { value: 0, suffix: "", label: "Times He Meant It Sarcastically" },
  { value: 1, suffix: "", label: "Meeting King" },
  { value: 15, suffix: "min", label: "Avg Early to Meetings" },

  // === EMOTIONAL STATS ===
  { value: 100, suffix: "%", label: "Empathy" },
  { value: 0, suffix: "", label: "Times He Raised His Voice" },
  { value: 500, suffix: "+", label: "Pep Talks Given" },
  { value: 1, suffix: "", label: "Team Cry (It Was Beautiful)" },
  { value: 0, suffix: "", label: "Grudges Held" },
  { value: 100, suffix: "%", label: "Emotional Intelligence" },
  { value: 0, suffix: "", label: "Passive-Aggressive Emails" },
  { value: 1, suffix: "", label: "Hug Radius (Appropriate)" },

  // === DOCUMENTATION OBSESSION ===
  { value: 847, suffix: "", label: "Footnotes Written" },
  { value: 0, suffix: "", label: "Docs Without Headers" },
  { value: 100, suffix: "%", label: "Table of Contents Rate" },
  { value: 3, suffix: "", label: "Favorite Font (Calibri)" },
  { value: 12, suffix: "pt", label: "Only Acceptable Font Size" },
  { value: 1, suffix: "", label: "Style Guide (Sacred)" },
  { value: 0, suffix: "", label: "Comic Sans Usage" },
  { value: 47, suffix: "", label: "Templates Created" },

  // === ANIMAL KINGDOM ===
  { value: 1, suffix: "", label: "Spirit Animal (Eagle)" },
  { value: 100, suffix: "%", label: "Dog Person" },
  { value: 0, suffix: "", label: "Cat Person (Sorry)" },
  { value: 3, suffix: "", label: "Office Fish (Named)" },
  { value: 1, suffix: "", label: "Desk Plant Named Gerald" },
  { value: 0, suffix: "", label: "Animals Harmed (Zero)" },
  { value: 100, suffix: "%", label: "Would Pet Every Dog" },
  { value: 1, suffix: "", label: "Backup Spirit Animal (Beaver, Industrious)" },

  // === WEATHER ===
  { value: 72, suffix: "°F", label: "Ideal Thermostat Setting" },
  { value: 0, suffix: "", label: "Thermostat Wars Lost" },
  { value: 100, suffix: "%", label: "Umbrella Preparedness" },
  { value: 0, suffix: "", label: "Snow Days Taken" },
  { value: 1, suffix: "", label: "Favorite Season (Fall)" },
  { value: 0, suffix: "", label: "Complaints About Weather" },
  { value: 365, suffix: "", label: "Days of Optimal Performance" },
  { value: 1, suffix: "", label: "Rain or Shine Guy" },

  // === MUSIC & CULTURE ===
  { value: 1, suffix: "", label: "Spotify Playlist (Focus Mode)" },
  { value: 0, suffix: "", label: "Times Caught Singing at Desk" },
  { value: 3, suffix: "", label: "Concert Tees Owned" },
  { value: 1, suffix: "", label: "Air Guitar Solos (Weekly)" },
  { value: 0, suffix: "", label: "Times He Played Music Too Loud" },
  { value: 47, suffix: "", label: "Podcasts Subscribed To" },
  { value: 5, suffix: "", label: "Podcasts Actually Listened To" },
  { value: 1, suffix: "", label: "NPR Tote Bag" },

  // === SLEEP ===
  { value: 6, suffix: "hr", label: "Avg Sleep (Weeknight)" },
  { value: 5, suffix: "am", label: "Alarm Setting" },
  { value: 0, suffix: "", label: "Times He Hit Snooze" },
  { value: 100, suffix: "%", label: "Morning Person Rating" },
  { value: 0, suffix: "", label: "Naps at Work" },
  { value: 1, suffix: "", label: "Pillow (Firm)" },
  { value: 3, suffix: "", label: "Dreams About Org Charts" },
  { value: 0, suffix: "", label: "Nightmares (He IS the Nightmare for Inefficiency)" },

  // === COMMUNICATION ===
  { value: 0, suffix: "", label: "Voicemails Left Unreturned" },
  { value: 100, suffix: "%", label: "Reply-All Accuracy" },
  { value: 0, suffix: "", label: "Accidental Reply-Alls" },
  { value: 47, suffix: "", label: "Thank You Cards Sent" },
  { value: 1, suffix: "", label: "Signature Sign-Off (Best)" },
  { value: 0, suffix: "", label: "Emails Sent in ALL CAPS" },
  { value: 3, suffix: "", label: "Exclamation Points Per Email (Max)" },
  { value: 100, suffix: "%", label: "Professional Yet Warm" },

  // === SUPERPOWERS ===
  { value: 100, suffix: "%", label: "X-Ray Vision for Dysfunction" },
  { value: 1, suffix: "", label: "Superpower (Clarity)" },
  { value: 0, suffix: "", label: "Kryptonite (None Found)" },
  { value: 88, suffix: "%", label: "Telekinesis (Pending)" },
  { value: 1, suffix: "", label: "Cape (Metaphorical)" },
  { value: 0, suffix: "", label: "Villains Defeated (They All Quit)" },
  { value: 100, suffix: "%", label: "Heroic" },
  { value: 1, suffix: "", label: "Catchphrase: 'Let's Build Systems'" },

  // === HOLIDAY STATS ===
  { value: 0, suffix: "", label: "Holiday Parties Missed" },
  { value: 1, suffix: "", label: "Secret Santa MVP" },
  { value: 100, suffix: "%", label: "Birthday Card Signing Rate" },
  { value: 12, suffix: "", label: "Ugly Sweaters Owned" },
  { value: 0, suffix: "", label: "Gift Returns" },
  { value: 1, suffix: "", label: "Office Potluck Dish (Legendary Chili)" },
  { value: 100, suffix: "%", label: "Holiday Spirit" },
  { value: 0, suffix: "", label: "Bah Humbugs" },

  // === GEOGRAPHY ===
  { value: 50, suffix: "", label: "States Visited" },
  { value: 0, suffix: "", label: "Countries Banned From" },
  { value: 1, suffix: "", label: "Hometown Pride" },
  { value: 3, suffix: "", label: "Favorite Time Zones" },
  { value: 0, suffix: "", label: "Lost Luggage Incidents" },
  { value: 100, suffix: "%", label: "Knows Where NC Is" },
  { value: 1, suffix: "", label: "Triangle Area Enthusiast" },
  { value: 0, suffix: "", label: "Directions Needed (He Has GPS)" },

  // === AWARDS (SELF-GIVEN) ===
  { value: 1, suffix: "", label: "Employee of the Month (Self)" },
  { value: 12, suffix: "", label: "Months in a Row" },
  { value: 1, suffix: "", label: "Most Likely to Succeed (Again)" },
  { value: 100, suffix: "%", label: "Award Acceptance Speech Ready" },
  { value: 1, suffix: "", label: "Oscar-Worthy SOPs" },
  { value: 0, suffix: "", label: "Humble Brags (This Page Excluded)" },
  { value: 1, suffix: "", label: "Participation Trophy (Ironic)" },
  { value: 100, suffix: "%", label: "Deserves a Raise" },

  // === COOKING ===
  { value: 3, suffix: "", label: "Recipes He Knows" },
  { value: 1, suffix: "", label: "Signature Dish (Pasta)" },
  { value: 0, suffix: "", label: "Kitchen Fires" },
  { value: 100, suffix: "%", label: "Grill Confidence" },
  { value: 47, suffix: "", label: "Takeout Orders This Year" },
  { value: 0, suffix: "", label: "Times He Cooked for the Team" },
  { value: 1, suffix: "", label: "Instant Pot (Unused)" },
  { value: 5, suffix: "", label: "Hot Sauce Bottles" },

  // === PHILOSOPHICAL ===
  { value: 1, suffix: "", label: "Purpose in Life (Found)" },
  { value: 0, suffix: "", label: "Existential Crises at Work" },
  { value: 100, suffix: "%", label: "Meaning Found in Helping Others" },
  { value: 0, suffix: "", label: "Times He Questioned His Path" },
  { value: 1, suffix: "", label: "North Star (Impact)" },
  { value: 42, suffix: "", label: "Answer to Everything" },
  { value: 0, suffix: "", label: "Unfulfilled Dreams" },
  { value: 1, suffix: "", label: "Legacy in Progress" },

  // === RANDOM INTERNET ===
  { value: 0, suffix: "", label: "Memes Created" },
  { value: 47, suffix: "", label: "Memes Appreciated" },
  { value: 1, suffix: "", label: "WiFi Name (FBI Van 3)" },
  { value: 0, suffix: "", label: "Viral Moments" },
  { value: 100, suffix: "%", label: "Internet Literacy" },
  { value: 0, suffix: "", label: "Online Arguments" },
  { value: 1, suffix: "", label: "Browser (Chrome, Loyal)" },
  { value: 0, suffix: "", label: "Times He Cleared His Cache" },

  // === THE PENTAGON OF CHRIS ===
  { value: 100, suffix: "%", label: "Integrity" },
  { value: 100, suffix: "%", label: "Work Ethic" },
  { value: 100, suffix: "%", label: "Reliability" },
  { value: 100, suffix: "%", label: "Trustworthiness" },
  { value: 100, suffix: "%", label: "Dedication" },
  { value: 100, suffix: "%", label: "Authenticity" },
  { value: 100, suffix: "%", label: "Compassion" },
  { value: 100, suffix: "%", label: "Focus" },

  // === BATHROOM STATS ===
  { value: 0, suffix: "", label: "Times He Forgot to Wash Hands" },
  { value: 100, suffix: "%", label: "Replaces the TP Roll" },
  { value: 1, suffix: "", label: "Has His Own Mug (DO NOT USE)" },
  { value: 0, suffix: "", label: "Kitchen Sink Dishes Left" },
  { value: 100, suffix: "%", label: "Cleans Up After Himself" },
  { value: 0, suffix: "", label: "Microwave Disasters" },
  { value: 1, suffix: "", label: "Office MVP" },
  { value: 0, suffix: "", label: "HR Complaints Filed" },

  // === FINAL BOSS STATS ===
  { value: 9999, suffix: "", label: "HP" },
  { value: 100, suffix: "", label: "Attack (Operational)" },
  { value: 100, suffix: "", label: "Defense (Emotional)" },
  { value: 99, suffix: "", label: "Speed (See: 48hr Diagnostic)" },
  { value: 100, suffix: "", label: "Charisma" },
  { value: 1, suffix: "", label: "Final Boss of Nonprofits" },
  { value: 0, suffix: "", label: "Weaknesses Found" },
  { value: 1, suffix: "", label: "Achievement Unlocked: 500 Stats" },

  // === GRAND FINALE ===
  { value: 0, suffix: "", label: "Reasons This Page Should Exist" },
  { value: 1, suffix: "", label: "Reason It Does: Chris" },
  { value: 100, suffix: "%", label: "Worth Scrolling This Far" },
  { value: 0, suffix: "", label: "People Who Regret Hiring Chris" },
  { value: 1, suffix: "M", label: "Dollar Smile" },
  { value: 0, suffix: "", label: "Chance We're Deleting This" },
  { value: 10, suffix: "/10", label: "Would Operate Again" },
  { value: 1, suffix: "", label: "Call Him" },
];

function useChaosCounter(base: number) {
  const [count, setCount] = useState(base);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRef(false);
  const wobble = useMemo(() => Math.max(1, Math.ceil(base * 0.3)), [base]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const speed = 300 + Math.random() * 1200;

    const interval = setInterval(() => {
      if (!isVisible.current) return;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const delta = Math.ceil(Math.random() * wobble) * direction;
      setCount((prev) => {
        const next = prev + delta;
        if (next > base + wobble) return base + Math.ceil(Math.random() * wobble);
        if (next < Math.max(0, base - wobble)) return base;
        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [base, wobble]);

  return { count, ref };
}

function MiniStat({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}) {
  const { count, ref } = useChaosCounter(value);
  return (
    <div ref={ref} className="text-center py-1.5">
      <span className="text-lg sm:text-xl font-serif text-navy font-bold leading-none tabular-nums">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-0.5 text-slate-brand text-[8px] sm:text-[10px] uppercase tracking-wider leading-tight">
        {label}
      </p>
    </div>
  );
}

export function StatsShowcase() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="By the Numbers"
        title="Every. Single. Stat."
        subtitle="We ran out of room on the resume so we put them all here."
      />

      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1 sm:gap-1.5">
        {CHRIS_STATS.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className="p-1 sm:p-1.5 rounded-md bg-fog/40 ring-1 ring-navy/5 hover:bg-teal/5 hover:ring-teal/20 transition-colors duration-200"
          >
            <MiniStat
              value={stat.value}
              suffix={stat.suffix}
              prefix={"prefix" in stat ? (stat.prefix as string) : ""}
              label={stat.label}
            />
          </div>
        ))}
      </div>

      <p className="text-center text-slate-brand/50 text-xs mt-8">
        Yes, all {CHRIS_STATS.length} of these are real.* <br />
        <span className="text-[10px]">*Some may be aspirational. Or fictional. Or both.</span>
      </p>
    </SectionWrapper>
  );
}
