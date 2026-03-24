import type { FC } from "react";

type Internship = {
  title: string;
  period: string;
  status: "upcoming" | "planned";
};

const internships: Internship[] = [
  {
    title: "LIA 1 – Internship",
    period: "October 2026 - December 2026",
    status: "upcoming"
  },
  {
    title: "LIA 2 – Internship",
    period: "February 2027 - April 2027",
    status: "planned"
  }
];

const InternshipSection: FC = () => {
  const getStatusStyle = (status: Internship["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-[#d6dde8]/40 text-[#3b4a6b]";
      case "planned":
        return "bg-[#e8d8a8]/40 text-[#8a6d2f]";
    }
  };

  return (
    <section id="internship" className="py-24 md:py-32 bg-[#f1ede7]">
      <div className="max-w-4xl mx-auto px-6 text-center">


      <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Internship
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c3a33]">
          Internship<span className="text-accent">.</span>
        </h2>

        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Practical experience as part of my education, where I apply my skills in real-world environments.
        </p>

        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
  Based in Säffle, open to on-site, hybrid, or remote internships across Värmland and nearby areas.
</p>

        {/* List */}
        <div className="grid gap-4 sm:grid-cols-2">
          {internships.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start justify-between p-4 rounded-xl border border-[#2c3a33]/40 bg-background h-full text-left"
            >
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.period}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full mt-4 ${getStatusStyle(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InternshipSection;