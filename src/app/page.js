import { Button } from "@/components/ui/button";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconPhone,
  IconDownload,
  IconUser,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold text-foreground mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm Krishna, a passionate developer creating amazing digital
            experiences. Explore my work and let's build something great
            together.
          </p>
          <div className="flex gap-4 justify-center">
            <Button>View My Work</Button>
            <Button variant="outline">Download Resume</Button>
          </div>
        </section>

        {/* Add some content to test scrolling behavior */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-card rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  Project {i}
                </h3>
                <p className="text-muted-foreground mb-4">
                  Description of an amazing project that showcases my skills and
                  creativity.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* More content to test navbar behavior */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Certifications
          </h2>
          <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-background via-muted/20 to-background">
            <p className="absolute top-1/2 mx-auto max-w-md -translate-y-3/4 text-center text-xl font-semibold text-muted-foreground md:text-2xl">
              Drag the certificates around to explore my achievements
            </p>
            {[
              {
                title: "AWS Cloud Practitioner",
                description: "Amazon Web Services",
                className: "absolute top-10 left-[15%] rotate-[-3deg]",
                bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
              },
              {
                title: "React Developer",
                description: "Meta Certification",
                className: "absolute top-32 left-[25%] rotate-[-8deg]",
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
              },
              {
                title: "JavaScript Expert",
                description: "Advanced JS Concepts",
                className: "absolute top-8 left-[45%] rotate-[6deg]",
                bgColor: "bg-gradient-to-br from-yellow-400 to-amber-500",
              },
              {
                title: "Node.js Developer",
                description: "Backend Development",
                className: "absolute top-28 left-[60%] rotate-[12deg]",
                bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
              },
              {
                title: "Python Programming",
                description: "Data Science & ML",
                className: "absolute top-16 right-[25%] rotate-[2deg]",
                bgColor: "bg-gradient-to-br from-indigo-400 to-purple-600",
              },
              {
                title: "Database Management",
                description: "SQL & NoSQL",
                className: "absolute top-40 left-[35%] rotate-[-5deg]",
                bgColor: "bg-gradient-to-br from-red-400 to-pink-500",
              },
              {
                title: "Full Stack Development",
                description: "MERN Stack",
                className: "absolute top-12 left-[70%] rotate-[8deg]",
                bgColor: "bg-gradient-to-br from-teal-400 to-blue-600",
              },
            ].map((cert, index) => (
              <DraggableCardBody key={index} className={cert.className}>
                <div
                  className={`relative h-64 w-64 rounded-lg ${cert.bgColor} p-6 text-white shadow-xl`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="text-center">
                      <div className="mb-4 h-12 w-12 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold leading-tight">
                        {cert.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/80">
                        {cert.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                        Certified
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology. Feel free to
              reach out through any of the platforms below!
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-card rounded-lg border shadow-sm">
                <IconMail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground text-sm">
                  krishna.randad@example.com
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border shadow-sm">
                <IconPhone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Phone
                </h3>
                <p className="text-muted-foreground text-sm">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border shadow-sm">
                <IconUser className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-card-foreground mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground text-sm">
                  Available Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Floating Dock */}
          <div className="flex items-center justify-center">
            <FloatingDock
              mobileClassName="translate-y-4"
              items={[
                {
                  title: "Portfolio",
                  icon: (
                    <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "#",
                },
                {
                  title: "Download Resume",
                  icon: (
                    <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "#",
                },
                {
                  title: "Email",
                  icon: (
                    <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "mailto:krishna.randad@example.com",
                },
                {
                  title: "LinkedIn",
                  icon: (
                    <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "https://linkedin.com/in/krishna-randad",
                },
                {
                  title: "GitHub",
                  icon: (
                    <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "https://github.com/KrishnaRandad2023",
                },
                {
                  title: "Twitter",
                  icon: (
                    <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "https://twitter.com/krishna_randad",
                },
                {
                  title: "Phone",
                  icon: (
                    <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "tel:+15551234567",
                },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
