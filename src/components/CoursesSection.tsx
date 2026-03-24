import { useState } from "react";

type Course = {
  title: string;
  status: "ongoing" | "finished" | "upcoming";
};

const courses: Course[] = [
  { title: "Java Programming", status: "finished" },
  { title: "Personal Development & Leadership", status: "finished" },
  { title: "Database Technology", status: "finished" },
  { title: "Web Application Development", status: "finished" },
  { title: "Cloud Development with AWS", status: "ongoing" },
  { title: "Cloud Security", status: "upcoming" },
  { title: "Software Testing", status: "upcoming" },
  { title: "Agile Project Management", status: "upcoming" }
];

const CoursesSection = () => {
  const [filter, setFilter] = useState<"all" | Course["status"]>("all");

  const filtered = courses.filter(
    (course) => filter === "all" || course.status === filter
  );


  const getStatusStyle = (status: Course["status"]) => {
    switch (status) {
      case "finished":
        return "bg-[#a8bfa6]/30 text-[#3e5f4a]";
      case "ongoing":
        return "bg-[#e8d8a8]/40 text-[#8a6d2f]";
      case "upcoming":
        return "bg-[#d6dde8]/40 text-[#3b4a6b]";
    }
  };

  return (
    <section id="courses" className="py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">


      <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Courses
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c3a33]">
          Courses<span className="text-accent">.</span>
        </h2>

        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Courses I have completed, am currently studying, or will take as part of my education.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {["all", "ongoing", "upcoming", "finished"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === f
                  ? "bg-foreground text-background"
                  : "border-border text-muted-foreground hover:bg-background"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((course) => (
            <div
              key={course.title}
              className="flex justify-between items-center p-4 rounded-xl border border-border bg-background h-full"
            >
              <span className="font-medium">{course.title}</span>

              <span
                className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(
                  course.status
                )}`}
              >
                {course.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;